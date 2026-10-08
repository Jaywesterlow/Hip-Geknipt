<script lang="ts">
	import { photos } from '$lib/assets/photos';
	import type { TeamMember, UI } from '$lib/data/studio';
	import Lines from './Lines.svelte';
	import Photo from './Photo.svelte';

	/**
	 * The four stylists as 3:4 portrait cards in one row (the sector's experts device): the photo
	 * wipes open, the name and the role slide up under it. No frame around the card.
	 */
	type Props = { members: TeamMember[]; text: UI['team'] };
	let { members, text }: Props = $props();
</script>

<section class="team frame section" id="team">
	<div class="head">
		<Lines lines={[text.label]} as="p" class="label" />
		<Lines lines={text.lines} as="h2" class="display" />
		<Lines lines={[text.lede]} as="p" class="lede" />
	</div>

	<ul class="cards">
		{#each members as member (member.name)}
			<li class="card">
				<Photo
					src={photos[member.photo]}
					alt={member.alt}
					sizes="(max-width: 900px) 50vw, 25vw"
					ratio="3 / 4"
					position="50% 20%"
				/>
				<div class="words">
					<Lines lines={[member.name]} as="h3" />
					<Lines lines={[member.role]} as="p" class="small" />
					<Lines lines={[member.hours]} as="p" class="small" />
				</div>
			</li>
		{/each}
	</ul>
</section>

<style>
	.cards {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-5);
	}
	.card {
		display: grid;
		gap: var(--space-4);
		align-content: start;
	}
	.words {
		display: grid;
		gap: var(--space-1);
	}
	.words :global(h3) {
		margin-bottom: var(--space-1);
	}
	@media (max-width: 900px) {
		.cards {
			grid-template-columns: 1fr 1fr;
			gap: var(--space-4);
		}
	}
</style>
