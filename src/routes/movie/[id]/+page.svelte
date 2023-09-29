<script lang="ts">
	import AwaitCarousel from '$lib/components/AwaitCarousel.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import MovieOverview from '$lib/components/MovieOverview.svelte';
	import Poster from '$lib/components/Poster.svelte';
	import Card from '$lib/components/cards/Card.svelte';
	import PersonCard from '$lib/components/cards/PersonCard.svelte';
	import { getImagePath } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
	const { movie, streamed, config } = data;
</script>

<svelte:head>
	<title>Popkorn - {movie.title}</title>
</svelte:head>

<Hero imgPath={movie.backdrop_path} {config}>
	<Poster poster_path={movie.poster_path} {config} networks={streamed.providers} />
	<MovieOverview src={movie} />
</Hero>
<section>
	<AwaitCarousel arrayData={streamed.credits} let:data>
		{#each data.cast as cast (cast.id)}
			<PersonCard {config} {cast} />
		{/each}
	</AwaitCarousel>
</section>

<AwaitCarousel arrayData={streamed.images} let:data>
	{#each data.backdrops as backdrops}
		<li class="flex snap-start flex-col items-center rounded-xl interactive-bg-background">
			<figure>
				<img
					loading="lazy"
					class="rounded-lg bg-on-surface-variant max-w-lg"
					src={getImagePath('backdrop_sizes', 2, backdrops.file_path, config)}
					alt={backdrops.file_path}
				/>
			</figure>
		</li>
	{/each}
</AwaitCarousel>
