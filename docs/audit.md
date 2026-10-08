# Audit — Salon Hip Geknipt demo, 8 October 2026, pass 4 of 4

Rendered at 1440 and 400, 2x, with `site-design-rulebook/scripts/render-audit.js` and `type-audit.js` (copies in the session scratchpad, two patches noted below) against `vite preview` of the production build. Real fonts confirmed: Jost, Cormorant Garamond. Every band of both renders read on each pass (desktop 10 bands of 900 px, mobile 10 strips of 1200 px); the last pass found nothing new.

## How the page was rendered

Two things the library script does not expect, both artefacts of this page, not faults:

- The script scrolls through once and jumps back to the top before the screenshot. Every 11b block then resets (`onLeaveBack`), so pass 1 showed text one line low and photos clipped shut. The copy of the script used here stays at the page bottom for 3.5 s before the screenshot, and the nav probe accepts a sticky bar at any scroll position. At the page bottom the collage items sit at the upward end of their scrub (up to 6 % of the screen per speed step), so in the full-page render the top row overlaps the section lede; while a reader has the lede on screen the items are at the other end of their travel (checked by the trigger maths: the first item reaches the lede's line only once the lede is 90 px above the viewport).
- `vite preview` caches its file list at start. After a rebuild it serves the new HTML with the old hashed chunks (404, no hydration, no CSS). Restart the preview after every build; pass 2 was measured against a dead build and discarded.

## System (measured)

| Measure | Pass 1 | Pass 4 | Rule |
| --- | --- | --- | --- |
| Distinct type sizes | 7 (13, 15, 17, 22, 28, 44, 64) | 7, unchanged | T01 |
| Families and weights | Jost 400/500, Cormorant Garamond 400 italic/500 | unchanged | T07, T10 |
| Distinct spacing values (fixed, no gap shorthand) | 18, of which 10 are the mask's `0.12em` padding and its negative margin at each type size and the label's `-12px` | unchanged; on the scale: 4, 8, 12, 16, 24, 32, 48 (and 120 for the margin) | T56 |
| Radii | none | none | A12 |
| Edge techniques | 1 px gold hairline at 22 % (41), the gold button border (6), the dark button border on the band (1); no shadows | unchanged | C25, C26 |
| Caps tracking | one style, 13 px at 0.100em | unchanged | T35 |
| Price : period | 17 px price, 15 px "vanaf" and "per maand" (0.88) | unchanged, by intent (below) | T43 |
| Middle dots / arrows / em dashes / straight quotes / stars | 0 / 0 / 0 / 1 (Finnley's apostrophe) / 0 | unchanged | A81, A84, A56 |
| Horizontal overflow at 400 | none; 3 images cut by their own frame (the photo frames and the collage stage, by design) | none, nothing clipped | T67 |
| Text hidden under reduced motion | none | none | motion guardrail |
| Widows (strict) | none | none | T22 |
| Row baselines | nav links 37, phone and button 35.5 (1.5 px); price rows name = price; hero buttons equal | unchanged | T49 |
| Button label centring | 7 / 8 and 13 / 14 (1 px) | unchanged | C77 |
| Nav | bar 72, links 15 px, gaps 32, logo 34, nav button 36, hero button 48 | unchanged | NC01, NC08, NB19 |
| Balance modes | L A G G A N G A C G (hero, intro, prices, team, extensions, work, reviews, visit, closing, footer); one centred section; axis offset 0 on every centred element | unchanged | GA29, GA04 |

## Faults found and fixed

| Region | Fault | Rule | Fix |
| --- | --- | --- | --- |
| Every 11b block | After a scroll back past a block, its lines sat one line low with the mask open until the next play (reset ran with `overflow: visible`) | motion guardrail | `attachments.ts`: the masks close before the tween resets |
| Hero | The photo frame kept its 3:4 ratio under the height cap and stopped at x = 1197, 123 px short of the frame and 243 short of the edge; the negative margin resolved against the column (48) instead of the page (120) | A16, T69, B01 | The frame fills its seven columns and the screen height (the photo is cropped inside it); a `--bleed` token measured against the viewport; now 648 to 1440 |
| Hero, phone | The 4:5 ratio never applied (inline `aspect-ratio` beat the media query) | MB | `Photo.svelte` sets the ratio as `--ratio`; 360 × 450 on a phone |
| Prices | "€ 75,-per maand": the space before the period was lost in the template | copy | explicit `{' '}` |
| Prices, phone | "€ 20,-." broke after the euro sign at 400 | T55 | non-breaking space in `euro()` and in the note |
| Reviews | The hung opening mark was clipped by the mask (always under reduced motion and without JS, and during every reveal) | T47, A31 | the mask extends 12 px past the text edge |
| Reviews | Left column carried the three long quotes, the right the three short ones (110 px ragged) | GF14 | quotes alternate between the columns |
| Work | Without JS, and before the attachment ran under reduced motion, every collage image was at opacity 0 | reduced motion guardrail | the entry pre-state is scoped to `html.js` and `prefers-reduced-motion: no-preference` |
| Work | Stage height in `svh`, items sized by width: at 900 px the lowest image ended 230 px above the stage bottom (a 330 px hole before the reviews), at other heights the items overlapped by slivers; work2 started 14 px right of the 5-column line, work5 ended 5 px past the frame edge, work3 crossed the frame by 19 px, three pairs sat 10 to 37 px apart | A28, GF14, B02 | Stage 94vw (320vw on a phone); items re-placed: one deliberate overlap (work4 over work1, 187 × 88), every other pair at least 48 px apart, work2 on x = 648, work5 ends on 1320, work1 and work6 cross the left frame edge by 91 and 62, work3 the right by 48; separate phone positions |
| Footer | The address column started at x = 628, 20 px off the page's 5-column line (648) | A28, GD01 | grid 20fr 13fr 13fr: 120, 648, 1008 |

## Verified after the fixes

| Check | Value |
| --- | --- |
| Row baselines (T49) | nav 37 / 35.5 / 35.5; price rows equal; hero buttons equal (640.9) |
| Button label centring | within 1 px on all 7 |
| Key line and ruler | every section head at x = 120; the 5-column line 648 carries the hero photo, the extensions copy, the contact facts, the footer's second column and the collage's second image |
| Container breaks | hero photo right (648 to 1440), collage left (91, 62) and right (48), the gold band edge to edge; the nav bar full width |
| Centred elements | closing stack: heading, tagline and button at x = 720.0 (container mid 720) |
| Section rhythm | 48 + 48 between every section; the closing band 96 + 96; the hero one screen under the bar (828 at 900) |
| Collage at 1440 (left, right, top, bottom) | work1 29 461 4857 5433; work2 648 965 4939 5361; work3 1152 1368 4884 5172; work4 274 590 5345 5767; work5 888 1320 5426 6002; work6 29 245 5832 6120; work7 518 835 5818 6135; stage ends 6211, reviews start 6259 |
| Collage at 400 | two loose columns, gaps 48 to 73, lowest image 80 px above the stage bottom |
| Bands read | 10 desktop, 10 mobile, nothing new on pass 4 |

## Stays by intent

- **Price period at 0.88×** (T43 wants 0.4 to 0.6): the prices are list rows in the body size, not display prices; "vanaf" and "per maand" at the small size, muted, is the readable minimum.
- **Logo 34 px in the bar** (NC06: 15 to 26): the mark stacks "Salon", the scissors and "Since 2014"; at 26 px the small line is unreadable. Declared in the recipe.
- **Labels above every heading** (A81 calls it a tell on SaaS): the wellness and services convention (OA13), without dots or arrows.
- **One straight quote**: the apostrophe in Finnley's, their partner's name.
- **The contact facts as a `dl` with unequal row pitch** (the script reads it as a FAQ): it is a fact list, rows sized by their content.
- **Hero copy before the photo on a phone** (MB says visual first): the headline and the booking button belong in the first screen; declared in the recipe.
