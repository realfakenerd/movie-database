<script lang="ts" context="module">
	import type { LoadInput } from '@sveltejs/kit/types/internal';
	const API_KEY = 'f295bce4fa72bbbd435ff8c2ef63d56d';

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
	import Movie from '$lib/components/Movie.svelte';
	import type { MovieDef } from '$lib/types';

	export let searchedMovies: MovieDef[];
</script>

<div class="grid grid-cols-5 gap-8">
	{#each searchedMovies as movie (movie.id)}
		<Movie {movie} />
	{/each}
</div>
