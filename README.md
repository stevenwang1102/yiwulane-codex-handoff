# YIWULANE Website

Production-oriented Next.js App Router website for YIWULANE, a Yiwu sourcing, QC, branded packaging, China fulfillment, and hybrid fulfillment operating partner.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Required Checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

The Playwright config uses the installed Chrome executable on this Windows machine. If deploying or testing elsewhere, remove the explicit `executablePath` or install Playwright browsers with `npx playwright install chromium`.

## Environment Variables

Copy `.env.example` to `.env.local` for local integrations.

- `NEXT_PUBLIC_SITE_URL`: canonical site URL.
- `NEXT_PUBLIC_GA4_ID`: optional GA4 ID, loaded only after analytics consent.
- `NEXT_PUBLIC_CLARITY_ID`: optional Microsoft Clarity ID, loaded only after analytics consent.
- `NEXT_PUBLIC_BOOKING_URL`: optional booking URL for future success states and CTAs.
- `NEXT_PUBLIC_WHATSAPP_URL`: optional WhatsApp URL for future success states and CTAs.
- `BUSINESS_EMAIL`: owner-approved public fallback email.
- `LEAD_WEBHOOK_URL`: optional lead delivery endpoint.
- `LEAD_WEBHOOK_SECRET`: optional bearer secret for lead delivery.

The app builds without any integration credentials.

## Deployment

1. Set production environment variables.
2. Run the required checks.
3. Deploy with a Next.js-compatible host such as Vercel.
4. Replace `NEXT_PUBLIC_SITE_URL` with the final domain.
5. Submit `/sitemap.xml` after Search Console verification.

## Launch Approvals Still Needed

The owner must approve legal company details, final domain, public contact details, founder identity/bio/photo, authentic operational images, legal pages, pilot pricing, webhook/CRM destination, and any future case-study metrics or testimonials.
