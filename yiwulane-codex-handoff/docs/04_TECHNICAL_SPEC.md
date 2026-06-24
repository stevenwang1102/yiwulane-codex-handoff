# Technical Specification

## Stack

- Next.js 16 App Router
- React version compatible with the selected Next.js release
- TypeScript strict mode
- Tailwind CSS 4
- ESLint
- Vitest + Testing Library for targeted unit/component tests
- Playwright for one smoke flow, if practical in the environment
- Vercel-ready, but hosting-neutral where possible

## Suggested structure

```text
src/
  app/
    (marketing)/
      page.tsx
      services/
      solutions/
      how-it-works/
      pilot/
      case-studies/
      resources/
      about/
      contact/
      quote/
    api/
      leads/route.ts
    privacy/page.tsx
    cookie-policy/page.tsx
    terms/page.tsx
    layout.tsx
    not-found.tsx
    sitemap.ts
    robots.ts
    opengraph-image.tsx
    globals.css
  components/
    layout/
    sections/
    forms/
    diagrams/
    ui/
  content/
    site.ts
    services.ts
    solutions.ts
    faqs.ts
    resources.ts
  lib/
    env.ts
    lead-schema.ts
    lead-delivery.ts
    consent.ts
    seo.ts
  types/
tests/
public/
```

Route groups can differ, but public URLs must match the product spec.

## Rendering

- Prefer static generation for marketing pages.
- Use Server Components by default.
- Keep client-side JavaScript limited to:
  - navigation;
  - accordion;
  - forms;
  - consent;
  - optional subtle interaction.
- Do not put entire pages behind `"use client"`.

## Content model

Keep editable business copy in typed objects under `src/content`.

Suggested types:

```ts
type ServicePage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  deliverables: string[];
  process: Step[];
  clientInputs: string[];
  boundaries: string[];
  faqs: FAQ[];
  relatedRoutes: string[];
};
```

Avoid using a general-purpose JSON blob that removes type safety.

## Forms

### Pilot fields

Step 1:

- first name;
- last name;
- company;
- business email;
- WhatsApp;
- country;
- selling platform;
- store URL;
- daily order range.

Step 2:

- up to three product URLs;
- optional shared-file URL;
- target selling market;
- number of SKUs;
- expected monthly volume;
- current supplier price, optional;
- target product price, optional;
- custom packaging need;
- private-label need;
- China-direct fulfillment need;
- overseas warehousing need;
- main problem;
- privacy consent;
- hidden honeypot.

### API behavior

`POST /api/leads`

- parse JSON;
- validate with a shared schema;
- reject honeypot submissions;
- attach timestamp, page source, and a generated request ID;
- forward minimal required fields to `LEAD_WEBHOOK_URL` when configured;
- optionally authenticate with `LEAD_WEBHOOK_SECRET`;
- do not log full payload in production;
- return stable public error messages;
- add a clean seam for external rate limiting;
- build successfully with no webhook.

The production form should not pretend submission succeeded when delivery failed. Offer business email/WhatsApp fallback only when configured.

### File handling

No raw uploads in V1. Accept product URLs and an optional shared Google Drive, Dropbox, or similar URL.

## Environment variables

See `.env.example`.

Validate environment variables centrally. Public values may be absent without breaking the build.

## Analytics and consent

- GA4 and Clarity are optional.
- Do not load analytics before consent.
- Store consent choice locally.
- Provide “Cookie settings” in footer.
- Functional form behavior must not depend on analytics consent.

## SEO

- metadata for every route;
- canonical built from `NEXT_PUBLIC_SITE_URL`;
- Open Graph/Twitter metadata;
- Organization and ProfessionalService JSON-LD;
- breadcrumb structured data on interior pages where useful;
- generated sitemap and robots;
- no keyword stuffing;
- one H1 per page;
- descriptive internal links.

## Security

- no secrets in client bundles;
- no unescaped user content;
- validate URLs and string lengths;
- apply sensible Content Security Policy where compatible;
- use security headers;
- protect webhook delivery;
- avoid logging PII;
- no source maps exposed unnecessarily;
- dependencies should be current and minimal.

## Accessibility

- skip link;
- semantic landmarks;
- visible focus;
- keyboard-operable menus and accordions;
- correct form labels and error associations;
- status messages announced;
- sufficient contrast;
- text alternatives for diagrams;
- reduced-motion support;
- no information communicated by color alone.

## Performance budget

Targets for a representative mobile run:

- Lighthouse Performance: 85+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+
- minimal layout shift;
- no blocking third-party script without consent;
- optimized fonts and images;
- homepage client JS kept low.

## Error and empty states

- custom 404;
- lead delivery error;
- missing booking/WhatsApp link handled gracefully;
- no integration credentials required for build;
- no dead buttons.

## Tests

At minimum:

- header and mobile navigation;
- CTA links route correctly;
- FAQ keyboard interaction;
- lead schema rejects invalid email and missing consent;
- honeypot rejection;
- consent prevents analytics initialization;
- API delivery success/failure with mocked webhook;
- homepage → pilot smoke flow.
