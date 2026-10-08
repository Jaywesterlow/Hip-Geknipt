<script lang="ts">
	import { photos } from '$lib/assets/photos';
	import type { Studio, UI } from '$lib/data/studio';
	import { demo } from '$lib/state/demo.svelte';
	import Button from './Button.svelte';
	import Lines from './Lines.svelte';
	import Mask from './Mask.svelte';
	import Photo from './Photo.svelte';

	/**
	 * Their extensions offer: the mirror split, 5/7, the photo in the narrow column on the key
	 * line, the two ways to pay as hairline rows beside it, and the free advice talk as the action.
	 */
	type Props = { studio: Studio; text: UI['extensions'] };
	let { studio, text }: Props = $props();
</script>

<section class="extensions frame section" id="extensions">
	<div class="visual">
		<Photo
			src={photos.extensions}
			alt={text.alt}
			sizes="(max-width: 900px) 100vw, 40vw"
			ratio="3 / 4"
		/>
	</div>
	<div class="copy">
		<div class="head">
			<Lines lines={[text.label]} as="p" class="label" />
			<Lines lines={text.lines} as="h2" class="display" />
			<Lines lines={[text.lede]} as="p" class="lede" />
		</div>
		<ul class="rows options">
			{#each text.options as option (option.title)}
				<Mask as="li" class="option">
					<h3>{option.title}</h3>
					<p>{option.line}</p>
				</Mask>
			{/each}
		</ul>
		<Lines lines={[text.advice]} as="p" class="advice" />
		<Mask>
			<Button href={studio.booking} onclick={demo.book} external>{text.book}</Button>
		</Mask>
	</div>
</section>

<style>
	.extensions {
		display: grid;
		grid-template-columns: 5fr 7fr;
		column-gap: var(--space-7);
		align-items: start;
	}
	.copy {
		display: grid;
		justify-items: start;
		gap: var(--space-5);
	}
	.copy :global(.head) {
		margin-bottom: 0;
	}
	.options {
		justify-self: stretch;
		max-width: 36em;
	}
	.extensions :global(.option .line > span) {
		display: grid;
		gap: var(--space-2);
		padding-block: var(--space-5);
	}
	.extensions :global(.option p) {
		color: var(--muted);
	}
	.extensions :global(.advice) {
		max-width: 36em;
	}
	@media (max-width: 900px) {
		.extensions {
			grid-template-columns: 1fr;
			row-gap: var(--space-6);
		}
	}
</style>
