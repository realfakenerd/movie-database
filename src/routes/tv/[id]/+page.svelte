<script lang="ts">
	import AwaitCarousel from '$lib/components/AwaitCarousel.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Poster from '$lib/components/Poster.svelte';
	import TvOverview from '$lib/components/TvOverview.svelte';
	import { getImagePath } from '$lib/utils';
	import type { PageData } from './$types';
	export let data: PageData;
	const { tv, streamed, config } = data;

	console.log(data);
</script>

<svelte:head>
	<title>Popkorn - {tv.name}</title>
</svelte:head>

<Hero {config} imgPath={tv.backdrop_path}>
	<Poster poster_path={tv.poster_path} {config} networks={streamed.providers} />
	<TvOverview src={tv} />
</Hero>

<section>
	<AwaitCarousel arrayData={streamed.credits} let:data>
		<ul
			class="flex snap-x flex-row gap-2 overflow-y-hidden overflow-x-scroll scroll-auto rounded-2xl"
		>
			{#each data.cast as cast (cast.id)}
				<li class="flex max-w-[160px] snap-start flex-col items-center rounded-xl bg-background">
					<img
						class="max-w-[160px] rounded-lg bg-on-surface-variant"
						loading="lazy"
						height="240"
						width="160"
						src={cast.profile_path
							? getImagePath('profile_sizes', 3, cast.profile_path, config)
							: 'https://fakeimg.pl/160x240/?retina=1&text=No+Photo&font=noto'}
						alt=""
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
