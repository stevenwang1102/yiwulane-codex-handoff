# YIWULANE SEO + GEO Audit

Audit date: 2026-07-22  
Canonical production origin: `https://www.yiwulane.com`  
Research basis: repository code, locally rendered production build, current production HTTP responses, automated crawl tests, and official crawler documentation.

## Project and rendering model

- Framework: Next.js 16.2.9 App Router, React 19.2.7, TypeScript 5.9.3, Tailwind CSS 4.
- Rendering: static prerendering for fixed routes, SSG for service, solution, market, and resource dynamic routes, and one dynamic lead API route.
- Languages: English at the root and Spanish under `/es`; six Spanish country routes cover Mexico, Spain, Colombia, Chile, Peru, and Argentina.
- Conversion paths: 3-SKU Pilot, quote/contact forms, WhatsApp, and email.
- Baseline build: 71 generated pages before remediation. Updated build: 72 generated routes including `/llms.txt`.

## Executive findings

| Issue | Impact | Affected pages/files | Remediation | Completed | Business input needed |
|---|---|---|---|---|---|
| Both `yiwulane.com` and `www.yiwulane.com` returned `200`, creating duplicate-host risk. | Critical | Production host, `next.config.ts` | Added a permanent host redirect from non-www HTTPS requests to the canonical www origin. Vercel should also set www as the primary domain to avoid an HTTP-to-HTTPS-to-www chain. | Code complete; deployment verification pending | No |
| Some pages inherited homepage canonical/social metadata; most child pages lacked complete Open Graph and Twitter metadata. | High | Legal pages and page metadata across `src/app` | Added `buildPageMetadata` with absolute title, description, self-canonical, Open Graph, Twitter Card, and robots directives. Applied it to every page template. | Yes | No |
| No JSON-LD was present. | High | Entire site | Added stable Organization and WebSite entities, WebPage markup for core pages, Service markup for service/solution/market pages, BreadcrumbList markup, and FAQPage markup only where visible FAQs exist. | Yes | Social URLs and verified business details are still needed for richer Organization data |
| Sitemap used `new Date()` on every build, included review-stage content, and provided no language alternatives. | High | `src/app/sitemap.ts` | Removed synthetic `lastModified`, removed noindex/editorial/legal routes, retained canonical `200` routes, and added Spanish language alternatives. | Yes | No |
| Five English articles and 30 Spanish articles are thin editorial templates with repeated body copy. Indexing them would create low-value and doorway-page risk. | High | `/resources/*`, `/es/recursos/*` | Kept URLs available, added self-canonical and `noindex,follow`, and removed the hubs/details from sitemap until subject-matter review. | Yes | Named reviewer, real operating detail, sources, dates, and article-specific examples |
| Spanish market pages had no reciprocal hreflang cluster. | High | `/es` and six country routes | Added reciprocal `es`, country-specific Spanish hreflang values, and `x-default`, with self-canonical on every page. Added alternate-language sitemap entries. | Yes | Confirm the six markets remain actively supported |
| The document root is English even on Spanish routes. | Medium | `src/app/layout.tsx`, `/es/*` | Added a server-rendered Spanish `lang="es"` scope around every `/es` route. A true route-specific `<html lang>` would require multiple root layouts or dynamic request handling and is intentionally not implemented in this scoped change. | Partial | No |
| Internal launch placeholders appeared on About, homepage, footer, privacy, and terms pages. | High | `src/app/page.tsx`, `about`, footer, legal pages | Replaced internal notes with answer-first business definitions and factual operating summaries. Legal summaries remain noindex pending qualified review. | Yes | Legal review and approved privacy/retention language |
| Core entity answers were fragmented across marketing sections. | Medium | Homepage and About | Added direct definitions for what YIWULANE is, who it serves, required inputs, services, markets, process, boundaries, and how to start. Added matching visible FAQs. | Yes | Founder/reviewer identity if it will be published |
| AI crawler intent was not documented. | Medium | `robots.txt`, governance | Kept public content accessible by default and blocked only `/api/`. No training-specific opt-out was added without owner direction. Search crawlers and model-training crawlers are documented below. | Yes, neutral policy | Decide whether GPTBot, ClaudeBot, and Google-Extended should remain allowed for model-improvement uses |
| Organization `sameAs`, verified public address, and legal-entity data cannot be confirmed from repository evidence alone. | Medium | Organization/LocalBusiness schema | Omitted `sameAs`, LocalBusiness, registration, ratings, offers, and unverified entity fields. Existing public emails and telephone are used in ContactPoint. | Safe omission complete | Verified social URLs, legal name, address evidence, and public business profile |
| Article author, publication date, and modified date are absent. | Medium | Resource content models | Article schema was deliberately not added. Draft routes are noindex until real editorial metadata exists. | Safe omission complete | Author/reviewer name and real publication/update dates |
| Synthetic mobile performance is already strong but one-run LCP varied. | Low | Homepage | No design or feature was removed. Fonts remain self-hosted by `next/font`, the only content image uses `next/image`, video uses `preload="metadata"`, and consent-gated third-party scripts remain deferred. | Yes | Re-run production field/synthetic monitoring after deployment |

## Crawlability and URL behavior

