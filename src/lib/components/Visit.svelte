<script lang="ts">
	import type { Studio, UI } from '$lib/data/studio';
	import { demo } from '$lib/state/demo.svelte';
	import Button from './Button.svelte';
	import Lines from './Lines.svelte';
	import Mask from './Mask.svelte';

	/**
	 * Where and how: a 5/7 split, the header on the key line, the facts as hairline rows beside
	 * it. Appointments go through the agenda or the phone, as their site says; the mail is for
	 * questions. Every outward link opens the demo dialog first.
	 */
	type Props = { studio: Studio; text: UI['visit'] };
	let { studio, text }: Props = $props();
</script>

<section class="visit frame section" id="contact">
	<div class="head">
		<Lines lines={[text.label]} as="p" class="label" />
		<Lines lines={text.lines} as="h2" class="display" />
		<Lines lines={[text.lede]} as="p" class="lede" />
	</div>

	<div class="facts">
		<dl class="rows">
			<Mask class="fact">
				<dt class="label">{text.address}</dt>
				<dd>
					<address>
						{studio.fullName}<br />
						{studio.address.street}<br />
						{studio.address.postalCode}
						{studio.address.city}
					</address>
					<a
						class="link ul"
						href={studio.address.maps}
						onclick={demo.open}
						target="_blank"
						rel="noopener">{text.route}</a
					>
				</dd>
			</Mask>
			<Mask class="fact">
				<dt class="label">{text.phone}</dt>
				<dd>
					<a class="link tap numeric" href={studio.phone.href} onclick={demo.open}
						>{studio.phone.display}</a
					>
				</dd>
			</Mask>
			<Mask class="fact">
				<dt class="label">{text.mail}</dt>
				<dd>
					<a class="link tap" href="mailto:{studio.email}" onclick={demo.open}>{studio.email}</a>
				</dd>
			</Mask>
			<Mask class="fact">
				<dt class="label">{text.socials}</dt>
				<dd class="socials">
					{#each studio.socials as social (social.name)}
						<a
							class="link tap"
							href={social.href}
							onclick={demo.open}
							target="_blank"
							rel="noopener">{social.name}</a
						>
					{/each}
				</dd>
			</Mask>
		</dl>
		<Mask>
			<Button href={studio.booking} onclick={demo.book} external>{text.book}</Button>
		</Mask>
	</div>
</section>

<style>
	.visit {
		display: grid;
		grid-template-columns: 5fr 7fr;
		column-gap: var(--space-7);
		align-items: start;
	}
	.visit :global(.head) {
		margin-bottom: 0;
	}
	.facts {
		display: grid;
		justify-items: start;
		gap: var(--space-6);
		/* starts on the heading's line, not the label's */
		padding-top: var(--space-6);
	}
	.facts dl {
		justify-self: stretch;
		max-width: 36em;
	}
	.visit :global(.fact .line > span) {
		display: grid;
		grid-template-columns: 8rem 1fr;
		gap: var(--space-4);
		padding-block: var(--space-5);
	}
	dd {
		display: grid;
		justify-items: start;
		gap: var(--space-2);
	}
	dd .link {
		color: var(--cream);
	}
	dd .link:hover {
		color: var(--gold);
	}
	.socials {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-5);
	}
	@media (max-width: 900px) {
		.visit {
			grid-template-columns: 1fr;
			row-gap: var(--space-5);
		}
		.facts {
			padding-top: 0;
		}
		.visit :global(.fact .line > span) {
			grid-template-columns: 1fr;
			gap: var(--space-2);
		}
	}
</style>
