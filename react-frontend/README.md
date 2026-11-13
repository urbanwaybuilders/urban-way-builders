# Urban Way Builders Website

Responsive company website for Urban Way Builders, built with React, React Router and Vite.

## Project structure

- `src/components/` — reusable website sections and UI components
- `src/pages/Home.jsx` — homepage composition
- `src/pages/GetQuote.jsx` — project enquiry page
- `src/data/institute.js` — company contact and social links
- `src/data/services.js` — service choices shown in the enquiry form
- `src/data/projects.js` — project gallery content
- `src/services/googleSheets.js` — project enquiry submission
- `google-sheets/Code.gs` — Google Apps Script receiver
- `public/images/` — local website images
- `public/sitemap.xml` — search-engine sitemap

## Main website sections

1. Hero
2. Project highlights
3. About Urban Way Builders
4. Why choose us
5. Projects
6. Our process
7. Contact
8. Footer

The homepage focuses on the company, projects, delivery process and contact journey. Construction service choices remain available in the project enquiry form.

## Run locally

1. Install Node.js LTS.
2. Extract the ZIP and open the `urban-way-builders` folder in VS Code.
3. Run `npm install`.
4. Check `.env` and ensure `VITE_GOOGLE_SHEETS_URL` contains your deployed Google Apps Script Web App URL.
5. Run `npm run dev`.
6. Open the local URL shown by Vite.

## Google Sheets enquiry integration

The frontend sends `name`, `email`, `phone`, `service`, `projectLocation`, `message` and `source`.

The Apps Script source is in `google-sheets/Code.gs`. If you use the updated receiver code, deploy a **new version** of the Apps Script Web App. The script updates an older `Course` / `Message` / `Source` header layout by inserting a `Project Location` column and renaming `Course` to `Service`. Existing enquiry rows are retained.

Note: the browser uses a `no-cors` request, so the frontend cannot read Google's response to verify that a row was stored. Submit a test enquiry and check the sheet.

## Company settings

Update `src/data/institute.js` to change the company name, phone, email, address, business hours, Instagram, WhatsApp and Telegram group invite link.

## Images and content

- Hero image: `public/images/Hero.png`
- About image: `public/images/About.png`
- Quote/contact image: `public/images/Quote.png`
- Logo: `public/images/urban-way-logo.png`
- Project gallery: update `src/data/projects.js`

Replace illustrative gallery photography with genuine project images before launch and ensure you have permission to use them.

## SEO and deployment

- `index.html` contains the homepage metadata and canonical URL.
- `public/robots.txt` points to the sitemap.
- `public/sitemap.xml` lists the homepage and project quote page.
- Verify Google Search Console ownership and domain configuration before publishing.

## Build

```bash
npm install
npm run build
npm run preview
```

`node_modules` is intentionally not included in the ZIP. Install dependencies after extracting the project.
