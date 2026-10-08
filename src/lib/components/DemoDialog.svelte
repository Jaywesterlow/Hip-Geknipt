<script lang="ts">
	import type { UI } from '$lib/data/studio';
	import { demo } from '$lib/state/demo.svelte';
	import Button from './Button.svelte';

	/**
	 * Every booking button and every link that leaves the page opens this, at once: the demo takes
	 * no real bookings and links nowhere by accident. A panel in the middle of the screen with a
	 * gold hairline, one title, one line and two actions; the first action is the link itself.
	 */
	type Props = { text: UI['demo'] };
	let { text }: Props = $props();
</script>

<dialog
	class="dialog"
	aria-labelledby="demo-dialog-title"
	{@attach demo.dialog}
	onclose={demo.closed}
	onclick={demo.backdrop}
>
	<div class="panel">
		<h2 id="demo-dialog-title">{text.title}</h2>
		<p class="small">{demo.kind === 'book' ? text.book : text.link}</p>
		<div class="actions">
			{#if demo.href}
				<Button href={demo.href} external>
					{demo.kind === 'book' ? text.toAgenda : text.follow}
				</Button>
			{/if}
			<button type="button" class="close link tap" onclick={demo.close}>{text.close}</button>
		</div>
	</div>
</dialog>

<style>
	.dialog {
		width: min(30rem, calc(100% - 2 * var(--gutter)));
		max-width: none;
		margin: auto;
		padding: 0;
		border: 1px solid var(--gold);
		background: var(--panel);
		color: var(--cream);
	}
	.dialog::backdrop {
		background: rgb(27 21 17 / 0.7);
	}
	/* no scrolling behind the dialog, also when Lenis is off (reduced motion) */
	:global(html:has(dialog[open])) {
		overflow: hidden;
	}
	.panel {
		display: grid;
		gap: var(--space-4);
		padding: var(--space-6);
	}
	h2 {
		font-family: var(--font-display);
		font-weight: 500;
		font-size: var(--text-h3);
		line-height: 1.15;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-5);
		margin-top: var(--space-2);
	}
	.close {
		background: none;
		border: 0;
		padding: 0;
		font: inherit;
		font-size: var(--text-small);
		cursor: pointer;
	}
</style>
