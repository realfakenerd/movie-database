<script lang="ts">
	import type { UpcomingMoviesRes } from '$lib/types';
	import { formatDate } from '$lib/utils';
	export let upcomingData: UpcomingMoviesRes[];
	console.log(upcomingData);

	let currentIndex = 5;
	const srcsetURL = 'https://image.tmdb.org/t/p/';
	const sizes = ['w342', 'w500', 'w780'];
</script>

<div class="carousel w-full">
	{#each upcomingData.slice(0, currentIndex) as upd (upd.id)}
		<div class="carousel-item min-h-[482px] w-full" id={upd.id}>
			<section
				class="hero"
				style="background-image: url({upd.backdrop_path === null
					? ''
					: srcsetURL + 'w1280' + upd.backdrop_path});"
			>
				<div class="hero-overlay bg-opacity-60" />
				<div
					class="hero-content flex-col space-x-0 text-center text-neutral-content md:flex-row md:space-x-40"
				>
					<img
						class="rounded-lg bg-base-100 shadow-2xl"
						width="300"
						height="450"
						srcset={`${srcsetURL}${sizes[1]}${upd.poster_path} 500w,
							${srcsetURL}${sizes[2]}${upd.poster_path} 780w`}
						src={srcsetURL + sizes[1] + upd.poster_path}
						decoding="async"
						loading="lazy"
						alt="Movie poster"
					/>
					<div class="space-y-4">
						<h1 class="text-xl font-bold md:text-3xl">{upd.title}</h1>
						<p>Release date: {formatDate(upd.release_date)}</p>
						<a sveltekit:prefetch class="btn btn-primary" href={'/movie/' + upd.id}>see more</a>
					</div>
				</div>
			</section>
		</div>
	{/each}
</div>
<div class="flex w-full justify-center gap-2 py-2">
	{#each upcomingData.slice(0, currentIndex) as d, index}
		<a href={'#' + d.id} class="btn btn-xs">{index + 1}</a>
	{/each}
	{#if upcomingData.length > currentIndex}
		<button class="btn btn-xs" on:click={() => (currentIndex += 5)}>...</button>
	{/if}
</div>
