<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import { revealImage } from '$lib/motion/attachments';

	/**
	 * One photo in a frame with a fixed ratio, wiped open from the bottom (12) when it enters.
	 * `sizes` tells the browser how wide the frame renders, so it picks the right srcset entry.
	 */
	type Props = {
		src: Picture;
		alt: string;
		sizes: string;
		ratio?: string;
		position?: string;
		loading?: 'lazy' | 'eager';
		class?: string;
	};
	let {
		src,
		alt,
		sizes,
		ratio = '3 / 4',
		position = '50% 50%',
		loading = 'lazy',
		class: className = ''
	}: Props = $props();
</script>

<div
	class="photo {className}"
	style:aspect-ratio={ratio}
	style:--position={position}
	data-reveal
	{@attach revealImage()}
>
	<enhanced:img {src} {alt} {sizes} {loading} />
</div>

<style>
	.photo {
		position: relative;
		overflow: hidden;
		background: var(--panel);
	}
	.photo :global(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: var(--position);
		transform-origin: 50% 50%;
	}
</style>
