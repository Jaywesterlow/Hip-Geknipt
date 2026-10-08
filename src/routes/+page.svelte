<script lang="ts">
	import { Closing, Extensions, Hero, Intro, Prices, Reviews, Team, Visit, Work } from '$lib';

	let { data } = $props();
</script>

<!-- the section map (docs/recept.md): A A G G A N G A C -->
<Hero studio={data.studio} text={data.ui.hero} />
<Intro studio={data.studio} text={data.ui.intro} />
<Prices studio={data.studio} groups={data.priceGroups} text={data.ui.prices} />
<Team members={data.team} text={data.ui.team} />
<Extensions studio={data.studio} text={data.ui.extensions} />
<!-- the signature: their work as a collage that moves with the scroll -->
<Work items={data.work} text={data.ui.work} />
<Reviews reviews={data.reviews} text={data.ui.reviews} />
<Visit studio={data.studio} text={data.ui.visit} />
<Closing studio={data.studio} text={data.ui.closing} />
