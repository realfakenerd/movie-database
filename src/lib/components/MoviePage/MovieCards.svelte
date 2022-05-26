<script lang="ts">
	import Movie from './Movie.svelte';

	export let popular;

	let currentItems = 5;
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
		<button
			on:click={() => (currentItems += 5)}
			class="inline-block rounded border border-primary px-12 py-3 text-sm font-medium hover:bg-primary hover:text-base-content focus:outline-none focus:ring active:text-secondary"
			>load more</button
		>
	{/if}
</div>
