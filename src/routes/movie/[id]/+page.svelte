<script lang="ts">
	import { formatDate, getImagePath } from '$lib/utils';
	import type { PageData } from '../../[type]/[id]/$types';

	export let data: PageData;
	const { movie, config } = data;

	const trailer = movie.videos.results.find((m) => m.type === 'Trailer');

	const profile_path_srcset = (str) => `
		${getImagePath('profile', 0, str, config)} 45w,
		${getImagePath('profile', 1, str, config)} 185w,
		${getImagePath('profile', 2, str, config)} 632w
		`;
</script>

<svelte:head>
	<title>Popkorn - {movie.title}</title>
</svelte:head>

<section
	class="hero min-h-screen"
	style="background-image: url({movie.backdrop_path
		? getImagePath('backdrop', 3, movie.backdrop_path, config)
		: 'https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif'});"
>
	<div class="hero-overlay backdrop-blur-sm bg-opacity-90" />
	<section class="hero-content px-10">
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-4">
			<div class="col-span-3 grid grid-cols-3 gap-10">
				<div class="col-span-3 grid grid-cols-1 md:grid-cols-2">
					<span class="md:col-span-2">With</span>
					<div>
						{#if movie.credits.cast.length > 0}
							<h2>{movie.credits.cast[0].name}</h2>
							<h2>{movie.credits.cast[1].name}</h2>
						{:else}
							<h2>''</h2>
							<h2>''</h2>
						{/if}
					</div>
					<div>
						<span class="font-semibold">{movie.runtime}min</span>
						<div class="space-x-3">
							{#each movie.genres as genre (genre.id)}
								<h3>{genre.name}</h3>
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
					class="stats stats-vertical col-span-3 bg-base-100/30 shadow backdrop-blur-sm lg:stats-horizontal"
				>
					<div class="stat place-items-center">
						<div class="stat-title">Movie release date</div>
						<div class="stat-value">{formatDate(movie.release_date)}</div>
						<div class="stat-desc">Movie status: <span class="badge">{movie.status}</span></div>
					</div>

					<div class="stat place-items-center">
						<div class="stat-title">Movie score</div>
						<div class="stat-value text-yellow-300">
							<span>{movie.vote_average.toFixed(1)}</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="inline-block h-8 w-8  text-yellow-300"
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
			<div class="flex flex-col justify-around items-center w-full">
				<section class="w-full">
					<h2 class="text-8xl font-bold">{movie.vote_average.toFixed(1)}</h2>

					<div class="w-full inline-flex gap-5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class=" h-6 w-6  text-yellow-300"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>
						<p>base on {movie.vote_count} votes</p>
					</div>
				</section>
				<section>
					<!-- The button to open modal -->
					<label
						class="btn btn-ghost btn-circle btn-xl bg-white hover:bg-slate-300"
						for="my-modal-4"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-6 w-6 text-black"
						>
							<path
								fill-rule="evenodd"
								d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
								clip-rule="evenodd"
							/>
						</svg>
					</label>

					<!-- Put this part before </body> tag -->
					<input type="checkbox" id="my-modal-4" class="modal-toggle" />
					<label for="my-modal-4" class="modal modal-bottom cursor-pointer sm:modal-middle">
						<label class="modal-box relative min-w-fit" for="">
							{#if trailer}
								<iframe
									width="640"
									height="480"
									src="https://www.youtube.com/embed/{trailer.key}"
									title={trailer.name}
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								/>
							{:else}
								<p>no trailer yet</p>
							{/if}
						</label>
					</label>
				</section>
			</div>
		</div>
	</section>
</section>
<section id="mainHeroContainer" class="flex flex-col-reverse gap-5 md:flex-row p-10 ">
	<div class="flex flex-col gap-4 md:w-1/2">
		<section class="w-full">
			<h2 class="text-2xl font-semibold">Movie cast</h2>

			<ul class="carousel carousel-start bg-gradient-to-r from-base-200 p-4 space-x-4 rounded-box">
				{#each movie.credits.cast.slice(0, 14) as cast}
					<li
						class="carousel-item group rounded-box flex w-full sm:w-1/2 items-center gap-3 p-2 transition-colors duration-300 hover:bg-base-200"
					>
						<div class="avatar">
							<div class="w-16 rounded-full group-hover:shadow-md group-hover:shadow-slate-500/30">
								{#if cast.profile_path}
									<img
										alt="cast profile"
										srcset={profile_path_srcset(cast.profile_path)}
										src={getImagePath('profile', 3, cast.profile_path, config)}
									/>
								{:else}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-7 h-7 transform translate-x-[60%] translate-y-1/2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
										/>
									</svg>
								{/if}
							</div>
						</div>
						<div class="flex flex-col">
							<h1 class="font-semibold group-hover:text-white">{cast.name}</h1>
							<h2 class="text-sm">as {cast.character}</h2>
						</div>
					</li>
				{/each}
			</ul>
		</section>
	</div>
	<div class="space-y-5 md:w-1/2">
		<div>
			<h2 class="text-xl font-semibold uppercase">Overview</h2>
			<p>
				{movie.overview}
			</p>
		</div>
		<h2 class="text-xl font-semibold uppercase">Movie videos</h2>
		<div class="carousel carousel-center rounded-box space-x-4 bg-gradient-to-r from-base-200 p-4">
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
