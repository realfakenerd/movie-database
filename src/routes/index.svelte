<script lang="ts" context="module">
	import type { LoadInput } from '@sveltejs/kit/types/internal';

	const API_KEY = import.meta.env.VITE_API_KEY;
	const indexUrl = 'https://api.themoviedb.org/3/movie/';
	export async function load({ fetch }: LoadInput) {
		const res = await fetch(`${indexUrl}popular?api_key=${API_KEY}&language=en-US&page=1`);
		const resUpcoming = await fetch(`${indexUrl}upcoming?api_key=${API_KEY}&language=en-US&page=1`);
		const data = await res.json();
		const upcomingData = await resUpcoming.json();
		if (res.ok) {
			return {
				props: {
					popular: data.results,
					upcomingData
				}
			};
		}
	}
</script>

<script lang="ts">
	import MovieCards from '$lib/components/MovieCards.svelte';
	import UpcomingMovies from '$lib/components/UpcomingMovies.svelte';
	import type { MovieDef, UpcomingData } from '$lib/types';
	import { onMount } from 'svelte';
	export let popular: MovieDef[];
	export let upcomingData: UpcomingData;

	onMount(() => {
		document.title = 'Pop Korn';
	});
</script>

<UpcomingMovies {upcomingData} />

<div class="divider pt-10 pb-5">
	<h1 class="text-2xl">Popular Movies</h1>
</div>
<MovieCards {popular} />
