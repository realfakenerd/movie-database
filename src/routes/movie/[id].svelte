<script lang="ts" context="module">
	import type { LoadInput } from '@sveltejs/kit/types/internal';

	const API_KEY = import.meta.env.VITE_API_KEY;

	export async function load({ fetch, params }: LoadInput) {
		const resMovieDetails = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`
		);
		const resMovieVideoDetails = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${API_KEY}&language=en-US`
		);
		const movieDetails = await resMovieDetails.json();
		const movieVideoDetails = await resMovieVideoDetails.json();
		if (resMovieDetails.ok && resMovieVideoDetails.ok) {
			return {
				props: {
					movieDetails,
					movieVideoDetails: movieVideoDetails.results
				}
			};
		}
	}
</script>

<script lang="ts">
	import type { MovieDef, MovieVideo } from '$lib/types';
	import VideoCarousel from '$lib/components/VideoCarousel.svelte';
	import { formatDate, formatNumberToMoney } from '$lib/utils';
	export let movieVideoDetails: MovieVideo[];
	export let movieDetails: MovieDef;

	const budget = formatNumberToMoney(movieDetails.budget);

	const releaseDate = formatDate(movieDetails.release_date);
</script>

<div class="flex flex-col items-center w-full py-10">
	<div class="artboard artboard-horizontal phone-3">
		<img
			class="object-cover bg-base-300 rounded-2xl"
			width="800"
			height="450"
			src={'https://image.tmdb.org/t/p/original' + movieDetails.backdrop_path}
			alt={movieDetails.original_title}
		/>
	</div>
	<div class="p-10">
		<h1 class="text-4xl uppercase">{movieDetails.original_title}</h1>
		<div class="divider" />
		<p>{movieDetails.overview}</p>
		<div class="divider" />
		<section class="stats stats-vertical lg:stats-horizontal shadow">
			<div class="stat">
				<span class="stat-title">Release Date </span>
				<div class="stat-value">
					{releaseDate}
				</div>
			</div>
			<div class="stat">
				<span class="stat-title">Budget</span>
				<div class="stat-value">
					{budget}
				</div>
			</div>
			<div class="stat">
				<span class="stat-title">Rating </span>
				<div class="stat-value">
					{movieDetails.vote_average}
				</div>
			</div>
			<div class="stat">
				<span class="stat-title">Runtime</span>
				<div class="stat-value">
					{movieDetails.runtime}
				</div>
			</div>
		</section>
	</div>
	<VideoCarousel videos={movieVideoDetails} />
</div>
