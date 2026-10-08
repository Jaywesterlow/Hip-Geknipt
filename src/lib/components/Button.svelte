<script lang="ts">
	import type { Snippet } from 'svelte';

	/**
	 * The page's button: a square block (radius 0) in Jost. Three tiers: `gold` filled (the
	 * transaction), `outline` with a gold hairline, `dark` filled with the ground (on the gold
	 * band). Hover is colour only: the filled button swaps gold for cream, the outlined one
	 * brightens its text, 150 ms.
	 */
	type Props = {
		href: string;
		variant?: 'gold' | 'outline' | 'dark';
		size?: 'md' | 'sm';
		external?: boolean;
		onclick?: (event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) => void;
		children: Snippet;
	};
	let {
		href,
		variant = 'gold',
		size = 'md',
		external = false,
		onclick,
		children
	}: Props = $props();
</script>

<a
	class="button {variant} {size}"
	{href}
	{onclick}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener' : undefined}
>
	{@render children()}
</a>

<style>
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 3rem;
		padding-inline: var(--space-5);
		font-family: var(--font-body);
		font-size: var(--text-small);
		font-weight: 500;
		line-height: 1;
		white-space: nowrap;
		border: 1px solid transparent;
		transition:
			background-color var(--state),
			border-color var(--state),
			color var(--state);
	}
	.sm {
		min-height: 2.25rem;
		padding-inline: var(--space-4);
	}
	.gold {
		background: var(--gold);
		border-color: var(--gold);
		color: var(--ink);
	}
	.gold:hover,
	.gold:focus-visible {
		background: var(--cream);
		border-color: var(--cream);
	}
	.outline {
		border-color: var(--gold);
		color: var(--cream);
	}
	.outline:hover,
	.outline:focus-visible {
		border-color: var(--cream);
	}
	.dark {
		background: var(--ink);
		border-color: var(--ink);
		color: var(--cream);
	}
	.dark:hover,
	.dark:focus-visible {
		color: var(--gold);
	}
</style>
