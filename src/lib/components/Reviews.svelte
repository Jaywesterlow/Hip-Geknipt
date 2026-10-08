<script lang="ts">
	import type { Review, UI } from '$lib/data/studio';
	import Lines from './Lines.svelte';
	import Mask from './Mask.svelte';

	/**
	 * Their reviews, in their customers' words: two columns of hairline rows, the quote in
	 * Garamond with the opening mark hung outside the measure, the name under it.
	 */
	type Props = { reviews: Review[]; text: UI['reviews'] };
	let { reviews, text }: Props = $props();

	// alternate, so a long quote and a short one share a row and the columns end near each other
	const columns = $derived([
		reviews.filter((_, i) => i % 2 === 0),
		reviews.filter((_, i) => i % 2 === 1)
	]);
</script>

<section class="reviews frame section" id="reviews">
	<div class="head">
		<Lines lines={[text.label]} as="p" class="label" />
		<Lines lines={text.lines} as="h2" class="display" />
	</div>

	<div class="columns">
		{#each columns as column, c (c)}
			<ul class="rows">
				{#each column as review (review.name)}
					<Mask as="li" class="review">
						<blockquote>
							<p class="quote">“{review.quote}”</p>
							<footer class="small">{review.name}</footer>
						</blockquote>
					</Mask>
				{/each}
			</ul>
		{/each}
	</div>
</section>

<style>
	.columns {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: var(--space-7);
		align-items: start;
	}
	/* the mask reaches 12px past the text edge, so the hung opening mark is never clipped */
	.reviews :global(.review .line) {
		margin-left: calc(var(--space-3) * -1);
		padding-left: var(--space-3);
	}
	.reviews :global(.review .line > span) {
		display: block;
		padding-block: var(--space-6);
	}
	.quote {
		font-family: var(--font-display);
		font-weight: 500;
		font-size: var(--text-h3);
		line-height: 1.25;
		max-width: 30em;
		/* the opening mark hangs outside the text edge */
		text-indent: -0.4em;
	}
	blockquote footer {
		margin-top: var(--space-4);
	}
	@media (max-width: 900px) {
		.columns {
			grid-template-columns: 1fr;
		}
		/* one list on a phone: the second column continues the first without a double rule */
		.columns .rows + .rows > :first-child {
			border-top: 0;
		}
	}
</style>
