# Master Task for Codex

Build the complete YIWULANE version-1 marketing website described in this repository.

## Start here

1. Read `AGENTS.md`.
2. Read all `/docs/*.md`.
3. Use Plan mode before coding.
4. Identify ambiguities, make conservative assumptions, and record them in the implementation report. Do not block the build on missing photos, CRM credentials, domain, testimonials, or case studies.

## Phase 1 — Foundation

- Initialize a Next.js 16 App Router project with TypeScript, ESLint, Tailwind CSS 4, and an `@/*` alias.
- Add scripts for `dev`, `build`, `start`, `lint`, `typecheck`, and `test`.
- Establish the project structure documented in `04_TECHNICAL_SPEC.md`.
- Add design tokens, global styles, metadata defaults, fonts, favicon, and an original SVG logo mark.
- Add a responsive header, mobile navigation, footer, skip link, container, buttons, section wrapper, cards, badges, and breadcrumbs.

## Phase 2 — Homepage and core conversion

Implement the homepage in the exact narrative order defined in `02_CONTENT_BLUEPRINT.md`:

1. Hero
2. Audience cards
3. Pain-to-solution comparison
4. SOURCE / CHECK / BRAND / FULFILL / SCALE model
5. Hybrid fulfillment diagram
6. Why YIWULANE
7. 3-SKU Pilot offer
8. Platform solutions
9. QC process
10. Six-step workflow
11. Representative project example
12. Founder story
13. FAQ
14. Final CTA

Use the approved copy as the base. Improve grammar only when it preserves the meaning and tone.

## Phase 3 — Routes

Build every public route listed in `01_PRODUCT_SPEC.md`.

Use reusable templates for service and solution pages, but make the visible copy specific to each route.

For initial case studies, publish only a clearly labeled representative workflow. Do not invent performance results.

For resource articles, create editorial-quality outlines/drafts and mark them in code comments as requiring subject-matter review before promotion. Do not invent tax rates, platform rules, delivery promises, or legal claims.

## Phase 4 — Lead capture

Build a two-step **3-SKU Pilot** form.

Requirements:

- client and server validation;
- accessible errors and progress;
- honeypot;
- privacy consent;
- no raw file uploads in V1;
- accept up to three product URLs plus an optional shared-file URL;
- submit to `/api/leads`;
- forward to `LEAD_WEBHOOK_URL` when configured;
- fail safely and show a useful support message when the integration is unavailable;
- never log full lead PII in production;
- success state links to booking and WhatsApp when corresponding environment variables exist.

Also create a shorter contact form reusing the same infrastructure.

## Phase 5 — SEO, analytics, accessibility, and performance

- Add route-specific metadata and canonical URLs.
- Add Organization and ProfessionalService JSON-LD using only verified claims.
- Add `sitemap.ts`, `robots.ts`, Open Graph image generation, and a useful 404 page.
- Add optional GA4 and Microsoft Clarity integrations that load only after analytics consent.
- Add a small cookie preference banner; functional storage must work without consent, analytics must not.
- Ensure all decorative SVGs are hidden from assistive technologies and meaningful diagrams have text alternatives.
- Keep the homepage fast and minimize client JavaScript.

## Phase 6 — Verification

- Add targeted unit/component tests for navigation, FAQ, form validation, consent behavior, and key CTA links.
- Add one end-to-end smoke test covering homepage → pilot form → validation → success mock.
- Run all quality gates in `AGENTS.md`.
- Fix all errors.
- Review layouts at 320px, 768px, 1024px, and 1440px.
- Produce a final report with:
  - implemented routes;
  - architecture summary;
  - commands run and results;
  - environment variables;
  - content/legal items requiring owner approval;
  - deployment steps;
  - recommended next iteration.

Do not stop after scaffolding. Deliver a polished, production-oriented website that can be deployed once business contact details and integrations are supplied.
