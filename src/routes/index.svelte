<script lang="ts" context="module">
	import type { LoadInput } from '@sveltejs/kit/types/internal';

	const API_KEY = import.meta.env.VITE_API_KEY;
	export async function load({ fetch }: LoadInput) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
		);
		const data = await res.json();
		if (res.ok) {
			return {
				props: {
					popular: data.results
				}
			};
		}
	}
</script>

<script lang="ts">
	import MovieCards from '$lib/components/MovieCards.svelte';
	import type { MovieDef } from '$lib/types';
	export let popular: MovieDef[];
</script>

<h1 class="text-2xl my-10">Popular Movies</h1>
<MovieCards {popular} />
