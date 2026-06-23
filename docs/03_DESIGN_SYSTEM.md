# Design System

## Direction

Premium industrial clarity with a human trade-service feel.

Visual associations:

- a reliable route;
- an organized warehouse;
- a documented checklist;
- global movement;
- calm operational control.

Avoid:

- “cheap dropshipping” visuals;
- huge product mosaics;
- neon gradients;
- fake logistics dashboards;
- stock handshake photography;
- unverified platform/customer logos;
- excessive globe animations.

## Logo concept

Create an original mark using two or three route lines that converge or form a subtle “Y”. Pair it with the uppercase wordmark **YIWULANE**.

The mark must work:

- at favicon size;
- in one color;
- on dark and light backgrounds;
- without copying known logistics brands.

Lockup:

```text
[route mark] YIWULANE
             Sourcing · QC · Fulfillment
```

## Color tokens

Use CSS variables and verify WCAG AA contrast.

```css
--color-ink: #102136;
--color-navy: #17365d;
--color-route: #e87524;
--color-route-dark: #b84d10;
--color-paper: #fcfbf8;
--color-sand: #f3eee5;
--color-mist: #e8eef5;
--color-white: #ffffff;
--color-text: #172033;
--color-muted: #5d6878;
--color-border: #d9e0e8;
--color-success: #19734b;
--color-error: #b42318;
```

Use orange as a route/highlight color, not as a large background. Use ink/navy for authority and warm paper/sand for approachability.

## Typography

Preferred:

- Headings: Manrope via `next/font/google`
- Body/UI: Inter via `next/font/google`
- Reliable system fallbacks

Recommended scale:

- Display: `clamp(2.75rem, 6vw, 5.75rem)`, compact line height
- H1 interior: `clamp(2.3rem, 4vw, 4.5rem)`
- H2: `clamp(2rem, 3vw, 3.5rem)`
- H3: `1.25rem–1.5rem`
- Body large: `1.125rem–1.25rem`
- Body: `1rem`
- Small: `0.875rem`

Keep line lengths near 60–72 characters for body copy.

## Layout

- Max content width: 1200px
- Reading width: 720px
- Page gutters: 20px mobile, 32px tablet, 48px desktop
- Section spacing: 72px mobile, 112px desktop
- Grid: 12 columns desktop, 6 tablet, 4 mobile
- Header: sticky only if it does not obstruct content or accessibility

## Shape and depth

- Card radius: 16–20px
- Button radius: 999px or 10–12px; choose one coherent system
- Borders: subtle, visible
- Shadows: low-opacity and restrained
- Use route lines, arrows, and numbered checkpoints as recurring motifs

## Components

Required:

- wordmark/logo;
- desktop header;
- accessible mobile menu;
- announcement/trust chips;
- primary, secondary, and text buttons;
- service cards;
- platform cards;
- icon-and-copy feature rows;
- five-step route;
- hybrid fulfillment diagram;
- proof/checklist component;
- timeline;
- FAQ accordion;
- breadcrumb;
- CTA band;
- two-step form;
- consent banner;
- footer.

## Imagery

Phase 1:

- original inline SVG route diagrams;
- abstract product cartons, checklists, warehouse shelves, and shipping nodes;
- optional restrained texture.

Phase 2, after owner supplies authentic images:

- Yiwu market;
- receiving and QC;
- measurement/function check;
- labeling and packaging;
- warehouse pick/pack;
- founder/team;
- real sample and packaging details.

Every supplied image needs meaningful alt text unless decorative.

## Motion

- 180–300ms transitions;
- small translate/fade only;
- no autoplay video;
- no motion essential to understanding;
- disable nonessential animation under `prefers-reduced-motion`.

## Responsive behavior

- All content works at 320px.
- Five-step flow becomes a vertical timeline on mobile.
- Comparison section stacks cleanly.
- Tables should become cards or horizontally scroll with an accessible label.
- CTAs remain visible but must not cover content.
- Touch targets at least 44px.
