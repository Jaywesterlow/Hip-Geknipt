<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import type { Studio, UI } from '$lib/data/studio';
	import { demo } from '$lib/state/demo.svelte';

	/**
	 * The dark again under the gold band, one hairline above the credit: the logo and the tagline,
	 * the address, the links. Every outward link opens the demo dialog first.
	 */
	type Props = { studio: Studio; text: UI['footer'] };
	let { studio, text }: Props = $props();
</script>

<footer class="footer frame section">
	<div class="grid">
		<div class="brand">
			<img src={logo} alt={studio.name} width="414" height="159" />
			<p class="small">{text.tagline}</p>
		</div>
		<address class="small">
			{studio.address.street}<br />
			{studio.address.postalCode}
			{studio.address.city}<br />
			<a class="link numeric" href={studio.phone.href} onclick={demo.open}>{studio.phone.display}</a
			><br />
			<a class="link" href="mailto:{studio.email}" onclick={demo.open}>{studio.email}</a>
		</address>
		<ul class="links small">
			<li>
				<a class="link tap" href={studio.booking} onclick={demo.book} target="_blank" rel="noopener"
					>{text.book}</a
				>
			</li>
			{#each studio.socials as social (social.name)}
				<li>
					<a class="link tap" href={social.href} onclick={demo.open} target="_blank" rel="noopener"
						>{social.name}</a
					>
				</li>
			{/each}
			<li><a class="link tap" href="#top">{text.top}</a></li>
		</ul>
	</div>
	<p class="credit small">{text.credit}</p>
</footer>

<style>
	.footer {
		display: grid;
		gap: var(--space-7);
	}
	/* the first column is the page's 5 columns (480 at 1440), so the address starts on the same
	   line as the hero photo and the facts; the rest splits in two */
	.grid {
		display: grid;
		grid-template-columns: 20fr 13fr 13fr;
		column-gap: var(--space-7);
		row-gap: var(--space-6);
		align-items: start;
	}
	.brand {
		display: grid;
		justify-items: start;
		gap: var(--space-4);
	}
	.brand img {
		height: 3rem;
		width: auto;
	}
	address {
		line-height: 1.7;
	}
	.links {
		display: grid;
		gap: var(--space-1);
	}
	.credit {
		padding-top: var(--space-5);
		border-top: 1px solid var(--line);
	}
	@media (max-width: 900px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
