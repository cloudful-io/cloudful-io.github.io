const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'build');
const pagesRoot = path.join(root, 'src', 'pages');
const assetRoot = path.join(root, 'src', 'assets', 'images');
const pageNames = ['home', 'about', 'products', 'services', 'contact'];
const contactEndpoint = process.env.CONTACT_FORM_ENDPOINT || '';
const navItems = [
  ['About', '/about/', 'about'],
  ['Products', '/products/', 'products'],
  ['Services', '/services/', 'services'],
  ['Contact', '/contact/', 'contact'],
];

if (contactEndpoint && !/^https:\/\//i.test(contactEndpoint)) {
  throw new Error('CONTACT_FORM_ENDPOINT must be an HTTPS URL.');
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

function renderPage(page) {
  const title = `${page.title} | Cloudful`;
  const nav = navItems.map(([label, href, key]) => (
    `<a href="${href}"${page.id === key ? ' aria-current="page"' : ''}>${label}</a>`
  )).join('\n          ');
  const body = fs.readFileSync(path.join(pagesRoot, `${page.id}.html`), 'utf8');
  const contactConfig = contactEndpoint
    ? `window.CLOUDFUL_CONTACT_ENDPOINT = ${JSON.stringify(contactEndpoint).replace(/</g, '\\u003c')};`
    : 'window.CLOUDFUL_CONTACT_ENDPOINT = "";';

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#0c182a">
    <meta name="description" content="${escapeHtml(page.description)}">
    <link rel="icon" href="/favicon.ico">
    <link rel="stylesheet" href="/site.css">
    <link rel="canonical" href="https://cloudful.io${page.path}">
    <title>${escapeHtml(title)}</title>
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="/" aria-label="Cloudful home">
          <img src="/images/logo.png" width="44" height="44" alt="">
          <span>cloudful<span class="brand-dot">.</span></span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation">
          <span class="menu-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Open navigation</span>
        </button>
        <nav id="primary-navigation" class="primary-navigation" aria-label="Main navigation">
          ${nav}
        </nav>
      </div>
    </header>
    <main id="main">${body}</main>
    <footer class="site-footer">
      <div class="footer-inner">
        <a class="footer-brand" href="/">cloudful<span class="brand-dot">.</span></a>
        <p>Build once. Deploy many.</p>
        <span>© ${new Date().getFullYear()} Cloudful.io</span>
      </div>
    </footer>
    <script>${contactConfig}</script>
    <script src="/site.js" defer></script>
  </body>
</html>`;
}

const pages = {
  home: { id: 'home', title: 'Reusable software for what comes next', description: 'Cloudful creates reusable components, libraries, and web applications. Build once. Deploy many.', path: '/' },
  about: { id: 'about', title: 'About Cloudful', description: 'Learn about Cloudful and the build-once, deploy-many approach.', path: '/about/' },
  products: { id: 'products', title: 'Products', description: 'Explore Cloudful product categories: reusable components, libraries, and web applications.', path: '/products/' },
  services: { id: 'services', title: 'Services', description: 'Learn about Cloudful services and how to ask about working together.', path: '/services/' },
  contact: { id: 'contact', title: 'Contact', description: 'Contact the Cloudful site manager.', path: '/contact/' },
};

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const name of pageNames) {
  const page = pages[name];
  const directory = page.path === '/' ? output : path.join(output, page.path.slice(1, -1));
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), renderPage(page));
}

fs.writeFileSync(path.join(output, '404.html'), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#0c182a"><title>Page not found | Cloudful</title><link rel="stylesheet" href="/site.css"></head>
<body><a class="skip-link" href="#main">Skip to content</a><header class="site-header"><div class="header-inner"><a class="brand" href="/" aria-label="Cloudful home"><img src="/images/logo.png" width="44" height="44" alt=""><span>cloudful<span class="brand-dot">.</span></span></a></div></header><main id="main" class="page-hero wrap"><p class="eyebrow">404 · Page not found</p><h1>That page isn’t here.</h1><p class="page-lede">The page may have moved, or the address may be incorrect.</p><p><a class="button button-dark" href="/">Back to Cloudful <span aria-hidden="true">↗</span></a></p></main><footer class="site-footer"><div class="footer-inner"><a class="footer-brand" href="/">cloudful<span class="brand-dot">.</span></a><p>Build once. Deploy many.</p><span>© ${new Date().getFullYear()} Cloudful.io</span></div></footer></body></html>`);

fs.copyFileSync(path.join(root, 'src', 'site.css'), path.join(output, 'site.css'));
fs.copyFileSync(path.join(root, 'src', 'site.js'), path.join(output, 'site.js'));
fs.cpSync(assetRoot, path.join(output, 'images'), { recursive: true });
fs.copyFileSync(path.join(root, 'public', 'favicon.ico'), path.join(output, 'favicon.ico'));
fs.copyFileSync(path.join(root, 'public', 'robots.txt'), path.join(output, 'robots.txt'));
fs.writeFileSync(path.join(output, 'CNAME'), 'cloudful.io\n');
