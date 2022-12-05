<script lang="ts">
	import Movie from '$lib/components/cards/Movie.svelte';
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import IndexHero from '../lib/components/IndexHero.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const { upcoming, popular, config } = data;

	let currentItems = 5;
</script>

<svelte:head>
	<title>Pop Korn</title>
</svelte:head>

<IndexHero />
<section id="mainContainer" class="mt-16 px-10 min-h-screen scroll-mt-16 text-center">
	<div class="divider">
		<div class="text-2xl">See what's upcoming</div>
	</div>
	<section class="carousel carousel-center p-4 space-x-4 bg-base-300 rounded-box">
		{#each upcoming.results as movie (movie.id)}
			<div class="carousel-item">
				<Movie images={config.images} {movie} />
			</div>
		{/each}
	</section>

	<section>
		<div class="divider">
			<h1 class="text-2xl">See what's popular</h1>
		</div>

		<section
			class="grid grid-cols-1 place-items-center gap-6 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5"
		>
			{#each popular.results.slice(0, currentItems) as movie, index (movie.id)}
				<div in:fly={{ delay: 150 * index, y: 50, easing: backOut }}>
					<Movie images={config.images} {movie} />
				</div>
			{/each}
		</section>
		<div class="divider py-10">
			{#if currentItems < popular.results.length}
				<button on:click={() => (currentItems += 5)} class="btn btn-primary"> load more </button>
			{/if}
		</div>
	</section>
</section>
