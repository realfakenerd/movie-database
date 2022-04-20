<script lang="ts">
	import IndexHero from '../lib/components/IndexHero.svelte';
	import { popular, upcoming } from '$lib/stores/popularStore';
	import MovieCards from '$lib/components/MoviePage/MovieCards.svelte';
	import UpcomingMovies from '$lib/components/UpcomingMovies.svelte';
	import { onMount } from 'svelte';
	import { animate } from 'motion';

	onMount(() => {
		animate('.hero', { opacity: [0, 1] }, { duration: 1, delay: 0.5 });
		animate('.hero-overlay', { opacity: [0, 1] }, { duration: 1, delay: 0.9 });
		document.title = 'Pop Korn';
	});
</script>

<IndexHero />
<section id="mainContainer" class="mt-16 grid min-h-screen scroll-mt-16 place-items-center">
	{#await $upcoming}
		<div>loading data</div>
	{:then up}
		<UpcomingMovies upcomingData={up} />
	{/await}
	<div class="divider pt-5 pb-5">
		<h1 class="text-2xl">See what's popular</h1>
	</div>
	{#await $popular}
		<div>loading data</div>
	{:then pop}
		<MovieCards popular={pop} />
	{/await}
</section>
