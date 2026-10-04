# Cloudful.io Marketing Website Product Requirements

## 1. Problem

People who visit Cloudful.io need a clear way to understand what Cloudful offers and how to learn more or acquire an available product or service. The site is the public marketing presence for Cloudful.io and should help turn visitor interest into appropriate follow-up or business opportunities.

## 2. Goal

Explain Cloudful.io's products and services to prospective users and customers. Cloudful.io creates reusable components, libraries, and web applications guided by the philosophy **Build once, deploy many**. The site should help visitors understand the value of that approach, explore current offerings, and find the next step for an offering that interests them.

## 3. Users

- **Reader / prospective customer:** Visits `https://cloudful.io` to understand Cloudful.io, compare its products and services, and find out how to obtain or discuss an offering.
- **Content author:** Updates site content as products, services, and company information change. Authors work in the website repository; page content lives in `src/pages/` and is published as static pages.

## 4. User stories

- As a content author, I want to add or revise a page in `src/pages/` so I can share new or updated products and services.
- As a reader, I want to understand what Cloudful.io does and what “Build once, deploy many” means.
- As a reader, I want to learn about a product, what it does, and who it is for.
- As a reader, I want to learn about a service and whether it fits my needs.
- As a reader, I want a clear next step for acquiring or asking about an available product or service.
- As a reader, I want to find company information and a way to contact Cloudful.io.

## 5. Functional requirements

1. **Home page:** The root page introduces Cloudful.io and communicates its build-once, deploy-many philosophy. It provides clear paths to browse products and services.
2. **Primary navigation:** The site provides links to Home, About, Products, Services, and Contact. Navigation is available in desktop and mobile layouts, and the Cloudful identity links back to Home.
3. **About page:** The page explains Cloudful.io and its approach. If approved company details are not yet available, the page must not present invented claims.
4. **Products page:** The page presents currently available products. Each product entry explains its purpose and intended audience and, where known, provides a next step to learn more or obtain it. Unavailable or unreleased products are not represented as currently available.
5. **Services page:** The page presents currently available services, with enough information for a reader to understand their purpose and how to ask about them.
6. **Contact page:** The page provides an approved way to reach the site manager. The planned experience includes a visitor contact form that submits a message to the site manager. Until the submission destination is configured, the page must not present a nonfunctional form as if it can send messages; it may provide another approved contact route or say that contact is forthcoming.
7. **Content maintenance:** Authors can update page content and associated assets in the repository and publish those changes through the site's normal build and deployment process.
8. **Direct navigation:** Each public page can be opened through its site URL as well as reached through navigation. Unknown paths receive a clear not-found experience or return to Home.
9. **Metadata:** The site has a descriptive document title and summary suitable for browser tabs and search previews. Page metadata should describe the page currently being viewed where the hosting setup supports it.

## 6. Non-functional requirements

- **Responsive:** Pages and navigation remain usable on common mobile, tablet, and desktop viewport sizes.
- **Accessible:** Content uses a logical heading structure, meaningful link text, text alternatives for informative images, keyboard-operable navigation, and sufficient text/background contrast. Interactive controls expose accessible names and state.
- **Readable:** Page content uses plain language, scannable sections, and consistent naming for products and services.
- **Performance:** Core page content and navigation should load promptly on typical broadband and mobile connections. Images should be sized appropriately and should not unnecessarily delay the main content.
- **Compatibility:** The site supports current mainstream desktop and mobile browsers that are supported by its production build configuration.
- **Maintainability:** Page content and assets remain manageable by authors working in the repository. Shared navigation and site-wide presentation remain consistent across pages.
- **Reliability:** Published pages and links should work in the production site, including when opened directly or refreshed.
- **Contact form delivery:** The planned form must use a secure delivery path, provide a clear outcome to the visitor, and avoid exposing submission credentials or private message data in public page code. Delivery depends on selecting and configuring a submission destination.

## 7. Acceptance criteria

- A visitor can identify Cloudful.io's purpose and the “Build once, deploy many” philosophy from the Home page.
- The primary navigation exposes About, Products, Services, and Contact and is usable on desktop and mobile.
- Each of the four information pages is reachable from navigation and can be opened directly at its public route.
- Product and service content describes only offerings and acquisition details confirmed by Cloudful.io; a visitor can identify the next step where one has been provided.
- Authors can update the relevant page content in `src/pages/` and publish it through the repository's existing site workflow.
- Pages have meaningful titles/headings, keyboard-usable navigation, and appropriate text alternatives for informative imagery.
- When the selected submission destination is configured, visitors can submit a valid message, receive a success message only after the submission is accepted, and understand how to correct invalid fields or recover from a failed submission.
- Before submission is enabled, the contact form explains what information is collected and how it will be used.
- Unknown routes do not silently display unrelated page content.
- No prices, guarantees, capabilities, customer claims, contact details, or availability claims are invented to fill content gaps.

## 8. Business rules

- Cloudful.io's stated offering categories are reusable components, libraries, and web applications; describe individual items only when their details have been confirmed.
- Use **Build once, deploy many** as the current product philosophy. Keep capitalization consistent across site copy.
- Distinguish products from services so visitors can understand what is offered.
- Describe an offering as available only when Cloudful.io has confirmed that it can be acquired or engaged.
- Provide acquisition instructions only when the relevant process is known. Otherwise, present an approved inquiry path or identify the information as forthcoming.
- Keep company, product, service, pricing, support, and contact statements factual and current.

## 9. Edge cases

