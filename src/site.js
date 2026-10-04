const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-navigation');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.querySelector('.visually-hidden').textContent = isOpen ? 'Open navigation' : 'Close navigation';
    navigation.classList.toggle('is-open', !isOpen);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      menuButton.click();
      menuButton.focus();
    }
  });
}

const contactForm = document.querySelector('#contact-form');
const endpoint = window.CLOUDFUL_CONTACT_ENDPOINT;

if (contactForm && endpoint) {
  contactForm.hidden = false;
  document.querySelector('#contact-unavailable').hidden = true;

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const status = document.querySelector('#form-status');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const formData = new FormData(contactForm);

    if (formData.get('website')) {
      status.textContent = 'Your message could not be sent. Please try again.';
      return;
    }

    submitButton.disabled = true;
    status.textContent = 'Sending your message…';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (!response.ok) throw new Error('Submission was not accepted');
      contactForm.reset();
      status.textContent = 'Thanks. Your message has been sent.';
    } catch {
      status.textContent = 'Your message was not sent. Please check your connection and try again.';
    } finally {
      submitButton.disabled = false;
    }
  });
}
