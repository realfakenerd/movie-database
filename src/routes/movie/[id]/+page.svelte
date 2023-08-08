<script lang="ts">
	import AwaitCarousel from '$lib/components/AwaitCarousel.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import MovieOverview from '$lib/components/MovieOverview.svelte';
	import Poster from '$lib/components/Poster.svelte';
	import { getImagePath } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
	const { movie, streamed, config } = data;
</script>

<svelte:head>
	<title>Popkorn - {movie.title}</title>
</svelte:head>

<Hero imgPath={movie.backdrop_path} {config}>
	<Poster poster_path={movie.poster_path} {config} />
	<MovieOverview src={movie} collection={streamed.collection} {config} />
</Hero>
<section>
	<AwaitCarousel arrayData={streamed.credits} let:data>
		<div slot="loading">
			<li
				class="flex h-[292px] max-w-[160px] animate-pulse flex-col items-center
                    gap-2 rounded-xl bg-background"
			>
				<div class="h-[240px] w-[160px] rounded-lg bg-secondary" />
			</li>
			<li
				class="flex h-[292px] max-w-[160px] animate-pulse flex-col items-center
                    gap-2 rounded-xl bg-background"
			>
				<div class="h-[240px] w-[160px] rounded-lg bg-secondary" />
			</li>
			<li
				class="flex h-[292px] max-w-[160px] animate-pulse flex-col items-center
                    gap-2 rounded-xl bg-background"
			>
				<div class="h-[240px] w-[160px] rounded-lg bg-secondary" />
			</li>
		</div>

		<ul
			class="flex snap-x flex-row gap-2 overflow-y-hidden overflow-x-scroll scroll-auto rounded-2xl"
		>
			{#each data.cast as cast (cast.id)}
				<li
					class="flex max-w-[160px] snap-start flex-col items-center rounded-xl interactive-bg-background"
				>
					<img
						class="max-w-[160px] rounded-lg bg-on-surface-variant"
						loading="lazy"
						height="240"
						width="160"
						src={cast.profile_path
							? getImagePath('profile', 3, cast.profile_path, config)
							: 'https://fakeimg.pl/160x240/?retina=1&text=No+Photo&font=noto'}
						alt={cast.name}
					/>
					<div class="p-2">
						<h1 class="text-title-small">{cast.name}</h1>
						<h2 class="text-label-medium">{cast.character}</h2>
					</div>
				</li>
			{/each}
		</ul>
	</AwaitCarousel>
</section>

<style lang="postcss">
	ul::-webkit-scrollbar {
		@apply hidden;
	}
</style>
