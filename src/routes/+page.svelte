<script lang="ts">
	import { Root as Carousel, Content, Item, Next, Previous } from '$lib/components/ui/carousel';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context';
	import Icon from '@iconify/svelte';
	import AutoPlay from 'embla-carousel-autoplay';
	import ClassNames from 'embla-carousel-class-names'
	import type { PageData } from './$types';
	export let data: PageData;
	const { upcoming, streamed, config } = data;

	const upcomingHero = upcoming.results.splice(0, 3);
	console.log(upcomingHero);

	let api: CarouselAPI;
	let current;

	$: if (api) {
		current = api.selectedScrollSnap() + 1;
		api.on('select', () => {
			current = api.slidesInView();

		});

		console.log(current);
	}
</script>

<svelte:head>
	<title>Popkorn</title>
</svelte:head>

<section class="relative flex flex-row gap-4 p-4">
	<div class="bg-primary/30 z-0 absolute inset-0 min-h-dvh w-full blur-[500px]"></div>
	<Carousel plugins={[AutoPlay({ delay: 3000 }), ClassNames({inView: 'ring'})]} opts={{ loop: true }} bind:api>
		<Content class="-ml-0">
			{#each upcomingHero as movie, i (i)}
				<Item class="basis-full relative h-[90dvh] w-full pl-0">
					<div class="w-full absolute z-[-1] overflow-hidden">
						<img
							width="1041"
							height="747"
							style="mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));"
							class="w-full h-[90dvh] rounded-lg object-cover"
							src="https://image.tmdb.org/t/p/original/{movie.poster_path}"
							alt="poster for {movie.title}"
						/>
					</div>
					<section class="p-4 h-full w-full flex flex-col justify-end gap-4 text-white">
						<div class="inline-flex gap-4 items-center">
							<figure>
								<img
									height="384px"
									class="rounded-lg h-96 w-72 object-cover bg-background"
									src="https://image.tmdb.org/t/p/original/{movie.poster_path}"
									alt="poster for {movie.title}"
								/>
							</figure>
							<div class="inline-flex items-center gap-4 self-end">
								<div class="p-6 rounded-full bg-surface-variant items-center justify-center">
									<Icon icon="ic:baseline-play-arrow" width="40px" />
								</div>
								<div>
									<h1 class="text-display-small font-bold">{movie.title}</h1>
									<p>Watch the trailer</p>
								</div>
							</div>
						</div>
					</section>
				</Item>
			{/each}
		</Content>
	</Carousel>
	<div class="basis-1/3 flex flex-col justify-between">
		{#each upcomingHero as movie, i (i)}
			<button
				on:click={() => api?.scrollTo(i)}
				class="w-96 h-44 rounded-xl flex flex-row p-4 gap-4 overflow-hidden relative bg-center bg-cover hover:ring ring-primary"
				style="background-image: url(https://image.tmdb.org/t/p/original/{movie.backdrop_path});"
			>
				<div class="inset-0 absolute bg-background/60 backdrop-blur-md" />
				<img
					class="w-24 h-36 rounded z-10"
					alt="poster for {movie.title}"
					src="https://image.tmdb.org/t/p/original/{movie.poster_path}"
				/>
				<div class="z-10 flex flex-col justify-end gap-4 h-full">
					<div class="text-title-medium text-left">
						{movie.title}
					</div>
					<div class="inline-flex items-center gap-3 w-fit px-2 bg-background rounded-md">
						<Icon class="text-primary" icon="ic:round-star" width="18" />
						<span>{movie.vote_average.toFixed(1)}</span>
					</div>
				</div>
			</button>
		{/each}
	</div>
</section>

<!-- <section id="mainContainer" class="flex flex-col justify-center gap-10 p-20">
	<section class="flex flex-col gap-8">
		<hgroup class="flex flex-col gap-4">
			<div class="inline-flex gap-2 items-center">
				<h1 class="text-left text-headline-medium">Coming Soon to teathers </h1>
				<Icon icon="mdi:arrow-right" width="28px"/>
			</div>
			<h2>Trailers for Upcoming Releases</h2>
		</hgroup>
		<section>
			<Carousel arrayData={upcoming.results} let:data>
				<MovieCard
					href={'/movie/' + data.id}
					class="snap-start"
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
						class="snap-start min-w-fit"
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
</section> -->
