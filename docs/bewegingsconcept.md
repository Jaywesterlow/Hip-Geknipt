# Bewegingsconcept — Salon Hip Geknipt (kapsalon, demo)

Huidige beweging: geen. De Duda-site van de salon beweegt niet: een cookiebalk, een slider die stilstaat, verder niets.
Gekozen systeem: beeld-eerst collage — klasse B (scroll-gestuurd, geen pin) — foto-check: dragen (acht werkfoto's van 1440 × 1800, het interieur 1086 × 1448, vier portretten van 850 tot 1250 px breed; genoeg voor kolommen en kaarten, net niet voor een liggende full-bleed hero, dus de hero is een split).
Voorbeelden (beweging, niet vorm): bibliotheek 11b, 12 en 07 (jwcreative.nl/animations), de vault-pagina's die de skill noemt bestaan niet (zie `docs/recept.md`).

Verhaal in vier stappen:
1. De bezoeker ziet de salon: links de zin "Jouw haar, *onze passie*" die regel voor regel omhoogschuift, rechts het interieur dat vanaf de onderrand openknipt terwijl het terugzoomt. Goud, bruin, warm licht.
2. De prijslijst als tekst: elke groep schuift zacht omhoog als hij in beeld komt. Geen plaatje meer, alles leesbaar en kopieerbaar.
3. Het werk: zeven foto's van echt haar liggen los over het scherm, komen elk schuin op hun plek en bewegen daarna met een eigen snelheid mee met de scroll. Dit is het moment.
4. De handeling: de gouden band onderaan met "Online boeken" naar hun Aimy-agenda, of bellen. Elke knop opent eerst de demo-dialoog.

Signatuurmoment (één): de collage "Ons werk" (07). Zeven foto's absoluut geplaatst in een vlak van 180 svh; elk beeld komt diagonaal en op 80 % binnen (CSS-transitie, 1 s ease, per positie een andere diagonaal en 0 tot 0,15 s vertraging) zodra het op 92 % van het scherm staat, en scrubt daarna met `data-speed` 1 tot 4 tussen +6 % en −6 % van de schermhoogte (GSAP ScrollTrigger, ease none). Grijs tot de cursor eroverheen gaat (filter 0,3 s). Geen pin, geen scroll-lock.
Bewegingssoorten (max drie): reveal-on-enter (11b: regels in maskers, yPercent 110 → 0, 1,2 s expo.out, stagger 0,08 s; trigger top 85 %) · beeld-reveal (12: clip-path inset vanaf onder 1 s power2.out na 0,2 s, schaal 1,3 → 1 in 4 s power2.out; trigger top 60 %) · de collage-scrub (07, signatuur).
Afwerking: loader geen · menu een vel onder de balk, 200 ms fade · hover alleen kleur: knoppen wisselen goud en crème (150 ms), tekstlinks worden crème, tegels in de collage krijgen kleur · cursor standaard.
Mobiel: de collage wordt een compacter vlak (260 svh, bredere beelden, kortere diagonalen, zoals het bibliotheekbestand onder 700 px); de scrub blijft (transform only). Reveals en beeld-reveals blijven.
Reduced motion: geen maskers, geen clip, geen scrub; de collage is een stille verzameling op zijn plek met 90 % opacity; Lenis uit. De pagina is compleet.

Vangrails: [x] ≤3 bewegingssoorten [x] tekst <300 ms leesbaar (11b op expo.out: de regel staat na ~250 ms vrijwel stil; reveals onder de vouw starten op 85 %) [x] geen scroll-lock [x] reduced motion volwaardig [ ] Lighthouse mobiel ≥90 (niet gemeten)

Wat verandert er aan de beweging t.o.v. nu: van een stilstaande pagina met een cookiebalk naar één familie die alles van onder laat komen, één foto-reveal en één scroll-collage van hun eigen werk.

Niet van MOOON: 16 (woorden uit dubbele maskers op 1,4 s), 01b (de maan) en 27c (magneet) komen hier niet voor; de curve is expo.out in plaats van 16's curve; de hover is kleur, geen vulling.
