<script lang="ts" context="module">
	import type { LoadInput } from '@sveltejs/kit/types/internal';

	const API_KEY = import.meta.env.VITE_API_KEY;
	const API_URL = 'https://api.themoviedb.org/3/movie/';
	export async function load({ fetch, params }: LoadInput) {
		const resMovieDetails = await fetch(
			`${API_URL}${params.id}?api_key=${API_KEY}&language=en-US&append_to_response=images,reviews`
		);

		const movieDetails = await resMovieDetails.json();
		const movieComents = movieDetails.reviews.results;

		if (resMovieDetails.ok) {
			return {
				props: {
					movieDetails,
					movieComents
				}
			};
		}
	}
</script>

<script lang="ts">
	import type { MovieDef } from '$lib/types';
	import MovieStats from '$lib/components/MoviePage/MovieStats.svelte';
	import Reviews from '$lib/components/MoviePage/Reviews.svelte';
	import { onMount } from 'svelte';
	import { animate } from 'motion';
	export let movieDetails: MovieDef;
	export let movieComents;

	onMount(() => {
		document.title = 'Pop Korn/' + movieDetails.title;
		animate('.hero', { opacity: [0, 1] }, { duration: 1, delay: 0.6 });
	});

	const backdropPath = movieDetails.backdrop_path;
	const posterPath = movieDetails.poster_path;
	const budget = movieDetails.budget;

	const srcsetURL = 'https://image.tmdb.org/t/p/';

	const releaseDate = movieDetails.release_date;
</script>

<svelte:head>
	<link rel="preload" href={srcsetURL + 'w1280' + backdropPath} as="image" />
	<link
		rel="preload"
		href={srcsetURL + 'w342' + posterPath}
		imagesrcset="{srcsetURL + 'w500' + posterPath} w500, {srcsetURL + 'w780' + posterPath} w780"
		imagesizes="w342"
		as="image"
	/>
</svelte:head>

<div class="flex w-full flex-col items-center py-20">
	<div
		class="hero min-h-screen"
		style="background-image: url({srcsetURL + 'w1280' + backdropPath});"
	>
		<div class="hero-overlay bg-opacity-80" />
		<div class="hero-content flex-col text-center text-neutral-content lg:flex-row">
			<img
				class="w-100 rounded-lg bg-base-100 shadow-lg md:max-w-sm"
				width="384"
				height="576"
				srcset={`${srcsetURL}w342${posterPath} 342w,
						${srcsetURL}w500${posterPath} 500w,
						${srcsetURL}w780${posterPath} 780w`}
				src={srcsetURL + 'w342' + posterPath}
				alt="Movie poster"
			/>
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold uppercase">{movieDetails.original_title}</h1>
				<div class="divider">
					<span class="badge badge-secondary">
						{movieDetails.status}
					</span>
				</div>
				<p>{movieDetails.overview}</p>
				<a
					href={movieDetails.id === 414906 ? 'https://www.rataalada.com/' : movieDetails.homepage}
					class="btn btn-link"
					target="_blank">{movieDetails.tagline}</a
				>
			</div>
		</div>
	</div>

	<div class="p-10">
		<div class="divider" />
		<MovieStats {budget} {releaseDate} {movieDetails} />
		<Reviews {movieComents} />
	</div>
</div>
