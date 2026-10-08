# Handoff — Salon Hip Geknipt demo

Voor: de volgende Claude-sessie, in deze repo.
Van: de cloudsessie van 8 oktober 2026 (dashboardsessie, session_01PgSCLt9XG4vzN2HPDuBvxQ).
Klant: Jaymar Westerlow, JW Creative.

Lees `CLAUDE.md` eerst. Dit bestand zegt waar het werk staat en wat er nog niet is.

## Waar het staat (8 oktober 2026, 22:40)

| Ding   | Stand                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Code   | Eerste build geschreven, `npm run check` 0 fouten (4 waarschuwingen in `+layout.svelte`, `state_referenced_locally`, onschuldig: `data` is vast). `npm run lint`: prettier wil 5 bestanden herschrijven (`prettier --write .`), daarna eslint nog niet gezien. **`npm run build` is niet gedraaid.**                                                                                                     |
| Gezien | **Niets.** Geen screenshot, geen browser, geen audit. De pagina is nog nooit gerenderd.                                                                                                                                                                                                                                                                                                                  |
| Repo   | Alleen lokaal. GitHub-repo `hip-geknipt` aanmaken werd in de dashboardsessie geweigerd (permissie "Create Public Surface", via MCP én via `gh api`). **Jaymar maakt de repo zelf** (github.com/new, naam `hip-geknipt`, leeg, geen README), daarna `git remote add origin … && git push -u origin main`. Als noodoplossing staat de hele boom als branch `hip-geknipt` op `Jaywesterlow/JW` (zie onder). |
| Vercel | Geen project. Na de repo: `create_git_project` (team `team_lLWEBAmgSB3Sra1PonSxPooO`), framework SvelteKit, URL verwacht `hip-geknipt.vercel.app` (staat zo in `src/lib/data/studio.ts`, `site.origin`; pas aan als de URL anders wordt).                                                                                                                                                                |
| Mail   | Niet geschreven. Zie "De mail" onder.                                                                                                                                                                                                                                                                                                                                                                    |
| Bellen | Maandag 13 oktober, nog niet in Google Calendar (kalender jaywesterlow71@gmail.com, alleen Google, nooit Apple).                                                                                                                                                                                                                                                                                         |
| Bord   | `outreach/hip-geknipt.json` in jw-docs staat erop, stage `building` (die stage is op 8 okt aan het dashboard toegevoegd).                                                                                                                                                                                                                                                                                |

## Wat Jaymar besloot (process-interviewer, 8 oktober)

1. Aanpak: demo bouwen, dan mailen en bellen (niet binnenlopen).
2. Eén pagina met de prijslijst in echte tekst (hun prijslijst is een JPG).
3. Hun eigen foto's van site en Instagram (Instagram niet gelukt: loginmuur; de 19 van hun Duda-CDN zijn gebruikt, zie `docs/prospect.md`).
4. Boeken: knop naar hun echte Aimy-agenda, met de demo-dialoog ervoor (zoals MOOON).
5. Look: hun sfeer (goud op donkerbruin), strakker.
6. Alleen Nederlands.
7. Klaar zo snel mogelijk; **mail 9 oktober** vanaf jay@jwcreative.nl; **bellen na het weekend**.
8. Onderwerp van de mail op basis van zijn connectie (onder).
9. Van Lochem (vanlochem.nl, gezien op een busje): geparkeerd, geen demo. Staat op het bord.

## De connectie (voor de mail, in zijn woorden)

- Hij kent de salon omdat hij er binnenliep: zijn moeder moest naar het toilet. Eerst mocht dat niet ("we mogen niet iedereen zomaar laten plassen"); de vriend van zijn moeder zei "O, echt? Maar ik heb hier een vloer gelegd", en toen mocht het.
- Die vriend heeft dus **de vloer van de salon gelegd** en wordt **aankomende zaterdag (11 oktober 2026) zijn stiefvader** (ze trouwen). In de mail mag "mijn stiefvader" staan. Jaymar schreef ook "mijn zoon Tobias stiefvader"; onduidelijk of Tobias de naam van de stiefvader is. **Vraag het niet, schrijf "mijn stiefvader".**
- De mail hoeft het toiletverhaal niet te vertellen; de connectie is de vloer, en dat hij ze van daar kent. Zelfde stad (Spijkenisse).
- Jaymar merkte op dat de **cold-email-skill** eerst connectievragen hoort te stellen (één voor één, meerkeuze) en dat die in de dashboardsessie niet gesteld zijn. Hij gaf de connectie daarom zelf. De skill-kopie die hij bedoelt staat in de Fuku-repo (`docs/outreach/cold-email-SKILL.md` en `story-first.md`); de vaultversie is ouder. Elke draft eindigt met "waarom deze draft".

