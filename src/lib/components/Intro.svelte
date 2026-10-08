<script lang="ts">
	import type { Studio, UI } from '$lib/data/studio';
	import Lines from './Lines.svelte';
	import Mask from './Mask.svelte';

	/**
	 * Their welcome, in their words: a 7/5 split, the copy in the wide column on the key line,
	 * the partners they work with as hairline rows in the narrow one.
	 */
	type Props = { studio: Studio; text: UI['intro'] };
	let { studio, text }: Props = $props();
</script>

<section class="intro frame section">
	<div class="copy">
		<div class="head">
			<Lines lines={[text.label]} as="p" class="label" />
			<Lines lines={text.lines} as="h2" class="display" />
		</div>
		<Lines lines={[text.body]} as="p" class="lede" />
		<Lines lines={[text.more]} as="p" class="more" />
	</div>
	<aside class="partners">
		<Lines lines={[text.partners]} as="p" class="label" />
		<ul class="rows">
			{#each studio.partners as partner (partner)}
				<Mask as="li" class="partner">{partner}</Mask>
			{/each}
		</ul>
	</aside>
</section>

<style>
	.intro {
		display: grid;
		grid-template-columns: 7fr 5fr;
		column-gap: var(--space-7);
		align-items: start;
	}
	.copy {
		display: grid;
		gap: var(--space-5);
	}
	.copy :global(.head) {
		margin-bottom: 0;
	}
	.copy :global(.more) {
		max-width: 36em;
		color: var(--muted);
	}
	.partners {
		display: grid;
		gap: var(--space-4);
		/* starts on the heading's line, not the label's */
		padding-top: var(--space-6);
	}
	.partners :global(.partner .line > span) {
		display: flex;
		align-items: center;
		min-height: 3.25rem;
	}
	@media (max-width: 900px) {
		.intro {
			grid-template-columns: 1fr;
			row-gap: var(--space-7);
		}
		.partners {
			padding-top: 0;
		}
	}
</style>
