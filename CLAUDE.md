# Working on this repo

Concept demo for Salon Hip Geknipt, Spijkenisse, by JW Creative. Read `docs/prospect.md` for the client, `docs/recept.md` for the design recipe (the sector look and every deviation), `docs/bewegingsconcept.md` for the motion, `docs/audit.md` for the measured audit and `README.md` for the stack.

## How Jaymar wants you to work

- **Short answers.** The outcome in a few short lines, no preamble. Details go in files. He writes Dutch or English; answer in the language he used.
- **Say what you did not verify.**
- **Git is your job.** Commit, push to `main`, report. Pushing to `main` deploys to production on Vercel. Run `npm run check`, `npm run lint` and `npm run build` before you push.
- **Mail is never sent by you.** Draft only; he sends.
- **Do not ask which animation style to use.** Decide from his library and say what you chose.
- **Design goes through the `site-design-rulebook` skill in the vault.** Name the sector, pick the look, write the recipe, build, audit. Where the vault has no rule for something the design needs, stop and name the gap.
- **Never copy visible design from another JW Creative site** (MOOON Pilates, Fuku Ramen or any other). Only the invisible base is shared: the SvelteKit scaffold, the GSAP/Lenis clock in `src/lib/motion/scroll.ts`, the dialog's open/close logic, the reveal pre-state, the data typing.

## Stack rules

- SvelteKit, Svelte 5 with runes only. TypeScript strict. Plain CSS, tokens in `src/app.css`. npm.
- Attachments (`{@attach}`) for DOM motion, rune classes in `.svelte.ts` for shared state, `prefersReducedMotion`, `<enhanced:img>`. No hand-rolled listeners or `document.querySelector` in components.
- Components in `src/lib/components`, the page-level ones exported through `src/lib/index.ts`. Content lives in `src/lib/data/studio.ts` (facts) and `studio.nl.ts` (words), never in a component.

## Design rules

- The look: **Dark atmospheric salon** (hair salon, SB §5) in the salon's own brand: the dark from their interior photo as the ground, their gold as the one accent, one gold band at the end. Cormorant Garamond (one italic word per display line) and Jost, self-hosted. Radius 0. One edge technique: gold hairlines at 22 %. No shadows.
- **One margin everywhere.** `.frame` pads with `--margin` (a 1200 frame, 48 px gutters at 1440, 20 on a phone). The centring budget is accent: only the closing band is centred; everything else starts on the key line. One split, 5/7, or its mirror.
- Type scale: `--text-label`, `--text-small`, `--text-body`, `--text-lede`, `--text-h3`, `--text-h2`, `--text-h1`. One caps style (`.label`). Spacing `--space-1` to `--space-8`; section padding `--section`, the one sparse step `--sparse`. Every tap target at least `--tap` (44 px).
- No arrows, middle dots, stars or decorative chrome in copy.

## Motion rules

- GSAP + ScrollTrigger + Lenis on one clock. Library ids 11b, 12 and 07, timings the library's.
- Exactly three kinds of movement: text slides up out of a mask (11b, `Lines.svelte`, `Mask.svelte`), a photo wipes open from the bottom while it zooms back (12, `Photo.svelte`), and the signature, the work collage that comes in diagonally and scrubs (07, `Work.svelte`). Hover is colour only.
- GSAP alone sets the start state of a reveal. Until it has, `html.js [data-reveal]` is `visibility: hidden` with a 3 s fallback.
- The page is complete under `prefers-reduced-motion`: nothing hidden, the collage still, Lenis off.

## Content rules

- Only facts and words from salonhipgeknipt.nl (and `docs/`). No invented reviews, numbers or opening hours (theirs are not on their site).
- Every booking button and every link that leaves the page opens the demo dialog (`DemoDialog.svelte`, `state/demo.svelte.ts`); the href stays the real one and is the dialog's one action. In-page anchors are the only links that just go.
