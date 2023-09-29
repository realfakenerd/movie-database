<script lang="ts">
	import { formatDate, getImagePath } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import Card from './Card.svelte';

	let config: Config;
	let poster_path = '';
	let release_date: string | Date = '';
	let title = '';
	let vote_average = 0;
	let overview = '';
	let href = '';

	const imagePaths = Array.from({ length: 7 }, (_, i) =>
		getImagePath('poster_sizes', i, poster_path, config)
	);

	export { config, poster_path, release_date, title, vote_average, overview };
</script>

<Card isLink class="h-[336px] w-full group {$$props.class??''}" {href}>
	<figure class="absolute inset-0 -z-10">
		<img
			loading="lazy"
			width="224"
			height="336"
			class="h-full w-full object-cover object-center"
			srcset={`
                    ${imagePaths[0]} 92w,
                    ${imagePaths[1]} 154w,
                    ${imagePaths[2]} 185w,
                    ${imagePaths[3]} 342w,
                    ${imagePaths[4]} 500w,
                    ${imagePaths[5]} 780w,
                    `.trim() || 'https://fakeimg.pl/160x240/?retina=1&text=No+Photo&font=noto'}
			src={imagePaths[6]}
			alt="movie"
		/>
	</figure>

	<section class="flex w-full flex-col justify-between h-full group-hover:text-primary">
		<div class="flex flex-col gap-2">
			<h1 class="text-title-large">{title}</h1>

			<div class="inline-flex gap-2 items-center text-label-medium">
				<Icon icon="ic:round-star" width="18" />
				<span>{vote_average}</span>
			</div>

			{#if overview}
				<p class="text-body-medium hidden group-hover:inline group-hover:text-on-surface">
					{overview.slice(0, 144)}...
				</p>
			{/if}
		</div>

		<span class="text-label-large">{formatDate(release_date, 'long')}</span>
	</section>
</Card>
