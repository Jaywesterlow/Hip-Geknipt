import { site, type PriceGroup, type Studio } from './studio';

type Page = { url: string; title: string; description: string };

/**
 * schema.org for the page, generated from the same object the page renders: the salon as a
 * HairSalon (address, phone, mail, socials, the price list as Offers) and the WebPage.
 */
export function salonSchema(studio: Studio, groups: PriceGroup[], page: Page) {
	const id = `${site.origin}/#salon`;

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'HairSalon',
				'@id': id,
				name: studio.fullName,
				url: studio.url,
				telephone: studio.phone.schema,
				email: studio.email,
				foundingDate: String(studio.since),
				address: {
					'@type': 'PostalAddress',
					streetAddress: studio.address.street,
					postalCode: studio.address.postalCode,
					addressLocality: studio.address.city,
					addressCountry: studio.address.country
				},
				sameAs: studio.socials.map((social) => social.href),
				makesOffer: groups.flatMap((group) =>
					group.rows.map((row) => ({
						'@type': 'Offer',
						name: row.name,
						category: group.title,
						price: row.amount.toFixed(2),
						priceCurrency: 'EUR'
					}))
				)
			},
			{
				'@type': 'WebPage',
				'@id': page.url,
				url: page.url,
				name: page.title,
				description: page.description,
				inLanguage: 'nl',
				about: { '@id': id }
			}
		]
	};
}
