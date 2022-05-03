<script lang="ts">
	import { fetchPopular } from '$lib/stores/movieStore';
	import Movie from './Movie.svelte';

	let currentItems = 5;
</script>

{#await fetchPopular()}
	<div
		class="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 md:gap-8 md:p-4 lg:grid-cols-4 xl:grid-cols-5"
	>
		{#each Array(5) as c}
			<div class="animate-pulse rounded-box min-h-[350px] w-[270px] max-w-full bg-base-300 " />
		{/each}
	</div>
{:then popular}
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
				class="inline-block px-12 py-3 text-sm font-medium border border-primary rounded active:text-secondary hover:bg-primary hover:text-base-content focus:outline-none focus:ring"
				>load more</button
			>
		{/if}
	</div>
{/await}
