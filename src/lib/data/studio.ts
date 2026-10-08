import type { PhotoKey } from '$lib/assets/photos';
import { nl } from './studio.nl';

/**
 * The content of the site. Facts that are not words live here once; the words live in
 * `studio.nl.ts`. `content` joins them, so the page and the JSON-LD can never drift apart.
 *
 * Every fact comes from salonhipgeknipt.nl (read 8 October 2026, `docs/prospect.md`).
 */

export const site = {
	/** Assumed production URL of the demo; change it here once Vercel has one. */
	origin: 'https://hip-geknipt.vercel.app'
};

/** Facts: the same on the page and in the JSON-LD. */
export const facts = {
	name: 'Salon Hip Geknipt',
	fullName: 'Salon Hip Geknipt Spijkenisse',
	url: 'https://www.salonhipgeknipt.nl/',
	since: 2014,
	/**
	 * Booking today: their Aimy online agenda. Every booking button keeps this as its href, for
	 * visitors without JavaScript and for a new tab; a plain click opens the demo dialog, so the
	 * demo can never take a real booking.
	 */
	booking:
		'https://widget2.meetaimy.com/widgetWeb?salonId=NDk3NzM3&salonEmail=aGlwZ2VrbmlwdDdAZ21haWwuY29t',
	phone: { display: '0181 621314', href: 'tel:+31181621314', schema: '+31181621314' },
	email: 'info@salonhipgeknipt.nl',
	address: {
		street: 'Nieuwstraat 190',
		postalCode: '3201 EE',
		city: 'Spijkenisse',
		country: 'NL',
		maps: 'https://maps.google.com/?q=Nieuwstraat+190,+3201+EE+Spijkenisse'
	},
	socials: [
		{ name: 'Instagram', href: 'https://instagram.com/Salon.hipgeknipt' },
		{ name: 'Facebook', href: 'https://facebook.com/www.hipgeknipt.nl' }
	],
	/** Their partners, as the strip on their site names them. */
	partners: ['Fugazzi', 'Wasgeluk', 'Curly Secret', 'Paul Mitchell', "Finnley's", 'KIS']
};

export type Facts = typeof facts;

/**
 * The price list, read from the JPG on their site. `from` marks a "vanaf" price. Amounts in
 * euro.
 */
export type PriceRow = { name: string; amount: number; from?: boolean; period?: string };
export type PriceGroup = {
	id: string;
	title: string;
	line: string;
	rows: PriceRow[];
	note?: string;
};

const teamFacts = [
	{ photo: 'teamKaylee' },
	{ photo: 'teamJacqueline' },
	{ photo: 'teamCheyenne' },
	{ photo: 'teamLinda' }
] as const satisfies readonly { photo: PhotoKey }[];

/**
 * The collage of their work: seven photos, each with its size class, position (percent of the
 * stage) and scroll speed, placed as library entry 07 places its items.
 */
export const workFacts = [
	{ photo: 'work1', size: 'big', x: 2, y: 0, speed: 2 },
	{ photo: 'work2', size: 'normal', x: 46, y: 6, speed: 4 },
	{ photo: 'work3', size: 'small', x: 78, y: 2, speed: 3 },
	{ photo: 'work4', size: 'normal', x: 22, y: 36, speed: 1 },
	{ photo: 'work5', size: 'big', x: 62, y: 30, speed: 2 },
	{ photo: 'work6', size: 'small', x: 4, y: 68, speed: 4 },
	{ photo: 'work7', size: 'normal', x: 42, y: 66, speed: 3 }
] as const satisfies readonly {
	photo: PhotoKey;
	size: 'big' | 'normal' | 'small';
	x: number;
	y: number;
	speed: number;
}[];

const navFacts = ['#prijslijst', '#team', '#extensions', '#werk', '#contact'] as const;

/** One entry of words for each fact, in the same order: the tuple types keep the counts equal. */
type WordsFor<T extends readonly unknown[], W> = { [K in keyof T]: W };

export type Review = { quote: string; name: string };

/** Everything in words. The one language file is checked against this type. */
export type Copy = {
	title: string;
	description: string;
	navLinks: WordsFor<typeof navFacts, string>;
	team: WordsFor<typeof teamFacts, { name: string; role: string; hours: string; alt: string }>;
	work: WordsFor<typeof workFacts, string>;
	priceGroups: PriceGroup[];
	reviews: Review[];
	ui: {
		nav: { book: string; menu: string; close: string; phone: string };
		hero: {
			label: string;
			lines: string[];
			lede: string;
			book: string;
			call: string;
			alt: string;
		};
		intro: { label: string; lines: string[]; body: string; more: string; partners: string };
		prices: { label: string; lines: string[]; lede: string; foot: string; book: string };
		team: { label: string; lines: string[]; lede: string };
		extensions: {
			label: string;
			lines: string[];
			lede: string;
			options: { title: string; line: string }[];
			advice: string;
			book: string;
			alt: string;
		};
		work: { label: string; lines: string[]; lede: string };
		reviews: { label: string; lines: string[] };
		visit: {
			label: string;
			lines: string[];
			lede: string;
			address: string;
			phone: string;
			mail: string;
			route: string;
			socials: string;
			book: string;
		};
		closing: { lines: string[]; lede: string; book: string };
		footer: { tagline: string; book: string; top: string; credit: string };
		/** the demo dialog: one line for a booking button, one for any other link that leaves the page */
		demo: {
			title: string;
			book: string;
			link: string;
			toAgenda: string;
			follow: string;
			close: string;
		};
	};
};

export type UI = Copy['ui'];

export type TeamMember = {
	photo: PhotoKey;
	name: string;
	role: string;
	hours: string;
	alt: string;
};
export type WorkItem = (typeof workFacts)[number] & { alt: string };
export type NavLink = { href: string; label: string };

function compose(copy: Copy) {
	return {
		studio: { ...facts, title: copy.title, description: copy.description },
		ui: copy.ui,
		navLinks: navFacts.map((href, i): NavLink => ({ href, label: copy.navLinks[i] })),
		team: teamFacts.map((item, i): TeamMember => ({ ...item, ...copy.team[i] })),
		work: workFacts.map((item, i): WorkItem => ({ ...item, alt: copy.work[i] })),
		priceGroups: copy.priceGroups,
		reviews: copy.reviews
	};
}

export type Content = ReturnType<typeof compose>;
export type Studio = Content['studio'];

export const content: Content = compose(nl);

/** € 34,95 and € 450,-, as their price list writes them. */
export function euro(amount: number): string {
	const text = Number.isInteger(amount) ? `${amount},-` : amount.toFixed(2).replace('.', ',');
	return `€ ${text}`;
}
