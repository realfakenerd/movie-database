<script lang="ts">
	import type { PopularMovies } from '$lib/types';
	import { animate, stagger } from 'motion';
	import { onMount } from 'svelte';
	import Movie from './Movie.svelte';

	export let popular: PopularMovies[];
	let currentItems = 5;

	onMount(() => {
		animate(
			'.card',
			{
				opacity: [0, 1],
				y: [20, 0]
			},
			{
				duration: 1,
				delay: stagger(0.15, { easing: 'ease-out' }) as unknown as number
			}
		);
	});
</script>

<section
	class="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 md:gap-8 md:p-4 lg:grid-cols-4 xl:grid-cols-5"
>
	{#each popular.slice(0, currentItems) as movie (movie.id)}
		<Movie {movie} />
	{/each}
</section>
<div class="divider py-10">
	{#if currentItems < popular.length}
		<button on:click={() => (currentItems += 5)} class="btn btn-secondary">load more</button>
	{/if}
</div>
