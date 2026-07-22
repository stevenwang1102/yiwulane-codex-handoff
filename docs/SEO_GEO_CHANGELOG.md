# YIWULANE SEO + GEO Changelog

Date: 2026-07-22

## Technical SEO

- Added reusable complete page metadata generation in `src/lib/seo.ts`.
- Added self-canonical, unique social metadata, and explicit robots directives to every page template.
- Added permanent non-www to www redirect logic in `next.config.ts`.
- Updated `robots.txt` to allow public content, block `/api/`, declare canonical host, and reference sitemap.
- Removed build-time synthetic sitemap dates.
- Removed noindex editorial and legal routes from sitemap.
- Added reciprocal Spanish market hreflang values and sitemap language alternatives.
- Added a server-rendered Spanish language scope for `/es/*`.
- Added `/llms.txt` as an experimental authoritative-page index.

## Structured data

- Added escaped JSON-LD renderer.
- Added linked Organization and WebSite entities with stable identifiers.
- Added WebPage markup to core landing, service, solution, conversion, and market pages.
- Added Service markup without fabricated Offer, price, rating, review, inventory, or certification fields.
- Added BreadcrumbList markup derived from visible breadcrumb data.
- Added FAQPage markup derived from visible accordion data.
- Deliberately omitted Product, Offer, Article, LocalBusiness, Review, and AggregateRating where evidence is incomplete.

## GEO and content quality

- Replaced internal launch/photo/legal placeholder messaging on core pages with factual business definitions and operating summaries.
- Expanded About to answer entity, audience, service, market, process, boundary, and contact questions.
- Added direct homepage FAQ answers for what YIWULANE is, who it serves, and required starting information.
- Removed launch-pending text from the footer.
- Marked five thin English articles and 30 repetitive Spanish article templates `noindex,follow` pending subject-matter review.
- Rewrote the Spanish resource hub introduction to state its editorial-review status.
- Replaced generic legal placeholders with factual operational summaries while keeping them noindex pending legal review.

## Validation added

- Added `tests/seo.test.ts` for metadata, stable schema identifiers, hreflang configuration, and sitemap contracts.
- Added `tests/e2e/seo.spec.ts` for server-rendered title, description, canonical, Open Graph, H1, robots, JSON-LD parsing, sitemap validity, noindex exclusion, reciprocal hreflang, language scope, robots/llms availability, and internal-link status.

## Verification results

- ESLint: passed.
- TypeScript: passed.
- Vitest: 19/19 passed.
- Next.js production build: passed; 72 routes generated.
- Playwright: 7/7 passed.
- Lighthouse mobile baseline/updated local: Performance 99/96, Accessibility 96/96, SEO 100/100, CLS 0/0, TBT 12ms/10ms. Local LCP variance requires production follow-up.

## Files added

- `src/lib/seo.ts`
- `src/components/seo/JsonLd.tsx`
- `src/app/es/layout.tsx`
- `src/app/llms.txt/route.ts`
- `tests/seo.test.ts`
- `tests/e2e/seo.spec.ts`
- `docs/SEO_GEO_AUDIT.md`
- `docs/SEO_GEO_CONTENT_MAP.md`
- `docs/SEO_GEO_CHANGELOG.md`
- `SEO_INPUT_NEEDED.md`

## Existing files updated

- `next.config.ts`
- `src/app/layout.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- Core pages: homepage, About, Contact, How It Works, Pilot, Quote, case-study hub/detail.
- International pages: Spanish hub, six-country template, Spanish resource hub/detail.
- Service and solution dynamic templates.
- English resource hub/detail.
- Privacy, Terms, and Cookie Policy pages plus shared legal component.
- Breadcrumb, FAQ, Footer, and FAQ content components.

No remote push or production deployment was performed.
