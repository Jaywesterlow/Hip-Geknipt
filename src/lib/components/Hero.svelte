<script lang="ts">
	import { photos } from '$lib/assets/photos';
	import type { Studio, UI } from '$lib/data/studio';
	import { demo } from '$lib/state/demo.svelte';
	import Button from './Button.svelte';
	import Lines from './Lines.svelte';
	import Mask from './Mask.svelte';
	import Photo from './Photo.svelte';

	/**
	 * One screen under the bar, a 5/7 split: left on the key line the label, the display line
	 * with its italic word, one sentence and two buttons; right their interior from the 5-column
	 * line off the right edge (the first container break). On a phone the copy comes first.
	 */
	type Props = { studio: Studio; text: UI['hero'] };
	let { studio, text }: Props = $props();
</script>

<header class="hero frame" id="top">
	<div class="copy">
		<Lines lines={[text.label]} as="p" class="label" />
		<Lines lines={text.lines} as="h1" class="display" />
		<Lines lines={[text.lede]} as="p" class="lede" />
		<Mask class="actions">
			<Button href={studio.booking} onclick={demo.book} external>{text.book}</Button>
			<Button href={studio.phone.href} onclick={demo.open} variant="outline">{text.call}</Button>
		</Mask>
	</div>
	<div class="visual">
		<Photo
			src={photos.salon}
			alt={text.alt}
			sizes="(max-width: 900px) 100vw, 58vw"
			ratio="3 / 4"
			loading="eager"
			position="50% 60%"
		/>
	</div>
</header>

<style>
	.hero {
		display: grid;
		grid-template-columns: 5fr 7fr;
		column-gap: var(--space-7);
		align-items: center;
		min-height: calc(100svh - var(--nav-h));
		padding-block: var(--section);
	}
	.copy {
		display: grid;
		justify-items: start;
		gap: var(--space-5);
	}
	.copy :global(.label) {
		margin-bottom: calc(var(--space-3) * -1);
	}
	.copy :global(.actions .line > span) {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		padding-top: var(--space-2);
	}
	.visual {
		/* from the 5-column line off the right edge */
		margin-right: calc(var(--bleed) * -1);
	}
	/* the frame fills its seven columns to the viewport edge and the screen's height; the photo
	   (3:4) is cropped inside it, so the break lands on the edge, never a few columns short */
	.visual :global(.photo) {
		aspect-ratio: auto;
		height: calc(100svh - var(--nav-h) - var(--section) * 2);
		min-height: 24rem;
	}
	@media (max-width: 900px) {
		.hero {
			grid-template-columns: 1fr;
			row-gap: var(--space-6);
			align-items: start;
			min-height: 0;
		}
		.visual {
			margin-right: 0;
		}
		.visual :global(.photo) {
			aspect-ratio: 4 / 5;
			height: auto;
			min-height: 0;
		}
	}
</style>
