<script context="module" lang="ts">
	import type { LoadInput } from '@sveltejs/kit';
	export async function load({ fetch }: LoadInput) {
		try {
			const popRes = await fetch('/api/movies/popular');
			const upcomingRes = await fetch('/api/movies/upcoming');
			const upcomingData = await upcomingRes.json();
			const popData = await popRes.json();
			if (popRes.ok) {
				return {
					props: {
						popular: popData.result,
						upcoming: upcomingData.result
					}
				};
			}
		} catch (error) {
			throw new Error(error);
		}
	}
</script>

<script lang="ts">
	import IndexHero from '../lib/components/IndexHero.svelte';
	import MovieCards from '$lib/components/MoviePage/MovieCards.svelte';
	import UpcomingMovies from '$lib/components/UpcomingMovies.svelte';
	import { onMount } from 'svelte';
	import { animate } from 'motion';
	import type { PopularMovies } from '$lib/types';
	export let popular: PopularMovies[];
	export let upcoming;

	onMount(() => {
		animate('.hero', { opacity: [0, 1] }, { duration: 1, delay: 0.5 });
		animate('.hero-overlay', { opacity: [0, 1] }, { duration: 1, delay: 0.9 });
		document.title = 'Pop Korn';
	});
</script>

<IndexHero />
<section id="mainContainer" class="mt-16 grid min-h-screen scroll-mt-16 place-items-center">
	<div class="divider py-5">
		<div class="text-2xl">See what's new</div>
	</div>
	<UpcomingMovies upcomingData={upcoming} />

	<section>
		<div class="divider py-5">
			<h1 class="text-2xl">See what's popular</h1>
		</div>
		<MovieCards {popular} />
	</section>
</section>
