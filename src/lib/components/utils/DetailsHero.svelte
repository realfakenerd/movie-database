<script lang="ts">
	import type { MovieDef, TvShow } from '$lib/types';
	import { Img_URL } from '$lib/utils';
	import { animate, stagger } from 'motion';
	import { onMount } from 'svelte/internal';
	export let details: MovieDef | TvShow;

	onMount(() => {
		animate(
			'#secao > *',
			{
				opacity: [0, 1]
			},
			{
				duration: 1,
				easing: 'ease-in-out',
				delay: stagger(1)
			}
		);
	});
</script>

<section class="relative min-h-screen">
	<img
		class="absolute inset-0 h-full w-full object-cover object-center opacity-25 sm:opacity-100"
		src={Img_URL + 'w1280' + details.backdrop_path}
		alt="Movie poster"
	/>

	<div
		class="hidden sm:absolute sm:inset-0 sm:block sm:bg-gradient-to-l sm:from-base-100 sm:to-base-100/30"
	/>

	<section
		id="secao"
		class="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
	>
		<figure class="p-5">
			<img
				class="mx-auto rounded-xl bg-primary object-cover shadow-lg"
				height="500"
				width="330"
				src={Img_URL + 'w500' + details.poster_path}
				alt="Tv show Poster"
			/>
		</figure>
		<div class="mx-auto max-w-xl text-center ">
			<h1
				class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
			>
				{details.title}
			</h1>

			<div class="divider">
				<div class="badge bg-secondary">{details.status}</div>
			</div>

			<p class="mt-4 max-w-lg sm:text-left sm:text-xl sm:leading-relaxed">
				{details.overview}
			</p>

			<div class="mt-8 flex flex-wrap justify-center gap-4 text-center">
				<a class="btn btn-link" href={details.homepage}>
					<span>
						{details.tagline}
					</span>
				</a>
			</div>
		</div>
	</section>
</section>