## De mail

- Van jay@jwcreative.nl, naar info@salonhipgeknipt.nl. **Nooit zelf versturen**: draft in `docs/outreach/mail-to-hip-geknipt.md`, hij verstuurt (9 oktober).
- Onderwerp uit de connectie (de vloer), niet hun slogan.
- Opbouw zoals de MOOON-mail (`Jaywesterlow/MOOON-Pilates`, `docs/outreach/mail-to-mooon.md`): verhaal eerst, dan de demo-link, kort.
- Fouten op hun site die de mail mag noemen (`docs/prospect.md`): placeholder "555 555 555" en "Example@mail.com" in de header; prijslijst en reviews als plaatje; "Button"/"Knop" op de teamkaarten.
- Prijzen voor als ze ja zeggen: ladder lokaal, basis 500 plus 60 per uur, CMS 750, onderhoud 49 per maand (`docs/TODO.md` in de JW-repo, sectie Finance).

## Wat de volgende sessie doet, in volgorde

1. `npm install` (node_modules zijn niet in git), `npx prettier --write .`, `npm run check`, `npm run lint`, `npm run build`.
2. Renderen op 1440 en 400 (Playwright, Chromium staat in de omgeving) en **kijken**. Daarna de audit van `site-design-rulebook` (`scripts/render-audit.js`, `type-audit.js`) en `docs/audit.md` schrijven. Verwachte zwakke plekken: de collage (`Work.svelte`, posities in `workFacts`) is blind geplaatst; de hero-foto (3:4, 1086 px breed) naast de kopij; de prijslijst-rijen op een telefoon.
3. Vercel: `create_git_project` op `Jaywesterlow/hip-geknipt`, dan de live URL in `site.origin`.
4. De mail, met de connectie hierboven, in `docs/outreach/`.
5. Kalender: "Bellen: Salon Hip Geknipt" maandag 13 oktober 12:00, Google Calendar.
6. Bord: `outreach/hip-geknipt.json` in jw-docs naar `sent` zodra hij gemaild heeft, `nextAt` 2026-10-13.
7. **Firecrawl**: de credits zijn op (0 van 1000) en **resetten op 1 november 2026 om 15:06** (Nederlandse tijd). Jaymar wil dan een tweede lezing van salonhipgeknipt.nl met Firecrawl (hij ziet Firecrawl als vast onderdeel van klantonderzoek), ook al is de site nu al met curl en Chromium gelezen. Niet eerder: een betaald plan kost ongeveer 16 dollar per maand en mag niet zonder zijn ja.

## Wat er al ligt

- `docs/prospect.md`: alles wat van hun site is gelezen, de foto's en hun bron, de fouten op hun site.
- `docs/recept.md`: het ontwerprecept (sector kapsalon, look "Dark atmospheric salon", elke afwijking benoemd, de genoemde kennisgaten in de vault).
- `docs/bewegingsconcept.md`: bibliotheek 11b (tekst), 12 (foto's), 07 (de collage, het signatuurmoment).
- `src/lib/data/studio.nl.ts`: hun woorden, de 24 prijsregels, 6 van hun 8 reviews.
- `static/fonts`: Cormorant Garamond en Jost, zelf gehost.

## Valkuilen

- De vault-skill `bewegingsconcept` verwijst naar pagina's die niet bestaan (Animatie Per Sitetype, Animatiesystemen Voor Websites, Fotocriteria Voor Beeldsites). Beslis uit de bibliotheek en zeg wat je koos.
- `looks.md`, `rulebook.md` en `composition.md` zijn te groot voor `read_skill_file`; `crucial-rules.md`, de SB-onderzoeksfile en de workflow zijn wel leesbaar.
- Chromium in de cloudomgeving vertrouwt de proxy-CA niet; start het met `--ignore-certificate-errors-spki-list=<hashes van /root/.ccr/ca-bundle.crt>` (de dashboardsessie schreef die naar een scratchpad; opnieuw afleiden met openssl). Voor localhost is niets nodig.
- Hun openingstijden staan nergens op hun site en niet in de Aimy-widget: niet verzinnen, staan niet in de demo.
- De logo-PNG had een zwarte achtergrond; `src/lib/assets/logo.png` is de transparante versie (drempel op helderheid). De oranje puntjes op de i's zijn niet als kleur gebruikt.
