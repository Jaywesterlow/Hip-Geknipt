<script lang="ts">
	import type { Snippet } from 'svelte';
	import { slideUp } from '$lib/motion/attachments';

	/**
	 * Anything that is not plain text and still slides up (11b): a row of buttons, a price row,
	 * a quote. One mask around the whole block.
	 */
	type Props = { as?: 'div' | 'li' | 'span'; class?: string; children: Snippet };
	let { as = 'div', class: className = '', children }: Props = $props();
</script>

<svelte:element this={as} class={className} data-reveal {@attach slideUp()}>
	<span class="line"><span>{@render children()}</span></span>
</svelte:element>
