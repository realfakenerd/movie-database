<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import { formatDate, getImagePath } from '$lib/utils';
	import IndexHero from '../lib/components/IndexHero.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const { upcoming, streamed, config } = data;
</script>

<svelte:head>
	<title>Popkorn</title>
</svelte:head>

<div class="p-2">
	<IndexHero />
</div>
<section id="mainContainer" class="space-y-2 p-4">
	<div class="space-y-10">
		<h1 class="text-left text-display-small">See what's upcoming</h1>
		<section>
			<Carousel arrayData={upcoming.results} let:data>
				<div class="snap-start">
					<Card
						class="relative bg-surface-variant/70 min-w-[16rem] text-on-surface-variant hover:bg-surface-variant-hover"
						href={'/movie/' + data.id}
					>
						<figure class="absolute inset-0 -z-10">
							<img
								loading="lazy"
								width="224"
								height="336"
								class="h-full w-full object-cover object-center"
								srcset={`
										${getImagePath('poster', 0, data.poster_path, config)} 92w,
										${getImagePath('poster', 1, data.poster_path, config)} 154w,
										${getImagePath('poster', 2, data.poster_path, config)} 185w,
										${getImagePath('poster', 3, data.poster_path, config)} 342w,
										${getImagePath('poster', 4, data.poster_path, config)} 500w,
										${getImagePath('poster', 5, data.poster_path, config)} 780w,
									`}
								src={getImagePath('poster', 6, data.poster_path, config)}
								alt="movie"
							/>
						</figure>

						<div class="flex w-full flex-col items-start px-2">
							<h1 class="text-title-large">{data.title}</h1>
							<h2 class="text-label-medium">Release Date: {formatDate(data.release_date)}</h2>
						</div>
					</Card>
				</div>
			</Carousel>
		</section>
	</div>

	<section class="space-y-10">
		<h1 class="text-left text-display-small">See what's popular</h1>

		<section class="grid place-items-center gap-2 px-8 md:px-4">
			{#await streamed.popular}
				<p>loading</p>
			{:then popular}
				{#each popular.results as movie (movie.id)}
					<Card
						class="relative bg-surface-variant/70 text-on-surface-variant hover:bg-surface-variant-hover"
						href={'/movie/' + movie.id}
					>
						<figure class="absolute inset-0 -z-10">
							<img
								loading="lazy"
								width="224"
								height="336"
								class="w-full h-full object-center object-cover"
								srcset={`
									${getImagePath('poster', 0, movie.poster_path, config)} 92w,
									${getImagePath('poster', 1, movie.poster_path, config)} 154w,
									${getImagePath('poster', 2, movie.poster_path, config)} 185w,
									${getImagePath('poster', 3, movie.poster_path, config)} 342w,
									${getImagePath('poster', 4, movie.poster_path, config)} 500w,
									${getImagePath('poster', 5, movie.poster_path, config)} 780w,
								   `}
								src={getImagePath('poster', 6, movie.poster_path, config)}
								alt="movie"
							/>
						</figure>

						<div class="w-full flex flex-col items-start px-2">
							<h1 class="text-title-large">{movie.title}</h1>
							<h2 class="text-label-medium">Release Date: {formatDate(movie.release_date)}</h2>
						</div>
					</Card>
				{/each}
			{/await}
		</section>
		<!-- <div class="divider py-10">
			{#if currentItems < streamed.popular.results.length}
				<button on:click={() => (currentItems += 5)} class="btn btn-primary"> load more </button>
			{/if}
		</div> -->
	</section>
</section>

<style>
	section.grid {
		grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
	}
</style>
