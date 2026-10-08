<script lang="ts">
	import { photos } from '$lib/assets/photos';
	import type { UI, WorkItem } from '$lib/data/studio';
	import { collage } from '$lib/motion/attachments';
	import Lines from './Lines.svelte';

	/**
	 * The signature: their work as a collage (library 07). Seven photos of hair lie loosely over
	 * a stage that is wider than the frame, so they cross its edges; each comes in diagonally and
	 * at 80 % when it enters, then moves with its own speed as the page scrolls. In colour: colour
	 * is the product here.
	 */
	type Props = { items: WorkItem[]; text: UI['work'] };
	let { items, text }: Props = $props();
</script>

<section class="work section" id="werk">
	<div class="head frame">
		<Lines lines={[text.label]} as="p" class="label" />
		<Lines lines={text.lines} as="h2" class="display" />
		<Lines lines={[text.lede]} as="p" class="lede" />
	</div>

	<div class="stage" {@attach collage()} data-reveal>
		{#each items as item (item.photo)}
			<figure
				class="item -{item.size}"
				data-speed={item.speed}
				style:--x="{item.x}%"
				style:--y="{item.y}%"
				style:aspect-ratio={item.photo === 'work7' ? '1 / 1' : '3 / 4'}
			>
				<enhanced:img
					class="image"
					src={photos[item.photo]}
					alt={item.alt}
					sizes="(max-width: 700px) 56vw, 30vw"
					loading="lazy"
				/>
			</figure>
		{/each}
	</div>
</section>

<style>
	.work .head {
		margin-bottom: var(--space-6);
	}
	/* the stage runs edge to edge, so the images cross the frame on both sides */
	.stage {
		position: relative;
		height: 180svh;
		overflow-x: clip;
	}
	.item {
		position: absolute;
		left: min(var(--x), calc(100% - var(--w)));
		top: var(--y);
		width: var(--w);
		margin: 0;
		z-index: 1;
	}
	.item.-big {
		--w: 30%;
		z-index: 1;
	}
	.item.-normal {
		--w: 22%;
		z-index: 2;
	}
	.item.-small {
		--w: 15%;
		z-index: 3;
	}
	.item :global(picture) {
		display: contents;
	}
	.item :global(.image) {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		pointer-events: none;
		transform: translate(0, 0) scale(1);
		transition:
			opacity 1s ease,
			transform 1s ease;
	}
	/* the library's four diagonals, by position in the stage */
	.item:nth-child(4n) :global(.image) {
		transform: translate(-30vh, -30vh) scale(0.8);
		transition-delay: 0s;
	}
	.item:nth-child(4n-1) :global(.image) {
		transform: translate(30vh, 30vh) scale(0.8);
		transition-delay: 0.05s;
	}
	.item:nth-child(4n-2) :global(.image) {
		transform: translate(-30vh, 30vh) scale(0.8);
		transition-delay: 0.1s;
	}
	.item:nth-child(4n-3) :global(.image) {
		transform: translate(-30vh, -30vh) scale(0.8);
		transition-delay: 0.15s;
	}
	.item :global(.image.-active) {
		transform: translate(0, 0) scale(1);
		opacity: 0.8;
		pointer-events: auto;
	}
	.item :global(.image.-active:hover) {
		opacity: 1;
	}
	@media (max-width: 700px) {
		.stage {
			height: 170svh;
		}
		.item.-big {
			--w: 56%;
		}
		.item.-normal {
			--w: 42%;
		}
		.item.-small {
			--w: 30%;
		}
		.item:nth-child(4n) :global(.image),
		.item:nth-child(4n-3) :global(.image) {
			transform: translate(-15vh, -15vh) scale(0.8);
		}
		.item:nth-child(4n-1) :global(.image) {
			transform: translate(15vh, 15vh) scale(0.8);
		}
		.item:nth-child(4n-2) :global(.image) {
			transform: translate(-15vh, 15vh) scale(0.8);
		}
		.item :global(.image.-active) {
			transform: translate(0, 0) scale(1);
		}
	}
	/* reduced motion: a still collage, in place */
	.stage.reduced :global(.image) {
		opacity: 0.9;
		transform: none;
		transition: none;
		pointer-events: auto;
	}
</style>
