# Handoff — Salon Hip Geknipt demo

Voor: de volgende Claude-sessie, in deze repo.
Van: de cloudsessie van 8 oktober 2026, 's avonds (session_01QSbKsXqvUNz1rhs3EvsVCu), na de dashboardsessie van dezelfde dag.
Klant: Jaymar Westerlow, JW Creative.

Lees `CLAUDE.md` eerst. Dit bestand zegt waar het werk staat en wat er nog niet is.

## Waar het staat (9 oktober 2026, 00:20)

| Ding   | Stand                                                                                                                                                                                                                                                                                                                                                 |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Code   | `npm run check` 0 fouten (4 onschuldige waarschuwingen in `+layout.svelte`), `npm run lint` schoon, `npm run build` goed.                                                                                                                                                                                                                             |
| Gezien | Gerenderd op 1440 en 400, vier passes met de audit-scripts van `site-design-rulebook`, elke band gelezen. Tien fouten gevonden en verholpen (hero-foto niet tot de rand, collage-plaatsing, hangend aanhalingsteken geknipt, footer naast de sleutellijn, een verloren spatie, een regelbreuk bij een prijs, de 11b-reset). Alles in `docs/audit.md`. |
| Repo   | `github.com/Jaywesterlow/Hip-Geknipt`, branch `main` en `claude/clever-carson-ib0hvw` gelijk.                                                                                                                                                                                                                                                         |
| Vercel | Zie "Vercel" onderaan dit bestand.                                                                                                                                                                                                                                                                                                                    |
| Mail   | Geschreven: `docs/outreach/mail-to-hip-geknipt.md`, en als concept in de mailbox jay@jwcreative.nl (dashboard /inbox, drafts, uid 41). **Niet verstuurd**; Jaymar verstuurt 9 oktober.                                                                                                                                                                |
| Bellen | Maandag 13 oktober 12:00 staat in Google Calendar (jaywesterlow71@gmail.com): "Bellen: Salon Hip Geknipt".                                                                                                                                                                                                                                            |
| Bord   | `outreach/hip-geknipt.json` in jw-docs staat op `building`. Naar `sent` met `nextAt` 2026-10-13 zodra Jaymar gemaild heeft; deze sessie had jw-docs niet in scope.                                                                                                                                                                                    |

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

- Hij kent de salon omdat hij er binnenliep: zijn moeder moest naar het toilet. Eerst mocht dat niet; de vriend van zijn moeder zei dat hij er de vloer had gelegd, en toen mocht het.
- Die vriend heeft dus **de vloer van de salon gelegd** en wordt **zaterdag 11 oktober 2026 zijn stiefvader**. In de mail staat "mijn stiefvader". Niet vragen wie Tobias is.
- De mail vertelt het toiletverhaal niet; de connectie is de vloer. Zelfde stad (Spijkenisse).
- De cold-email-skill hoort eerst connectievragen te stellen; Jaymar gaf de connectie zelf. De skill-kopie die hij bedoelt staat in de Fuku-repo (`docs/outreach/cold-email-SKILL.md`, `story-first.md`); die repo was in deze sessie niet leesbaar (permissie geweigerd), de vaultversie en de MOOON-mail zijn gebruikt. Elke draft eindigt met "waarom deze draft".

## De mail

- Van jay@jwcreative.nl, naar info@salonhipgeknipt.nl. **Nooit zelf versturen.**
- Onderwerp "de vloer". Opbouw als de MOOON-mail: verhaal, de gap in één bijzin, de demo-link, gratis, het belletje. 68 woorden.
- Eén fout van hun site genoemd (de prijslijst als foto); de rest (`docs/prospect.md`: "555 555 555" en "Example@mail.com" in de header, "Button"/"Knop" op de teamkaarten, de cookiebalk) is voor het gesprek.
- Prijzen voor als ze ja zeggen: ladder lokaal, basis 500 plus 60 per uur, CMS 750, onderhoud 49 per maand (`docs/TODO.md` in de JW-repo, sectie Finance).

