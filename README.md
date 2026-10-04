# Cloudful.io

Cloudful creates reusable components, libraries, and web applications. The site follows the philosophy: **Build once. Deploy many.**

## Local development

Requires Node.js and npm.

```sh
npm start
```

This generates the static site and serves it at `http://localhost:3000`. Page content is maintained as HTML fragments in `src/pages/`; shared navigation, page metadata, and the common document shell are in `scripts/build.js`. Site styles and the small navigation/contact-form enhancement are in `src/site.css` and `src/site.js`.

## Build and deployment

```sh
npm run build
npm run deploy
```

The build writes complete static pages to `build/`. Deployment publishes that directory to the `gh-pages` branch and sets the `cloudful.io` custom domain. It requires the repository's GitHub Pages setup and a maintainer with permission to publish.

## Contact form

The contact form remains unavailable until a delivery endpoint is selected and configured. To enable it in a build, set `CONTACT_FORM_ENDPOINT` to the endpoint's public HTTPS URL. The endpoint must accept multipart form submissions from `https://cloudful.io`, return a successful response only after accepting the message, and handle spam prevention, access controls, retention, and delivery to the site manager. Do not put credentials or secret tokens in this URL; it is included in public page code.
