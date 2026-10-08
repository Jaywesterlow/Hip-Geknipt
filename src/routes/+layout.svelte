<script lang="ts">
	import 'lenis/dist/lenis.css';
	import '../app.css';

	import { prefersReducedMotion } from 'svelte/motion';
	import { DemoDialog, Footer, Nav } from '$lib';
	import favicon from '$lib/assets/favicon.svg';
	import { site } from '$lib/data/studio';
	import { salonSchema } from '$lib/data/schema';
	import { holdScroll, refreshWhenSettled, startSmoothScroll } from '$lib/motion/scroll';
	import { demo } from '$lib/state/demo.svelte';

	let { data, children } = $props();

	const canonical = site.origin + '/';

	// closing tag split in two: a literal one would end this script block
	const schemaTag =
		'<script type="application/ld+json">' +
		JSON.stringify(
			salonSchema(data.studio, data.priceGroups, {
				url: canonical,
				title: data.studio.title,
				description: data.studio.description
			})
		) +
		'</' +
		'script>';

	// smooth scroll only for visitors who did not ask for less motion; flips live with the setting
	$effect(() => {
		if (prefersReducedMotion.current) return;
		return startSmoothScroll();
	});

	$effect(() => refreshWhenSettled());

	// the page behind the demo dialog stays where it is
	$effect(() => holdScroll(demo.isOpen));
</script>

<svelte:head>
	<title>{data.studio.title}</title>
	<meta name="description" content={data.studio.description} />
	<link rel="canonical" href={canonical} />
	<link rel="icon" href={favicon} />
	<meta property="og:title" content={data.studio.title} />
	<meta property="og:description" content={data.studio.description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:locale" content="nl_NL" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- our own data, serialised as JSON -->
	{@html schemaTag}
</svelte:head>

<Nav studio={data.studio} links={data.navLinks} text={data.ui.nav} />

<main>
	{@render children()}
</main>

<Footer studio={data.studio} text={data.ui.footer} />

<DemoDialog text={data.ui.demo} />
