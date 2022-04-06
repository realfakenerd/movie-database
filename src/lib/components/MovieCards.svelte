<script lang="ts">
	import type { MovieDef } from '$lib/types';

	import Movie from './Movie.svelte';

	export let popular: MovieDef[];

	let currentItems = 5;
</script>

<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
	{#each popular.slice(0, currentItems) as movie (movie.id)}
		<Movie {movie} />
	{/each}
</section>
<div class="divider py-10">
	{#if currentItems < popular.length}
		<button on:click={() => (currentItems += 5)} class="btn btn-secondary">load more</button>
	{/if}
</div>
