<script context="module" lang="ts">
	throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

	// import type { LoadInput } from '@sveltejs/kit';
	// export async function load({ fetch }: LoadInput) {
	// 	try {
	// 		const popRes = await fetch('/api/movies/popular');
	// 		const upcomingRes = await fetch('/api/movies/upcoming');
	// 		const upcomingData = await upcomingRes.json();
	// 		const popData = await popRes.json();
	// 		if (upcomingRes.ok) {
	// 			return {
	// 				props: {
	// 					popular: popData,
	// 					upcoming: upcomingData
	// 				}
	// 			};
	// 		}
	// 	} catch (error) {
	// 		throw new Error(error);
	// 	}
	// }
</script>

<script lang="ts">
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import IndexHero from '../lib/components/IndexHero.svelte';
	import MovieCards from '$lib/components/MoviePage/MovieCards.svelte';
	import UpcomingMovies from '$lib/components/UpcomingMovies.svelte';
	export let popular;
	export let upcoming;
</script>

<svelte:head>
	<title>Pop Korn</title>
</svelte:head>

<IndexHero />
<section id="mainContainer" class="mt-16 min-h-screen scroll-mt-16 text-center">
	<div class="divider">
		<div class="text-2xl">See what's new</div>
	</div>
	<UpcomingMovies upcomingData={upcoming.splice(0, 7)} />

	<section>
		<div class="divider">
			<h1 class="text-2xl">See what's popular</h1>
		</div>
		<MovieCards {popular} />
	</section>
</section>
