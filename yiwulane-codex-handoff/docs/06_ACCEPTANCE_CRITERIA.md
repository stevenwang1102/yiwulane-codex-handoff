# Acceptance Criteria

## Brand and messaging

- [ ] “YIWULANE” is prominent and consistently styled.
- [ ] The site clearly states sourcing, QC, branding, fulfillment, and scaling.
- [ ] The main CTA is “Start a 3-SKU Pilot.”
- [ ] The audience understands the offer within the first viewport.
- [ ] No unsupported claims, metrics, reviews, customer logos, or time promises appear.
- [ ] Representative examples are clearly labeled.
- [ ] Platform pages distinguish seller responsibility from YIWULANE responsibility.

## Routes

- [ ] Every route in `01_PRODUCT_SPEC.md` exists.
- [ ] Navigation and footer links have no broken destinations.
- [ ] Service/solution pages contain specific, non-duplicative visible copy.
- [ ] Legal pages exist and are flagged in launch documentation for legal review.
- [ ] 404 page is useful and on-brand.

## Design

- [ ] Visual language is premium and operational, not a generic dropshipping store.
- [ ] Original logo/route mark is present.
- [ ] Design tokens are centralized.
- [ ] All layouts work at 320, 768, 1024, and 1440px.
- [ ] There is no horizontal page overflow.
- [ ] Authentic-image slots can be replaced later without redesign.
- [ ] Motion is subtle and reduced-motion compliant.

## Forms

- [ ] Pilot form has two understandable steps.
- [ ] It accepts up to three product URLs and one shared-file URL.
- [ ] It does not accept raw uploads.
- [ ] Required fields and consent are validated.
- [ ] Errors are accessible and useful.
- [ ] Honeypot behavior is tested.
- [ ] API validates independently from the browser.
- [ ] Missing webhook credentials do not break build.
- [ ] Failed delivery is not shown as a success.
- [ ] No PII is sent to analytics.

## Accessibility

- [ ] Skip link works.
- [ ] Header/mobile navigation works by keyboard.
- [ ] Escape closes dialogs/menus.
- [ ] Focus is visible.
- [ ] Every input has a programmatic label.
- [ ] Form errors are associated with fields.
- [ ] Status messages are announced.
- [ ] Accordion follows accessible interaction patterns.
- [ ] Contrast meets WCAG AA.
- [ ] Diagrams have text equivalents.
- [ ] Touch targets are at least 44px.

## SEO

- [ ] Unique title and description on every core page.
- [ ] Canonicals use configured site URL.
- [ ] Sitemap and robots are generated.
- [ ] Open Graph output is branded.
- [ ] Structured data contains only verified facts.
- [ ] One meaningful H1 per route.
- [ ] No draft article is presented as legally or statistically authoritative.

## Engineering

- [ ] TypeScript strict mode.
- [ ] No unexplained `any`.
- [ ] Server Components used by default.
- [ ] Client JavaScript is limited.
- [ ] Environment variables are validated and documented.
- [ ] No secret is exposed as public.
- [ ] No production PII logging.
- [ ] Security headers are configured where practical.
- [ ] `npm run lint` passes.
- [ ] `npm run typecheck` passes.
- [ ] `npm test` passes.
- [ ] `npm run build` passes.
- [ ] No browser console errors on core flows.

## Delivery

- [ ] README contains local setup and deployment instructions.
- [ ] `.env.example` is complete.
- [ ] Final report identifies missing owner inputs.
- [ ] Final report lists commands run and results.
- [ ] Deployment can proceed after contact, domain, CRM, imagery, and legal approvals are supplied.