## Wat de volgende sessie doet

1. Als de live URL anders is dan `https://hip-geknipt.vercel.app`: `site.origin` in `src/lib/data/studio.ts`, de mail (bestand en concept uid 41) en de agenda-afspraak aanpassen.
2. Na Jaymars mail: het bord in jw-docs naar `sent`, `nextAt` 2026-10-13.
3. Na het belletje: wat ze zeiden in `docs/prospect.md`, en hun openingstijden in de demo als ze die geven (`studio.ts`, `studio.nl.ts`, het JSON-LD in `schema.ts`).
4. **Firecrawl**: credits zijn op (0 van 1000) en resetten op 1 november 2026 om 15:06 (Nederlandse tijd). Er staat een eenmalige Routine die op 1 november 15:10 een sessie start voor de tweede lezing van salonhipgeknipt.nl met Firecrawl. Niet eerder, geen betaald plan zonder zijn ja.

## Wat er al ligt

- `docs/prospect.md`: alles wat van hun site is gelezen, de foto's en hun bron, de fouten op hun site.
- `docs/recept.md`: het ontwerprecept (sector kapsalon, look "Dark atmospheric salon", elke afwijking benoemd, de kennisgaten in de vault). De offset-liniaal is x = 648.
- `docs/bewegingsconcept.md`: bibliotheek 11b (tekst), 12 (foto's), 07 (de collage, het signatuurmoment).
- `docs/audit.md`: de gemeten audit, de fouten en de fixes, wat met opzet blijft.
- `docs/outreach/mail-to-hip-geknipt.md`: de mail en waarom.
- `src/lib/data/studio.nl.ts`: hun woorden, de 24 prijsregels, 6 van hun 8 reviews.
- `static/fonts`: Cormorant Garamond en Jost, zelf gehost.

## Valkuilen

- `vite preview` leest zijn bestandslijst bij de start: na elke `npm run build` de preview herstarten, anders 404 op de nieuwe chunks (geen CSS, geen JS) en een audit op een dode build. `lsof -t -i :4173 | xargs kill`; `pkill -f "vite preview"` doodt ook je eigen shell.
- `render-audit.js` springt vóór de screenshot terug naar boven, waardoor elk 11b-blok reset. De kopie in deze sessie bleef onderaan staan; de collage-items staan daar aan het bovenste eind van hun scrub en overlappen in de full-page render de lede (geen fout, zie `docs/audit.md`).
- De vault-skill `bewegingsconcept` verwijst naar pagina's die niet bestaan (Animatie Per Sitetype, Animatiesystemen Voor Websites, Fotocriteria Voor Beeldsites). Beslis uit de bibliotheek en zeg wat je koos.
- `looks.md`, `rulebook.md` en `composition.md` zijn te groot voor `read_skill_file`; `crucial-rules.md`, de scripts, de workflow en de templates zijn wel leesbaar.
- Chromium in de cloudomgeving: Playwright staat in `/opt/node-tools/node_modules` (`NODE_PATH`), de browser in `/opt/pw-browsers/chromium`. Voor localhost is niets nodig.
- Hun openingstijden staan nergens op hun site en niet in de Aimy-widget: niet verzinnen, staan niet in de demo.
- De logo-PNG had een zwarte achtergrond; `src/lib/assets/logo.png` is de transparante versie. De oranje puntjes op de i's zijn niet als kleur gebruikt.

## Vercel

Project aangemaakt op 8 oktober via `create_git_project` (team `team_lLWEBAmgSB3Sra1PonSxPooO`), gekoppeld aan `Jaywesterlow/Hip-Geknipt`, productie vanaf `main`. De URL staat in het sessieverslag en in `site.origin` als die anders werd dan `hip-geknipt.vercel.app`.
