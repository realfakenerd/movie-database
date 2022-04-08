<script lang="ts" context="module">
	import type { LoadInput } from '@sveltejs/kit/types/internal';

	const API_KEY = import.meta.env.VITE_API_KEY;
	const API_URL = 'https://api.themoviedb.org/3/movie/';
	export async function load({ fetch, params }: LoadInput) {
		const resMovieDetails = await fetch(
			`${API_URL}${params.id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,images,reviews`
		);

		const movieDetails = await resMovieDetails.json();
		const movieVideoDetails = movieDetails.videos.results;
		const movieComents = movieDetails.reviews.results;

		if (resMovieDetails.ok) {
			return {
				props: {
					movieDetails,
					movieVideoDetails,
					movieComents
				}
			};
		}
	}
</script>

<script lang="ts">
	import type { MovieDef, MovieVideo } from '$lib/types';

	import VideoCarousel from '$lib/components/VideoCarousel.svelte';
	import MovieStats from '$lib/components/MovieStats.svelte';
	import Reviews from '$lib/components/Reviews.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let movieVideoDetails: MovieVideo[];
	export let movieDetails: MovieDef;
	export let movieComents;

	onMount(() => {
		document.title = 'Pop Korn/' + movieDetails.title;
	});

	const backdropPath = movieDetails.backdrop_path;
	const posterPath = movieDetails.poster_path;
	const imgUrl = 'https://image.tmdb.org/t/p/original';
	const backgroundImage = backdropPath === null ? imgUrl + posterPath : imgUrl + backdropPath;

	const budget = movieDetails.budget;

	const releaseDate = movieDetails.release_date;
</script>

<div class="flex flex-col items-center w-full py-10">
	<div class="hero min-h-screen" style="background-image: url({backgroundImage}) ;">
		<div class="hero-overlay bg-opacity-80" />
		<div class="hero-content flex-col lg:flex-row text-center text-neutral-content">
			<img
				class="max-w-sm bg-base-100 rounded-lg shadow-2xl"
				width="384"
				src={imgUrl + posterPath}
				alt="Movie poster"
			/>
			<div class="max-w-md">
				<h1 class="text-5xl font-bold mb-5 uppercase">{movieDetails.original_title}</h1>
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
	{#if movieVideoDetails.length !== 0}
		<VideoCarousel videos={movieVideoDetails} />
	{/if}
</div>
