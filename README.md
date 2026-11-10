# Exclusive Credit Solutions

Public website for Exclusive Credit Solutions, built with standard Next.js and
ready for independent deployment on Vercel.

## Services and routes

- Debt Review: `/` and `/services/debt-review`
- Debt Review Removal: `/services/removal`
- Debt Mediation: `/services/mediation`
- About, FAQs and Contact pages for the main site and service microsites

## Local development

Requires Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm test
npm run lint
npm run build
```

## Deployment

Import this repository into Vercel as a Next.js project. No ChatGPT Sites,
Cloudflare Worker, Vinext, database, or private runtime dependency is required.

The contact details in the current site are temporary placeholders and should
be replaced before final client handover. The contact form currently opens the
visitor's email application; it does not submit to a private backend.
