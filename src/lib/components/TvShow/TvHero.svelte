<script lang="ts">
	import type { TvShow } from '$lib/types';
	import { Img_URL } from '$lib/utils';

	export let details: TvShow;
</script>

<section class="relative">
	<img
		class="absolute inset-0 h-full w-full object-cover object-[75%] opacity-25 sm:object-[25%] sm:opacity-100"
		src={Img_URL + 'w1280' + details.backdrop_path}
		alt="Couple on a bed with a dog"
	/>

	<div
		class="hidden sm:absolute sm:inset-0 sm:block sm:bg-gradient-to-r sm:from-base-100 sm:to-base-100/30"
	/>

	<div class="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
		<figure class="p-5">
			<img
				class="mx-auto rounded-xl bg-base-100 object-cover shadow-lg"
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
				{details.name}
			</h1>

			<div class="divider">
				<div class="badge bg-secondary">{details.status}</div>
			</div>

			<p class="mt-4 max-w-lg sm:text-left sm:text-xl sm:leading-relaxed">
				{details.overview}
			</p>

			<div class="mt-8 flex flex-wrap gap-4 text-center">
				<a class="btn btn-link" href={details.homepage}>
					{details.tagline}
				</a>
			</div>
		</div>
	</div>
</section>
