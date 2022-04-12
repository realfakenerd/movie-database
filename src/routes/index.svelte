<script lang="ts" context="module">
	import type { LoadInput } from '@sveltejs/kit/types/internal';

	const API_KEY = import.meta.env.VITE_API_KEY;
	const indexUrl = 'https://api.themoviedb.org/3';
	export async function load({ fetch }: LoadInput): Promise<LoadOutput> {
		const res = await fetch(`${indexUrl}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
		const resUpcoming = await fetch(
			`${indexUrl}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
		);
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
	import MovieCards from '$lib/components/MoviePage/MovieCards.svelte';
	import UpcomingMovies from '$lib/components/UpcomingMovies.svelte';
	import type { MovieDef, UpcomingData } from '$lib/types';
	import { onMount } from 'svelte';
	import type { LoadOutput } from '@sveltejs/kit/types/internal';

	export let popular: MovieDef[];
	export let upcomingData: UpcomingData;

	onMount(() => {
		document.title = 'Pop Korn';
	});
</script>

<UpcomingMovies {upcomingData} />

<div class="divider pt-5 pb-5">
	<h1 class="text-2xl">See what's popular</h1>
</div>
<MovieCards {popular} />
