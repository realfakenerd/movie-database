<script lang="ts">
	import Card from '$lib/components/cards/Card.svelte';
	import MovieCard from '$lib/components/cards/MovieCard.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import IndexHero from '../lib/components/IndexHero.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const { upcoming, streamed, config } = data;

	console.log(upcoming);
</script>

<svelte:head>
	<title>Popkorn</title>
</svelte:head>

<div class="p-2">
	<IndexHero />
</div>
<section id="mainContainer" class="flex flex-col gap-10 p-2">
	<section class="flex flex-col gap-2">
		<h1 class="text-left text-headline-medium">Upcoming</h1>
		<section>
			<Carousel arrayData={upcoming.results} let:data>
				<MovieCard
					href={'/movie/' + data.id}
					class="snap-start min-w-[16rem]"
					{config}
					poster_path={data.poster_path}
					release_date={data.release_date}
					title={data.title}
					vote_average={data.vote_average}
					overview={data.overview}
				/>
			</Carousel>
		</section>
	</section>

	<section class="flex flex-col gap-2">
		<h1 class="text-left text-headline-medium">Popular</h1>
		<section>
			{#await streamed.popular}
				<p>loading</p>
			{:then popular}
				<Carousel arrayData={popular.results} let:data>
					<MovieCard
						href={'/movie/' + data.id}
						class="snap-start min-w-[16rem]"
						{config}
						poster_path={data.poster_path}
						release_date={data.release_date}
						title={data.title}
						vote_average={data.vote_average}
						overview={data.overview}
					/>
				</Carousel>
			{/await}
		</section>
	</section>
	<section class="flex flex-col gap-2">
		<h1 class="text-left text-headline-medium">Now Playing</h1>

		<section>
			{#await streamed.nowPlaying}
				<p>loading</p>
			{:then popular}
				<Carousel arrayData={popular.results} let:data>
					<MovieCard
						href={'/movie/' + data.id}
						class="snap-start min-w-[16rem]"
						{config}
						poster_path={data.poster_path}
						release_date={data.release_date}
						title={data.title}
						vote_average={data.vote_average}
						overview={data.overview}
					/>
				</Carousel>
			{/await}
		</section>
	</section>
	<section class="flex flex-col gap-2">
		<h1 class="text-left text-headline-medium">Top Rated</h1>

		<section>
			{#await streamed.topRated}
				<p>loading</p>
			{:then popular}
				<Carousel arrayData={popular.results} let:data>
					<MovieCard
						href={'/movie/' + data.id}
						class="snap-start min-w-[16rem]"
						{config}
						poster_path={data.poster_path}
						release_date={data.release_date}
						title={data.title}
						vote_average={data.vote_average}
						overview={data.overview}
					/>
				</Carousel>
			{/await}
		</section>
	</section>
</section>
