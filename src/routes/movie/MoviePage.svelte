<script lang="ts">
	import MovieStats from '$lib/components/MoviePage/MovieStats.svelte';
	import Reviews from '$lib/components/MoviePage/Reviews.svelte';
	import type { MovieDef } from '$lib/types';
	export let mv: MovieDef;

	const srcsetURL = 'https://image.tmdb.org/t/p/';
</script>

<svelte:head>
	<link rel="preload" href={srcsetURL + 'w1280' + mv.backdrop_path} as="image" />
	<link
		rel="preload"
		href={srcsetURL + 'w342' + mv.poster_path}
		imagesrcset="{srcsetURL + 'w500' + mv.poster_path} w500, {srcsetURL +
			'w780' +
			mv.poster_path} w780"
		imagesizes="w342"
		as="image"
	/>
</svelte:head>

<div class="flex w-full flex-col items-center py-20">
	<section
		class="hero min-h-screen "
		style="background-image: url({srcsetURL + 'w1280' + mv.backdrop_path});"
	>
		<div class="hero-overlay bg-opacity-80" />
		<div class="hero-content flex-col text-center text-neutral-content lg:flex-row">
			<img
				class="w-100 rounded-lg bg-base-100 shadow-lg md:max-w-sm"
				width="384"
				height="576"
				srcset={`${srcsetURL}w342${mv.poster_path} 342w,
						${srcsetURL}w500${mv.poster_path} 500w,
						${srcsetURL}w780${mv.poster_path} 780w`}
				src={srcsetURL + 'w342' + mv.poster_path}
				alt="Movie poster"
			/>
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold uppercase">{mv.original_title}</h1>
				<div class="divider">
					<span class="badge badge-secondary">
						{mv.status}
					</span>
				</div>
				<p>{mv.overview}</p>
				<a
					href={mv.id === 414906 ? 'https://www.rataalada.com/' : mv.homepage}
					class="btn btn-link"
					target="_blank">{mv.tagline}</a
				>
			</div>
		</div>
	</section>

	<div class="p-10">
		<div class="divider" />
		<MovieStats budget={mv.budget} releaseDate={mv.release_date} movieDetails={mv} />
		<!-- <Reviews movieComents={mv} /> -->
	</div>
</div>
