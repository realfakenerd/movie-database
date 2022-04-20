<script lang="ts" context="module">
	import type { LoadInput } from '@sveltejs/kit/types/internal';
	const API_KEY = import.meta.env.VITE_API_KEY;

	export async function load({ fetch, params }: LoadInput) {
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${params.id}&page=1&include_adult=false`
		);
		const data = await res.json();
		if (res.ok) {
			return {
				props: {
					searchedMovies: data.results
				}
			};
		}
	}
</script>

<script lang="ts">
	import Movie from '$lib/components/MoviePage/Movie.svelte';
	import type { MovieDef } from '$lib/types';
	import { onMount } from 'svelte';

	export let searchedMovies: MovieDef[];

	onMount(() => {
		document.title = 'Pop Korn';
	});
</script>

<section class="px-10 py-20">
	<div
		class="grid grid-cols-1 place-items-center gap-4 md:grid-cols-3 md:gap-8 md:p-4 lg:grid-cols-4"
	>
		{#each searchedMovies as movie (movie.id)}
			<Movie {movie} />
		{/each}
	</div>
</section>
