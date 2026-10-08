# Salon Hip Geknipt, conceptdemo

A one-page concept site for Salon Hip Geknipt (Nieuwstraat 190, Spijkenisse) by JW Creative. Their own words, prices, reviews and photos; nothing invented. The demo takes no bookings: every booking button and outward link opens a dialog that says so and keeps the real link as its one action.

## Stack

SvelteKit 2, Svelte 5 (runes), TypeScript strict, plain CSS with tokens in `src/app.css`, `@sveltejs/enhanced-img` for the photos, GSAP + ScrollTrigger + Lenis for motion (`src/lib/motion`), `@sveltejs/adapter-vercel`. The page is prerendered.

Fonts: Cormorant Garamond and Jost, self-hosted in `static/fonts` (SIL Open Font License 1.1).

## Scripts

`npm run dev`, `build`, `preview`, `check` (svelte-check), `lint` (prettier + eslint), `format`.

## Where things are

- Facts: `src/lib/data/studio.ts`. Words, prices, reviews: `src/lib/data/studio.nl.ts`.
- The design recipe and its deviations: `docs/recept.md`. The motion concept: `docs/bewegingsconcept.md`. The prospect: `docs/prospect.md`. The audit: `docs/audit.md`.
- Photos: `src/lib/assets/photos/`, listed with their sources in `docs/prospect.md`.
