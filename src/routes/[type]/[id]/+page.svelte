<script lang="ts">
	import { formatDate, Img_URL } from '$lib/utils';
	import type { PageData } from './$types';
	import { fly } from 'svelte/transition';

	export let data: PageData;
	const { movie, config } = data;

	const backdrop_path =
		config.images.secure_base_url + config.images.backdrop_sizes[3] + movie.backdrop_path;
</script>

<section class="hero min-h-screen" style="background-image: url({backdrop_path});">
	<div class="hero-overlay bg-opacity-60" />
	<section class="hero-content">
		<div class="grid grid-cols-4 gap-10">
			<div class="col-span-3 grid grid-cols-3 gap-10">
				<div class="col-span-3 grid grid-cols-2">
					<div class="col-span-2">With</div>
					<div>
						<div>{movie.credits.cast[0].name}</div>
						<div>{movie.credits.cast[1].name}</div>
					</div>
					<div>
						<span class="font-semibold">{movie.runtime}min</span>
						<div class="space-x-3">
							{#each movie.genres as genre (genre.id)}
								<span>{genre.name}</span>
							{/each}
						</div>
					</div>
				</div>
				<div class="col-span-3 text-center">
					<h1
						class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-extrabold text-transparent md:text-7xl"
					>
						{movie.title}
					</h1>
				</div>

				<div
					class="col-span-3 stats bg-base-100/30 backdrop-blur-sm stats-vertical lg:stats-horizontal shadow"
				>
					<div class="stat place-items-center">
						<div class="stat-title">Movie release date</div>
						<div class="stat-value">{formatDate(movie.release_date)}</div>
						<div class="stat-desc">Movie status: <span class="badge">{movie.status}</span></div>
					</div>

					<div class="stat place-items-center">
						<div class="stat-figure text-primary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block w-8 h-8 stroke-current"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
								/></svg
							>
						</div>
						<div class="stat-title">Movie score</div>
						<div class="stat-value text-yellow-300">{movie.vote_average}</div>
						<div class="stat-desc">base on {movie.vote_count} votes</div>
					</div>
				</div>
			</div>
			<div class="">
				<div class="mt-8 flex flex-wrap justify-center gap-4 text-center">
					<a class="btn btn-link text-secondary" href={movie.homepage}>
						<span>
							{movie.tagline}
						</span>
					</a>
				</div>
				<div>
					{movie.overview}
				</div>
			</div>
		</div>
	</section>
</section>
