<script lang="ts">
	import { slideUp } from '$lib/motion/attachments';

	/**
	 * Text that slides up (11b): every line in its own mask. A `*word*` in a line is set in
	 * italic (the display device: one italic word per line). `as` picks the element; one line
	 * with `block` makes a whole paragraph or button row one mask.
	 */
	type Props = {
		lines: string[];
		as?: 'h1' | 'h2' | 'h3' | 'p' | 'div' | 'span';
		class?: string;
		id?: string;
	};
	let { lines, as = 'p', class: className = '', id }: Props = $props();

	type Part = { text: string; em: boolean };
	const parts = (line: string): Part[] =>
		line
			.split(/(\*[^*]+\*)/)
			.filter(Boolean)
			.map((piece) =>
				piece.startsWith('*') && piece.endsWith('*')
					? { text: piece.slice(1, -1), em: true }
					: { text: piece, em: false }
			);
</script>

<svelte:element this={as} {id} class={className} data-reveal {@attach slideUp()}>
	{#each lines as line, i (i)}
		<span class="line"
			><span
				>{#each parts(line) as part, j (j)}{#if part.em}<em>{part.text}</em
						>{:else}{part.text}{/if}{/each}</span
			></span
		>
	{/each}
</svelte:element>