- `robots.txt` permits public content, blocks `/api/`, declares the canonical host, and links the sitemap.
- No CSS, JavaScript, images, or public HTML pages are blocked.
- The sitemap contains only canonical indexable routes. Automated tests verify uniqueness, `200` responses, canonical equality, absence of `noindex`, and valid XML.
- Review-stage resources and legal summaries remain crawlable so bots can read their `noindex` directives, but they are excluded from the sitemap.
- Next.js handles the no-trailing-slash convention. Canonicals use lowercase, no-trailing-slash paths.
- A host redirect is implemented in code. Vercel primary-domain configuration remains a deployment task.
- Important content, metadata, headings, and JSON-LD are present in prerendered HTML and do not require client-side execution.

## Page-level SEO

- Every indexable template now emits an absolute title, description, self-canonical, Open Graph URL/title/description/image, Twitter Card, and robots directives.
- Every tested sitemap route has exactly one H1.
- Breadcrumbs are visible, keyboard-accessible links and emit matching BreadcrumbList JSON-LD.
- FAQ schema is generated from the same visible accordion data; it is not added to pages without FAQs.
- Resource drafts are intentionally noindex instead of being presented as finished articles.

## Structured data decisions

Implemented:

- `Organization` with stable `/#organization`, public logo, description, sales/support ContactPoint data, and no invented social profiles.
- `WebSite` with stable `/#website`, publisher link, and English/Spanish language scope.
- `WebPage` on core landing, service, solution, market, and conversion pages.
- `Service` for actual service/solution/Spanish market service pages, without price, Offer, inventory, rating, or review claims.
- `BreadcrumbList` from visible breadcrumbs.
- `FAQPage` only where the same questions and answers are rendered on the page.

Not implemented:

- `Product` and `Offer`: YIWULANE sells services and has no verified public product catalog, price, SKU, or inventory data.
- `Article`: drafts lack approved authors and real publication/modified dates.
- `LocalBusiness`: public address exists in site content, but verification evidence and owner approval are still required before asserting a local-business entity.
- Reviews, ratings, customer logos, quantified outcomes, and certifications: no verified data supplied.

## AI crawler and GEO policy

The current strategy allows public crawling and does not add bot-specific training restrictions until the owner chooses a policy.

- Search/display crawlers retrieve or index content so it can appear in answers or search experiences. OpenAI documents `OAI-SearchBot` for ChatGPT search, while `GPTBot` is for potential model training. These controls are independent: https://developers.openai.com/api/docs/bots
- Anthropic documents `Claude-SearchBot` for search, `Claude-User` for user-directed retrieval, and `ClaudeBot` for potential model training: https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Google documents Googlebot for Search and Google-Extended for Gemini apps and Vertex AI use; Google states Google-Extended does not affect Search inclusion: https://developers.google.com/crawling

`/llms.txt` was added as a short, experimental discovery aid that points only to authoritative public pages. It is not treated as a replacement for robots.txt, sitemap, structured data, or substantive content.

## International SEO

- Canonicals remain language- and market-specific.
- `/es` and the six supported country routes form one reciprocal hreflang cluster.
- No IP or JavaScript language redirect is used.
- Spanish content is server-rendered and enclosed in a Spanish language scope.
- The six market pages contain different platform focus, buyer profile, opportunities, priorities, title, description, and H1. They are not location-name-only copies.
- Editorial country guides remain noindex until their content becomes article-specific and evidence-backed.

## Performance and accessibility baseline

Lighthouse 13.4.1 mobile runs, 2026-07-22:

| Metric | Current production baseline | Updated local build |
|---|---:|---:|
| Performance | 99 | 96 |
| Accessibility | 96 | 96 |
| SEO | 100 | 100 |
| LCP | 2,172 ms | 2,784 ms |
| CLS | 0 | 0 |
| Total Blocking Time | 12 ms | 10 ms |

The local LCP increase is a one-run synthetic variance and is not presented as an improvement. Re-test the deployed production build and monitor field data before drawing a conclusion. The SEO score was already 100 because Lighthouse does not detect deeper issues such as duplicate-host `200` responses, thin content, synthetic sitemap dates, incomplete social metadata, or missing entity linkage.

## Validation evidence

- ESLint: passed.
- TypeScript `tsc --noEmit`: passed.
- Vitest: 19 tests passed across 8 files.
- Next.js production build: passed; 72 routes generated.
- Playwright: 7 tests passed, including sitemap, server-rendered metadata, canonical, robots, H1, JSON-LD parsing, noindex exclusion, reciprocal hreflang, Spanish language scope, and internal-link status checks.
- `robots.txt`, `sitemap.xml`, and `llms.txt`: accessible in the local production build.

## Residual risks and deployment checks

1. Deploy the code and confirm `https://yiwulane.com/*` returns a permanent redirect to `https://www.yiwulane.com/*`.
2. Configure `www.yiwulane.com` as the Vercel primary domain to avoid a two-hop HTTP redirect.
3. Re-run Lighthouse against production and monitor Core Web Vitals field data.
4. Submit the reduced sitemap in Google Search Console and Bing Webmaster Tools.
5. Monitor previously submitted thin-resource URLs as they transition to noindex.
6. Complete legal review, content-review attribution, social-profile confirmation, and AI training-crawler policy decisions.
