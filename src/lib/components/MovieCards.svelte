<script>
	import Movie from './Movie.svelte';

	export let popular;
</script>

<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
	{#each popular as movie (movie.id)}
		<Movie {movie} />
	{/each}
</section>
