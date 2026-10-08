<script lang="ts">
	import { fade } from 'svelte/transition';
	import logo from '$lib/assets/logo.png';
	import type { NavLink, Studio, UI } from '$lib/data/studio';
	import { demo } from '$lib/state/demo.svelte';
	import Button from './Button.svelte';

	/**
	 * A two-zone bar on the one margin: the logo left, five links, the phone and the one filled
	 * button right. Always on its surface, one hairline under it. On a phone: logo and "Menu"; the
	 * links drop down under the bar as a sheet on the same margin.
	 */
	type Props = { studio: Studio; links: NavLink[]; text: UI['nav'] };
	let { studio, links, text }: Props = $props();

	let menuOpen = $state(false);
	const close = () => (menuOpen = false);
</script>

<nav class="nav frame" aria-label="Hoofdmenu">
	<a class="home" href="#top" onclick={close} aria-label={studio.name}>
		<img src={logo} alt="" width="414" height="159" />
	</a>

	<ul class="links">
		{#each links as link (link.href)}
			<li><a class="link tap" href={link.href}>{link.label}</a></li>
		{/each}
	</ul>

	<div class="right">
		<a class="link tap phone numeric" href={studio.phone.href} onclick={demo.open}>{text.phone}</a>
		<div class="book">
			<Button href={studio.booking} onclick={demo.book} size="sm" external>{text.book}</Button>
		</div>
		<button
			class="menu-button link tap"
			aria-expanded={menuOpen}
			aria-controls="menu"
			onclick={() => (menuOpen = !menuOpen)}
		>
			{menuOpen ? text.close : text.menu}
		</button>
	</div>
</nav>

{#if menuOpen}
	<div class="menu frame" id="menu" transition:fade={{ duration: 200 }}>
		<ul class="rows">
			{#each links as link (link.href)}
				<li><a class="row" href={link.href} onclick={close}>{link.label}</a></li>
			{/each}
			<li><a class="row" href={studio.phone.href} onclick={demo.open}>{text.phone}</a></li>
		</ul>
		<div class="menu-book">
			<Button
				href={studio.booking}
				external
				onclick={(event) => {
					close();
					demo.book(event);
				}}
			>
				{text.book}
			</Button>
		</div>
	</div>
{/if}

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 20;
		display: flex;
		align-items: center;
		gap: var(--space-6);
		height: var(--nav-h);
		background: var(--ground);
		border-bottom: 1px solid var(--line);
	}
	.home {
		display: block;
		flex: none;
	}
	.home img {
		height: 2.125rem;
		width: auto;
	}
	.links {
		display: flex;
		gap: var(--space-6);
		margin-left: var(--space-2);
	}
	.links .link {
		font-size: var(--text-small);
	}
	.right {
		display: flex;
		align-items: center;
		gap: var(--space-5);
		margin-left: auto;
	}
	.phone {
		font-size: var(--text-small);
	}
	.menu-button {
		display: none;
		background: none;
		border: 0;
		padding: 0;
		font: inherit;
		font-size: var(--text-small);
		cursor: pointer;
	}
	.menu {
		position: fixed;
		top: var(--nav-h);
		left: 0;
		right: 0;
		z-index: 19;
		padding-block: var(--space-4) var(--space-6);
		background: var(--panel);
		border-bottom: 1px solid var(--line);
	}
	.row {
		display: flex;
		align-items: center;
		min-height: 3.5rem;
		font-size: var(--text-body);
		color: var(--cream);
	}
	.menu-book {
		display: grid;
		margin-top: var(--space-5);
	}
	@media (max-width: 900px) {
		.links,
		.phone,
		.book {
			display: none;
		}
		.menu-button {
			display: inline-flex;
		}
		.home img {
			height: 1.75rem;
		}
	}
	@media (min-width: 901px) {
		.menu {
			display: none;
		}
	}
</style>
