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
	import {animate} from 'motion';
	import type { LoadOutput } from '@sveltejs/kit/types/internal';

	export let popular: MovieDef[];
	export let upcomingData: UpcomingData;

	onMount(() => {
		animate('.hero',{opacity: [0,1]}, {duration: 1, delay: .5})
		animate('.hero-overlay',{opacity: [0,1]}, {duration: 1, delay: .9})
		document.title = 'Pop Korn';
	});
</script>

<svelte:head>
	<link
		rel="preload"
		href="https://image.tmdb.org/t/p/original/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg"
		as="image"
	/>
</svelte:head>

<div
	class="hero min-h-screen"
	style="position:relative; background-image: url(https://image.tmdb.org/t/p/original/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg);"
>
	<div class="hero-overlay bg-gradient-to-b from-transparent via-base-100/60 to-base-300" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<div class="inline-flex space-x-5 items-end">
				<a sveltekit:prefetch href="/">
					<img src="popcorn512.png" width="64" height="64" class="w-16" alt="Pop Korn Logo" />
				</a>
				<h2 class="text-5xl font-bold uppercase">Pop Korn</h2>
			</div>
			<div class="divider"></div>
			<h3 class="text-2xl">
				Watch, review, see what's new, repeat.
			</h3>
			<a style="position:absolute;bottom:6.5rem;right: 50%; transform:translateX(50%)" class="btn btn-link" href="#mainContainer">go to step 3</a>
		</div>
	</div>
</div>
<section id="mainContainer" class="md:container md:mx-auto md:px-4 scroll-mt-16">
	<UpcomingMovies {upcomingData} />

	<div class="divider pt-5 pb-5">
		<h1 class="text-2xl">See what's popular</h1>
	</div>
	<MovieCards {popular} />
</section>
