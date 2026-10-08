<script lang="ts">
	import { euro, type PriceGroup, type Studio, type UI } from '$lib/data/studio';
	import { demo } from '$lib/state/demo.svelte';
	import Button from './Button.svelte';
	import Lines from './Lines.svelte';
	import Mask from './Mask.svelte';

	/**
	 * The price list as text: six groups in two columns, each a serif heading, its line and
	 * hairline rows with the name left and the price right in tabular figures. The one thing
	 * their site has as a JPG, readable.
	 */
	type Props = { studio: Studio; groups: PriceGroup[]; text: UI['prices'] };
	let { studio, groups, text }: Props = $props();
</script>

<section class="prices frame section" id="prijslijst">
	<div class="head">
		<Lines lines={[text.label]} as="p" class="label" />
		<Lines lines={text.lines} as="h2" class="display" />
		<Lines lines={[text.lede]} as="p" class="lede" />
	</div>

	<div class="groups">
		{#each groups as group (group.id)}
			<div class="group">
				<div class="group-head">
					<Lines lines={[group.title]} as="h3" />
					<Lines lines={[group.line]} as="p" class="small" />
				</div>
				<ul class="rows">
					{#each group.rows as row (row.name)}
						<Mask as="li" class="row">
							<span class="name">{row.name}</span>
							<span class="price numeric">
								{#if row.from}<span class="from">vanaf</span>{/if}
								{euro(row.amount)}{#if row.period}<span class="from"> {row.period}</span>{/if}
							</span>
						</Mask>
					{/each}
				</ul>
				{#if group.note}
					<Lines lines={[group.note]} as="p" class="small note" />
				{/if}
			</div>
		{/each}
	</div>

	<div class="foot">
		<Lines lines={[text.foot]} as="p" class="small" />
		<Mask>
			<Button href={studio.booking} onclick={demo.book} external>{text.book}</Button>
		</Mask>
	</div>
</section>

<style>
	.groups {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: var(--space-7);
		row-gap: var(--space-7);
	}
	.group {
		display: grid;
		gap: var(--space-4);
		align-content: start;
	}
	.group-head {
		display: grid;
		gap: var(--space-2);
	}
	.prices :global(.row .line > span) {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: var(--space-5);
		min-height: 3.25rem;
		padding-block: var(--space-3);
	}
	.name {
		flex: 1 1 auto;
	}
	.price {
		flex: none;
		white-space: nowrap;
	}
	.from {
		font-size: var(--text-small);
		color: var(--muted);
	}
	.prices :global(.note) {
		margin-top: var(--space-2);
	}
	.foot {
		display: grid;
		justify-items: start;
		gap: var(--space-5);
		margin-top: var(--space-7);
		max-width: 40rem;
	}
	@media (max-width: 900px) {
		.groups {
			grid-template-columns: 1fr;
		}
	}
</style>
