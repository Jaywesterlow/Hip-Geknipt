# Recipe — Salon Hip Geknipt (hair salon, barber, spa or beauty; look: Dark atmospheric salon)

A one-page site for people in and around Spijkenisse who want a hairdresser they can trust with colour, extensions and curls; it must make them book online (their Aimy agenda) or call.

First build, 8 October 2026, on the restyle path of `site-design-rulebook`. Intake: their Duda site was read (`docs/prospect.md`); Jaymar chose "their atmosphere, tighter": gold on dark brown stays, the glitter goes. The sector is "hair salon, barber, spa or beauty" (SB §5): the measured look is **Shop-led salon brand** (Hershesons: light, one sans, Book as a text link); the dark look, **Dark atmospheric spa or barber**, is DERIVED from Third Space and unmeasured. Their brand is dark and gold, so the dark look is the base and the shop-led look lends its devices (experts as 3:4 portrait cards, one hero photo, Book in the bar). Everything visible is designed here; from the MOOON demo only the invisible base is shared (SvelteKit scaffold, GSAP + Lenis clock, the dialog's open/close logic, the reveal pre-state, the data typing).

| Layer | Choice | Rules |
| --- | --- | --- |
| Look | Dark atmospheric salon (SB §5, DERIVED) with the shop-led look's experts cards and hero photo. Departures, each declared below: a gold accent (the look says none), radius 0 (the look says pills), a split hero instead of full-bleed, the price list on the page, motion class B. | looks.md, SB01, SB06, SB07, SB10, SB11, SB15, SB17, SB19 |
| Surface and theme | Single dark-first: the ground is the salon's own dark, `#1b1511`, measured from the shadows of their interior photo (their Duda site uses `#463939`, too grey); a panel step `#261d16` for the mobile menu and the dialog; one gold band `#c9af61` for the closing call, the only light surface. | C13, C22, C23, SB15 |
| Palette | One accent, their gold `#c9af61` (sampled from the logo): the filled button, the hairlines at 22 %, the italic word in a display line. Text cream `#f3ece0`, quiet text `#b9ae9c`. On the gold band: the dark for text and the filled button. The orange of the logo's i-dots is never used (quarantined). | C01, C03, C07, C08, C14, SB07 |
| Type | Two families, self-hosted: Cormorant Garamond 500 for display, h3 and the quotes, its italic for one word per display line (the look's device); Jost 400/500 for text, labels, buttons and the nav. Scale: 13 · 15 · 17 · 20–22 · 28 · 30–44 · 40–64 (label, small, body, lede, h3, h2, h1). Weights 400 and 500. One caps style: 13 px, 500, +0.10em, labels only. | T01, T02, T07, T10, T35, SB06 |
| Spacing and grid | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 80. Framed: 1200 at 1440 with 48 px gutters (the framed class, 1048–1280), 20 px on a phone. **One margin** (`--margin`) on the bar, the hero, every section and the footer: the key line is x = 120 at 1440. Section padding 48 per side (96 between sections, the sector's median 93); one sparse step of 96 per side for the closing band. | T56, T66, T68, A03, GD01, GF12, GC31, OA03, GC11 |
| Centring budget and mode sequence | **Accent** (one centred section, at the end). Map: hero A 5/7 (copy left on the key line, photo right off the edge), intro A 7/5, prices G (two columns of groups), team G (four cards), extensions A 5/7 mirror, work N (art-directed collage, under the container), reviews G (two columns of hairline rows), visit A 5/7, closing C. Key-line side 8 of 9: 89 %. | GA29, GD03, GD29, GF01, GA16 |
| Asymmetry and under-fill | One split, 5/7, and its mirror 7/5 (intro, extensions). The offset ruler is the 5-column line at x = 620. Under the container: the collage (free placement), the closing stack (640 px), the head blocks (40 rem), the quote measure (30 em). | GB01, GB05, GB18, GC01, GC08, GC11, GF10 |
| Radius and depth | Radius 0 everywhere (the law and editorial device, here the premium one). One edge technique: 1 px gold hairlines at 22 %. No shadows. | A12, C25, C26, C32 |
| Nav | Two-zone bar, 5 destinations: logo 34 px tall on the left margin, five links at 15 px sentence case with 32 px gaps, the phone as a text link, one filled gold button of 36 px (one step below the hero's 48). Always on its surface with one hairline under it (the shop-led look keeps its header). Mobile: 56 px bar with the logo and "Menu"; a sheet under the bar with 56 px hairline rows and the button below them. | NA01, A39, A40, NC01, NB02, NC08, NC11, NB19, NB24, NB25, SB01, SB02 |
| Hero | One screen under the bar: a 5/7 split; left on the key line the label "Kapsalon in Spijkenisse, sinds 2014", the display line "Jouw haar, *onze passie*", one sentence, the filled button and an outlined phone button (the clinic pattern SB02); right their interior photo from the 5-column line off the right edge (the first break). | A41, A43, GA19, GB01, I22, SB02, SB19 |
| Section headers | Label (13 px caps), heading, lede; 12 / 24 / 48. All on the key line except the closing band. | A45, T21, OA13 |
| Cards and grids | Team: four 3:4 portrait cards in one row, name and role under the photo, no frame. Prices: six groups in two columns, each a serif h3 and hairline rows (name left, price right, tabular). Reviews: six, as two columns of hairline rows, the quote in Garamond at 28 px with the opening mark hung, the name under it. | A47, A48, C81, SB17, T47 |
| Pricing | The list is the product here: 24 rows in six groups as hairline rows, no highlight, prices in the body size with tabular figures, "vanaf" as a small muted prefix; the one note (shoulder-length surcharge) and the foot line (prices vary) as small text. | A51, T43 |
| Proof | Their own reviews with first and last names, from their site (six of eight; two left out, one for its length and OCR doubt, one for its emoji); no stars (the source shows five on every card and names no platform), no numbers, no logos: their six partner marks exist only inside one JPG, too small to cut, so the partners are one sentence. | A31, T47, A69, A83, A87 |
| FAQ | None: the sector sends it off the homepage (SB12) and their site has none. | SB12 |
| Footer | The dark, one hairline above; the logo, the tagline, the address row, the link row, the credit line "Conceptdemo, JW Creative". | A60, A06 |
| Imagery | Their own photos only. Ratios: 3:4 (hero interior, team, extensions), the collage mixes 3:4 and 1:1 as the photos come. No overlays on photos; the hero photo stands clean beside the copy. | I05, I11, I16, I22 |
| Container breaks | Hero photo off the right edge (A); the collage images cross the frame edges (the signature section, N); the gold band edge to edge (C). One per viewport. | A29, B01, B02, B04, A16, T69 |
| Motion | Class B, expressive family: 11b for every text reveal, 12 for every photo, 07 as the signature on the work collage. Hover is the state family only (colour, 150 ms). Nothing crosses the frame except the collage images, which are decorative and under the scrub rule. `docs/bewegingsconcept.md`. | M01, M23, animation-map.md (gallery: 07; hero image-led: 12; text: 11b) |

## Deviations

- **Accent (look: none)**: one gold, because it is their brand and SB07 gives the booking button its own hue.
- **Radius 0 (look: pills)**: pills with a fill are the Fuku button; 8 is MOOON's. Zero is neither and reads premium with a Garamond.
- **Split hero (look: full-bleed photo with a centred title)**: their only interior photo is portrait, 1086 px wide; full-bleed at 1440 would soften it. The split keeps it sharp and puts the copy on the key line.
- **Hero on a phone: copy first, photo second (MB: visual first)**: the headline and the booking button belong in the first screen; the photo follows at 4:5.
- **Prices on the page (look: avoid price tables)**: the brief. Their price list is a JPG today; the text version is the point of the demo.
- **Labels above headings**: the wellness and services convention (OA13).
- **Motion class B (animation-map says productive, no signature for services)**: Jaymar's demos carry one signature moment; the collage is decorative images only, which the scrub rule allows.
- **07 without the grey**: the library's collage is grey until hovered; here colour is the product (balayage, red, copper) and phones never hover, so the images stay in colour and only the opacity lifts on hover. Timings and placement are the library's.
- **A81**: no middle dots anywhere; the credit line uses a comma.
- **Reviews without stars**: the source has stars but names no platform; A87 wants a source for a rating, so the words and names stay and the stars go.

## AI-tell check (A76 to A88, GA30)

- No cream-serif-terracotta default: dark ground, gold from their logo, Garamond with Jost.
- One centred section (the closing band); every other heading starts on the key line; no centred paragraph.
- One radius (0), no shadows, no glass, no blobs, no stars, no arrows, no "scroll" chrome.
- No generic pattern twice in a row: the two grids (prices, team) are different objects and the extensions split sits between team and the collage.
- Nothing from MOOON or Fuku: no night and cream, no Aboreto, no rounded tiles, no carousel, no moon, no magnet, no fill hover, no transparent bar, no cream bar dialog.

## Gaps named (research stops here, not improvisation)

- The `bewegingsconcept` skill points to vault pages that do not exist (Animatie Per Sitetype, Animatiesystemen Voor Websites, Fotocriteria Voor Beeldsites, Bewegingsvangrails, the animatie-catalogus). The concept was written from the rulebook's `motion.md` and `animation-map.md` and the three library files, as `HANDOFF.md` of the MOOON demo prescribes.
- `looks.md` has one measured salon (light, shop-led); the dark salon look is derived. This page is a second data point once Jaymar has judged it.
- `looks.md`, `rulebook.md` and `composition.md` were not readable through the vault tool (too large to serve); the rules were taken from `crucial-rules.md`, the SB research file and the workflow.
