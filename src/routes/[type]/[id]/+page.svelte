<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
	const { movie, config } = data;

	const backdrop_path =
		config.images.secure_base_url + config.images.backdrop_sizes[3] + movie.backdrop_path;
</script>

<section class="hero min-h-screen" style="background-image: url({backdrop_path});">
	<div class="hero-overlay bg-opacity-60" />
	<section class="hero-content px-10">
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
						<div class="stat-title">Movie score</div>
						<div class="stat-value text-yellow-300">
							<span>{movie.vote_average}</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="inline-block w-8 h-8  text-yellow-300"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
						</div>
						<div class="stat-desc">base on {movie.vote_count} votes</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center ">
				<div class="text-center">
					<a class="btn btn-link text-secondary" href={movie.homepage}>
						<span>
							{movie.tagline}
						</span>
					</a>
				</div>
				<div class="backdrop-blur-sm bg-base-100/30 rounded-box p-3">
					{movie.overview}
				</div>
			</div>
		</div>
	</section>
</section>
<section id="mainHeroContainer" class="p-10 grid grid-cols-2">
	<div class="flex flex-col gap-4">
		<h2 class="text-2xl font-semibold">Movie cast</h2>

		{#each movie.credits.cast.slice(0, 14) as cast}
			<div
				class="flex items-center gap-3 transition-colors duration-300 group hover:bg-base-200 w-1/2 p-2 rounded-box"
			>
				<div class="avatar ">
					<div class="group-hover:shadow-md group-hover:shadow-slate-500/30 w-16 rounded-full">
						<img
							alt="cast profile"
							src={config.images.secure_base_url +
								config.images.profile_sizes[3] +
								cast.profile_path}
						/>
					</div>
				</div>

				<span class="font-semibold group-hover:text-white">{cast.name}</span>
			</div>
		{/each}
	</div>
	<div>
		<h2 class="text-2xl font-semibold">Movie videos</h2>
		<div class="carousel p-4 space-x-4 bg-neutral rounded-box">
			<div class="carousel-item">
				{#each movie.videos.results.slice(0, 3) as video}
					<div class="p-2">
						<h3>{video.name}</h3>
						<iframe
							class="rounded-box"
							width="560"
							height="315"
							src="https://www.youtube.com/embed/{video.key}"
							title={video.name}
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
