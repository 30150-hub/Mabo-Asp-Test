# Mabò ASP — Antichi Sapori Pugliesi

Showcase website for **Mabò ASP**, a family-run importer and wholesaler of artisanal Italian food in Haren, Brussels. The site speaks to two audiences at once: Horeca professionals who order wholesale, and home cooks who buy from the shop.

Built as a static single-page app with client-side routing, deployed to Cloudflare Workers (static assets) via Freebuff Sites.

## Stack

- **Vite 7** + **React 19** + **TypeScript**
- **react-router-dom 7** — client-side routes
- **framer-motion 12** — page transitions, scroll reveals, filter layout animations
- Self-hosted fonts via `@fontsource` (Cormorant Garamond, Jost)
- No UI framework, no CSS-in-JS: three hand-written stylesheets in `src/styles/`
- No backend, no tracking, no cookies

## Routes

| Path        | Page                                                        |
| ----------- | ----------------------------------------------------------- |
| `/`         | Home — hero, categories, story teaser, hampers, Horeca band  |
| `/storia`   | Our story — 2000 → 2019 timeline, family, Puglia sourcing    |
| `/prodotti` | Products — 24 references, live family filter + search        |
| `/horeca`   | Wholesale — logistics, delivery cadence, FAQ, quote request  |
| `/bottega`  | Shop framing — three illustrated hampers, pickup & delivery  |
| `/contatti` | Contact — address, VAT, map, enquiry form                    |
| `/crediti`  | Asset and photo attribution                                  |
| `*`         | Styled 404                                                   |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build into dist/
npm run preview  # serve the built output
```

## How enquiries work

There is deliberately **no checkout and no payment**. Adding products to the basket or filling in a form composes an email enquiry (`mailto:`) with the selection pre-filled — matching how the business actually quotes: price on request, confirmed availability, next delivery window. Nothing is stored server-side.

## Deployment

The build is a plain static bundle. `worker/index.js` is a minimal Workers entrypoint that serves `dist/` through `env.ASSETS` and applies an SPA fallback, so deep links like `/prodotti` work on a hard refresh. `freebuff.sites.json` is the deploy manifest; `wrangler.local.jsonc` runs the identical build under workerd for local verification:

```bash
npm run build
npx wrangler dev --config wrangler.local.jsonc --port 8788
```

Any static host works too, provided unknown paths rewrite to `index.html`.

## Project layout

```
src/
  components/   header, footer, cart drawer, enquiry form, illustrations, reveals
  context/      cart state (selection for the enquiry basket)
  data/         catalog.ts (products, families), site.ts (contact, nav)
  pages/        one file per route
  styles/       global.css (tokens, type, buttons), components.css, pages.css
public/
  brand/        logo and decorative seals
  img/          photography and hand-drawn product art
worker/         Cloudflare Workers static-asset entrypoint
```

## Content still to confirm

Contact details, VAT number and the catalogue count come from public research, and the photography is from Mabò's public site (see `/crediti`). Confirm the phone number and email, and swap in originals under licence, before this goes public.