- **No offerings published yet:** Explain the category without implying a specific product or service is available; keep the relevant page useful and avoid dead-end acquisition links.
- **Offering details are incomplete:** Publish only confirmed details and omit unsupported claims. The page must still indicate whether more information or a next step is available.
- **Offering is retired or temporarily unavailable:** Remove it from current offerings or label its status clearly, and remove or update acquisition links.
- **No contact destination configured:** Do not show a broken form, placeholder email address, or dead link. Use concise approved copy or leave the contact route as forthcoming.
- **Invalid or incomplete form fields:** Identify the fields that need attention, preserve the visitor's entered values where practical, and do not submit invalid data.
- **Repeated or automated submissions:** Apply an approved spam prevention approach without making the form inaccessible to legitimate visitors.
- **Unknown URL:** Show a clear not-found state or a clear route back to Home.
- **Images fail or are unavailable:** Text content and navigation remain usable; informative imagery has an appropriate text alternative.
- **Long or narrow content:** Text, navigation, and page layout remain readable without horizontal scrolling at supported viewport sizes.

## 10. Error states

- If contact form submission fails, explain that the message was not sent and provide a safe retry or alternate contact route. Do not claim success until submission is confirmed.
- If the submission service is unavailable or rejects a request, explain that the message was not delivered, retain entered values in the form where practical, and provide the approved recovery path.
- If a product or service destination is unavailable, do not leave a misleading acquisition link; show an approved alternative or omit the link.
- If a page cannot be found, communicate that clearly and provide navigation back to the site.
- If JavaScript or a build asset fails, the production experience should not imply that an inquiry or purchase was completed. The current site is a client-rendered application, so essential route availability depends on its application assets loading.

## 11. UX considerations

- Make the purpose of the site apparent early on the Home page, followed by direct paths into Products and Services.
- Use persistent, consistent primary navigation and identify the Cloudful brand as a Home link.
- Give each product and service enough structure to scan: name, purpose, intended audience where known, and the next step where available.
- Use calls to action that describe their destination, such as “View product details” or “Contact Cloudful,” rather than vague labels.
- Keep mobile navigation easy to open, understand, and dismiss, with visible focus and a clear expanded/collapsed state.
- Treat imagery as supporting content. Text must communicate the offering without depending on a decorative hero image.
- Avoid temporary “Available soon” copy once the corresponding approved content is ready; ensure any remaining placeholder copy sets accurate expectations.

## 12. Data considerations

- The source of truth for website copy and assets is the version-controlled site repository.
- Page content is authored as HTML fragments under `src/pages/` and generated into static pages; assets are maintained under `src/assets/images/`.
- Public page content is intended for public viewing. Do not put secrets, private customer information, or unpublished sensitive details in the site source or public assets.
- Keep product/service facts and links synchronized with the actual offering and acquisition process.
- No reader account, user-generated content, database, or content management system is specified by this PRD.
- The planned contact form collects information submitted by visitors. The exact fields, submission provider, retention period, and access controls require a product decision before implementation.
- Analytics and other tracking are unspecified and require an explicit product decision before implementation.

## 13. Security and privacy considerations

- Public pages must not expose credentials, private customer information, internal-only materials, or unreleased sensitive product details.
- External links must point to intended, trustworthy destinations and should be reviewed when content is updated.
- The planned contact form must collect only information needed to respond to the visitor, explain the use of submitted information, and protect it in transit and at rest through the chosen submission service.
- Contact submissions must be delivered only to the authorized site manager or their approved support destination. Restrict access and retention according to the policy chosen before launch.
- Do not put submission credentials or service secrets in browser-delivered code. Use an appropriately protected server-side or managed form submission path.
- If analytics or other data collection is added, collect only what is needed for its stated purpose and update the site's disclosures accordingly.
- Do not imply that a message was submitted or received unless the site has confirmed that outcome.
- The current site has no specified account system or personal-data collection flow; any new collection requires updated requirements and privacy disclosures.

## 14. Dependencies

- The public Cloudful.io domain and its deployment configuration.
- The static page build, shared navigation, public domain, and production deployment workflow.
- Approved and current company, product, service, and contact information from Cloudful.io.
- Approved brand assets and any product imagery used on the site.
- A selected contact form delivery service or server-side submission endpoint, plus an authorized destination for messages.
- Any future commerce, analytics, or external product destinations that Cloudful.io chooses to adopt.

## 15. Out of scope

- Building or changing the products, libraries, components, or services marketed by the site.
- User accounts, authentication, reader profiles, or a customer portal.
- E-commerce, checkout, payment processing, subscriptions, or automated provisioning.
- A CMS or non-technical content-authoring workflow; the current authoring model is repository-based.
- Blog, news, documentation, or support-center functionality unless separately prioritized.
- Analytics, tracking, advertising, or CRM integration beyond receiving and routing contact form submissions, until approved as a separate requirement.
- Guarantees about search ranking, sales conversion, or traffic growth.

## 16. Open questions

- Which products and services are currently available, and what approved descriptions, audiences, capabilities, and limitations should appear for each?
- What is the intended acquisition path for each offering: self-service download, package registry, hosted application, sales inquiry, or another route?
- Which fields should the contact form request, and which fields are required?
- Which form submission provider or server-side endpoint should receive submissions, and what is the authorized destination for the site manager?
- What spam prevention method, retention period, access policy, privacy notice, and response expectation should apply to contact submissions?
- Who owns responses to submitted inquiries, and what fallback contact method should be shown if form delivery is unavailable?
- What company background and brand language should the About page include?
- Should the site support multiple languages?
- Should a blog, product documentation, customer stories, or support content be linked from this site, now or later?
- Is analytics desired? If so, which events and provider are acceptable, and what privacy/consent requirements apply?
- Are there brand, accessibility, browser support, performance, or search metadata standards beyond the baseline requirements above?
- What is the process and owner for reviewing outdated product/service pages and links?
