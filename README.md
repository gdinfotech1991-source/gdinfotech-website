# [Business Name] — Static Website Starter

A mobile-first, multi-page small-business website built with plain HTML5, CSS3 and vanilla JavaScript. No framework, package manager or build step is required.

## Included pages

- `index.html` — Home page and overview of all four service lines
- `sales.html` — Laptop and PC sales enquiry form
- `repairs.html` — Laptop and PC repair / servicing request form
- `chip-level.html` — Board-level repair and component-spares enquiry form
- `cctv.html` — CCTV installation quote form
- `about.html` — About the business and service principles
- `contact.html` — Contact details and general enquiry form
- `assets/styles.css` — Shared responsive styling
- `assets/script.js` — Mobile navigation, validation and form submission

## Preview locally

Open `index.html` in a browser. For a more realistic local test, serve this folder with any static file server, for example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before publishing

1. Search the files for square-bracket placeholders such as `[Business Name]`, `[Phone Number]`, `[Email Address]`, `[Business Address]`, `[Service Area]`, `[Opening Hours]`, prices, stock availability and turnaround times. Replace them with verified business details.
2. In `assets/script.js`, replace `FORM_ENDPOINT` with the real HTTPS endpoint that receives form submissions. The example endpoint is intentionally non-functional.
3. Configure the endpoint to accept JSON `POST` requests and return a successful 2xx response. Add server-side validation, spam protection, secure storage and a privacy notice appropriate to your business.
4. Update the `<title>` and meta description in each HTML page if desired.
5. If you do not use Google Fonts, remove the `@import` line from `assets/styles.css`; the fallback fonts will still work.

## Images

The homepage and four service pages now use responsive photographic images loaded from Unsplash image delivery URLs. Internet access is required for these images to display. The image URLs are defined in the HTML so they can be replaced with the business's own photographs at any time. For a fully self-hosted site, download appropriately licensed images and change each `src` to a local path such as `assets/images/laptop.jpg`.

## Form behaviour

Each form has accessible labels and native HTML validation. JavaScript adds a JSON `POST` to the configured endpoint. A success message is shown only after the endpoint returns a 2xx response. Until the endpoint is configured, the form displays a clear setup message and directs customers to the listed phone/email details.

Fields include:
- Sales: device type, budget, use case and preferred specifications.
- Repairs: device type, model, fault description and service type.
- Chip-level / spares: device and board references, request type, component reference, fault or specification details and quantity.
- CCTV: property type, camera count, installation area and coverage requirements.
- Contact: name, phone, email, enquiry type and message.

## Design direction

- **Palette:** deep navy for trust and technical confidence, clear blue for primary actions, a restrained cyan accent, pale blue-grey backgrounds and high-contrast body text.
- **Typography:** Manrope for headings and DM Sans for interface/body copy, with system fallbacks.
- **Layout:** compact sticky navigation, high-clarity hero, four service cards, concise process section, prominent calls to action and reusable enquiry forms.
- **Responsive behaviour:** mobile-first breakpoints, stacked forms and content on narrow screens, collapsible navigation and touch-friendly controls.

All business-specific facts remain placeholders. No prices, credentials, stock quantities, addresses, repair guarantees or service promises have been invented.
