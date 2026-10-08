<script lang="ts">
	import type { Studio, UI } from '$lib/data/studio';
	import { demo } from '$lib/state/demo.svelte';
	import Button from './Button.svelte';
	import Lines from './Lines.svelte';
	import Mask from './Mask.svelte';

	/**
	 * The one centred section: a gold band edge to edge, the welcome line, their English tagline
	 * and the booking button in the ground's colour.
	 */
	type Props = { studio: Studio; text: UI['closing'] };
	let { studio, text }: Props = $props();
</script>

<section class="closing gold frame sparse">
	<div class="stack">
		<Lines lines={text.lines} as="h2" class="display" />
		<Lines lines={[text.lede]} as="p" class="lede tagline" />
		<Mask>
			<Button href={studio.booking} onclick={demo.book} variant="dark" external>{text.book}</Button>
		</Mask>
	</div>
</section>

<style>
	.closing {
		display: grid;
		justify-items: center;
	}
	.stack {
		display: grid;
		justify-items: center;
		text-align: center;
		gap: var(--space-5);
		max-width: 40rem;
	}
	.closing :global(.tagline) {
		font-family: var(--font-display);
		font-style: italic;
		font-size: var(--text-h3);
	}
</style>
