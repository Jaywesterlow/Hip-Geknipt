import type { Copy } from './studio';

/**
 * The words. Everything comes from salonhipgeknipt.nl (`docs/prospect.md`): their own sentences,
 * their price list and their reviews, shortened where a sentence had to fit a line. Nothing is
 * invented. A `*word*` in a display line is set in italic.
 */
export const nl: Copy = {
	title: 'Salon Hip Geknipt, kapsalon in Spijkenisse',
	description:
		'Knippen, kleuren, balayage, krullen en hairextensions bij Salon Hip Geknipt aan de Nieuwstraat in Spijkenisse. Boek online of bel 0181 621314.',
	navLinks: ['Prijslijst', 'Team', 'Extensions', 'Ons werk', 'Contact'],
	team: [
		{
			name: 'Kaylee',
			role: 'Allround stylist, assistent salonmanager',
			hours: 'Fulltime beschikbaar',
			alt: 'Kaylee, allround stylist bij Salon Hip Geknipt'
		},
		{
			name: 'Jacqueline',
			role: 'Allround stylist',
			hours: 'Fulltime beschikbaar',
			alt: 'Jacqueline, allround stylist bij Salon Hip Geknipt'
		},
		{
			name: 'Cheyenne',
			role: 'New talent stylist',
			hours: 'Fulltime beschikbaar',
			alt: 'Cheyenne, new talent stylist bij Salon Hip Geknipt'
		},
		{
			name: 'Linda',
			role: 'Allround stylist',
			hours: 'Parttime beschikbaar',
			alt: 'Linda, allround stylist bij Salon Hip Geknipt'
		}
	],
	work: [
		'Lang haar met warme balayage en losse krullen',
		'Bruin haar met lichte highlights, geföhnd met slag',
		'Rood gekleurd haar met volle krullen',
		'Donker haar met caramel balayage',
		'Bruin haar met zachte highlights en krullen',
		'Bruin haar met natuurlijke highlights',
		'Koperkleurige krullen, geknipt op het krulpatroon'
	],
	priceGroups: [
		{
			id: 'knippen',
			title: 'Knippen',
			line: 'Een look die bij jou past',
			rows: [
				{ name: 'Wassen, knippen & blowdry heren', amount: 34.95 },
				{ name: 'Wassen, knippen & blowdry dames kort haar', amount: 36.95 },
				{ name: 'Wassen, knippen & blowdry dames lang haar', amount: 40.95 },
				{ name: 'Wassen, knippen & föhnen met borstel kort haar', amount: 47.95, from: true },
				{ name: 'Styling / föhnen', amount: 29.95, from: true }
			]
		},
		{
			id: 'kleuring',
			title: 'Kleuring',
			line: 'Stralende kleur, gezond haar',
			rows: [
				{ name: 'Uitgroei inclusief styling', amount: 59.95 },
				{ name: 'Kleuring kort haar inclusief styling', amount: 73.95 },
				{ name: 'Kleuring lang haar inclusief styling', amount: 99.95 },
				{ name: 'Toner / semi-kleuring inclusief styling', amount: 69.95, from: true },
				{ name: 'Bio Keratin Intensive Treatment Mask', amount: 15 },
				{ name: 'Botox Keratin Intensive Treatment inclusief styling', amount: 79 }
			]
		},
		{
			id: 'kleurpakketten',
			title: 'Kleurpakketten & correcties',
			line: 'Complete kleurbehandelingen',
			rows: [
				{
					name: 'Faceframe highlights inclusief botox, toner en styling',
					amount: 124.95,
					from: true
				},
				{
					name: 'Half head foil, scalp en zijkanten, inclusief botox, toner en styling',
					amount: 154.95,
					from: true
				},
				{ name: 'Full head foil inclusief botox, toner en styling', amount: 174.95, from: true },
				{
					name: 'Balayage inclusief botox, toner, rootshadow en styling',
					amount: 189.95,
					from: true
				}
			],
			note: 'Bij haarlengte over de schouder geldt een toeslag van €\u00a020,-.'
		},
		{
			id: 'permanent',
			title: 'Permanent',
			line: 'Mooie krullen, langdurig resultaat',
			rows: [
				{ name: 'Deel permanent all-in', amount: 96.95 },
				{ name: 'Permanent all-in', amount: 123.95 },
				{ name: 'Spiraal permanent', amount: 179.95 }
			]
		},
		{
			id: 'extensions',
			title: 'Hairextensions',
			line: 'Meer volume, meer mogelijkheden',
			rows: [
				{ name: 'Volume all-in', amount: 450 },
				{ name: 'Verlenging all-in', amount: 600 },
				{ name: 'Haarabonnement extensions', amount: 75, from: true, period: 'per maand' }
			],
			note: 'Hairextensions kunnen in drie termijnen. Vraag naar de mogelijkheden.'
		},
		{
			id: 'krullen',
			title: 'Krullen',
			line: 'Speciale care voor krullen',
			rows: [{ name: 'Krullen knippen all-in (Curly Secret)', amount: 70, from: true }]
		}
	],
	reviews: [
		{
			quote:
				'Kaylee en Cheyenne, ontzettend bedankt voor jullie werk. Mijn haar is echt weer prachtig; iedere keer als ik in jullie stoel zit, weet ik gewoon dat ik aan het einde van de dag met een glimlach jullie salon uitloop. Iedere keer als ik in de spiegel kijk, denk ik: wauw, dit is gewoon echt mijn haar.',
			name: 'Megan Munoz English'
		},
		{
			quote:
				'Ik heb inmiddels voor de tweede keer mijn haar laten knippen bij Hip Geknipt, deze keer door Jacqueline. Ik ben erg tevreden. Ze neemt de tijd om goed naar je wensen te luisteren en geeft waar nodig advies. Ze is geduldig en vriendelijk.',
			name: 'Zandra Coffie'
		},
		{
			quote:
				'Ik heb het iedere keer ontzettend naar mijn zin. Ze zijn allemaal vrolijk en er is altijd tijd voor een gezellig praatje. Geweldige salon!',
			name: 'Miranda van der Meer'
		},
		{ quote: 'Zoals altijd! Perfect geholpen en altijd klantvriendelijk.', name: 'Devin Patijn' },
		{
			quote:
				'Wordt altijd goed behandeld en ze nemen de tijd voor je. En altijd een vers kopje koffie.',
			name: 'André Smol'
		},
		{ quote: 'Geweldige meiden, gezellig en super geknipt!', name: 'Annemiek Groos' }
	],
	ui: {
		nav: { book: 'Online boeken', menu: 'Menu', close: 'Sluiten', phone: '0181 621314' },
		hero: {
			label: 'Kapsalon in Spijkenisse, sinds 2014',
			lines: ['Jouw haar,', '*onze passie*'],
			lede: 'Knippen, kleuren, balayage, krullen en hairextensions, met vakkennis en persoonlijke aandacht. Aan de Nieuwstraat in Spijkenisse.',
			book: 'Online boeken',
			call: 'Bel 0181 621314',
			alt: 'De salon: gouden stoelen, een ronde spiegel en een groene plantenwand'
		},
		intro: {
			label: 'Welkom',
			lines: ['Mooi, gezond en', '*stralend* haar'],
			body: 'Bij Salon Hip Geknipt draait alles om mooi, gezond en stralend haar. Ons enthousiaste en ervaren team combineert vakkennis, creativiteit en persoonlijke aandacht om het beste uit jouw haar te halen.',
			more: 'Van knippen en stylen tot prachtige kleuringen, highlights, balayage, krullen en hairextensions: wij kijken verder dan alleen je kapsel. We luisteren naar jouw wensen, adviseren je over de mogelijkheden en zoeken samen naar een look die perfect bij jou past.',
			partners: 'We werken met'
		},
		prices: {
			label: 'Prijslijst',
			lines: ['Wat het kost,', '*vooraf* duidelijk'],
			lede: 'Professionele haarverzorging, persoonlijk advies, jouw stijl.',
			foot: 'Prijzen kunnen variëren door haarlengte, haardikte en productgebruik. Eventuele meerprijzen worden vooraf besproken.',
			book: 'Maak een afspraak'
		},
		team: {
			label: 'Ons team',
			lines: ['Onze handen', 'voor *jouw* haar'],
			lede: 'Vier stylisten, één salon. Je kiest zelf bij wie je zit.'
		},
		extensions: {
			label: 'Hairextensions',
			lines: ['Lang haar,', 'in *drie* termijnen'],
			lede: 'Droom je van lang, vol en natuurlijk haar? Om hairextensions voor iedereen toegankelijk te maken kun je kiezen uit twee mogelijkheden.',
			options: [
				{
					title: 'Haarabonnement',
					line: 'Een vast bedrag per maand, het hele jaar mooi en vol haar. Inclusief onderhoud en professionele verzorging in de salon.'
				},
				{
					title: 'In drie termijnen',
					line: 'Liever geen abonnement? Dan betaal je jouw haarverlenging in drie maandelijkse termijnen, zonder één groot bedrag ineens.'
				}
			],
			advice:
				'Tijdens een gratis adviesgesprek kijken we samen welke optie het beste bij jou en jouw haar past.',
			book: 'Plan een gratis adviesgesprek',
			alt: 'Lang blond haar met losse krullen, van achteren'
		},
		work: {
			label: 'Ons werk',
			lines: ['Uit *onze* stoel'],
			lede: 'Kleur, krullen en lengte, zoals ze de salon uitliepen.'
		},
		reviews: {
			label: 'Reviews',
			lines: ['Wat klanten', '*zeggen*']
		},
		visit: {
			label: 'Contact',
			lines: ['Kom *langs*'],
			lede: 'Afspraken maken of wijzigen kan alleen via de online agenda of telefonisch.',
			address: 'Adres',
			phone: 'Telefoon',
			mail: 'E-mail',
			route: 'Route',
			socials: 'Volg ons',
			book: 'Online boeken'
		},
		closing: {
			lines: ['Je bent van harte *welkom*'],
			lede: 'Your hair is our care.',
			book: 'Online boeken'
		},
		footer: {
			tagline: 'Jouw haar, onze passie.',
			book: 'Online boeken',
			top: 'Naar boven',
			credit: 'Conceptdemo, JW Creative'
		},
		demo: {
			title: 'Dit is een conceptdemo.',
			book: 'Op de echte site opent hier de online agenda van Salon Hip Geknipt. Deze demo neemt geen afspraken aan.',
			link: 'Op de echte site gaat deze link verder. Deze demo blijft hier.',
			toAgenda: 'Toch naar de agenda',
			follow: 'Toch volgen',
			close: 'Sluiten'
		}
	}
};
