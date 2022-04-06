<script lang="ts" context="module">
	import type { LoadInput } from '@sveltejs/kit/types/internal';

	const API_KEY = import.meta.env.VITE_API_KEY;
	const url = 'https://api.themoviedb.org/3/movie/';
	export async function load({ fetch, params }: LoadInput) {
		const resMovieDetails = await fetch(`${url}${params.id}?api_key=${API_KEY}&language=en-US`);
		const resMovieVideoDetails = await fetch(
			`${url}${params.id}/videos?api_key=${API_KEY}&language=en-US`
		);

		const resComments = await fetch(
			`${url}${params.id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
		);
		const movieDetails = await resMovieDetails.json();
		const movieVideoDetails = await resMovieVideoDetails.json();
		const movieComents = await resComments.json();

		if (resMovieDetails.ok && resMovieVideoDetails.ok) {
			return {
				props: {
					movieDetails,
					movieVideoDetails: movieVideoDetails.results,
					movieComents: movieComents.results
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

	export let movieVideoDetails: MovieVideo[];
	export let movieDetails: MovieDef;
	export let movieComents;

	console.log('MOVIEVIDEODETAILS', movieVideoDetails);

	const backdropPath = movieDetails.backdrop_path;
	const posterPath = movieDetails.poster_path;
	const imgUrl = 'https://image.tmdb.org/t/p/original';
	const backgroundImage = backdropPath === null ? imgUrl + posterPath : imgUrl + backdropPath;

	const budget = movieDetails.budget;

	const releaseDate = movieDetails.release_date;

	console.log(movieDetails);
</script>

<div class="flex flex-col items-center w-full py-10">
	<div class="hero min-h-screen" style="background-image: url({backgroundImage}) ;">
		<div class="hero-overlay bg-opacity-80" />
		<div class="hero-content text-center text-neutral-content">
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
