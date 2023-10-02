<script lang="ts">
	import { formatDate, getImagePath } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import Card from './Card.svelte';

	let config: Config;
	let poster_path: string;
	let release_date: string | Date;
	let title: string;
	let vote_average: number;
	let overview: string;
	let media_type = '';
	let href = '';

	const imagePaths = Array.from({ length: 7 }, (_, i) =>
		getImagePath('poster_sizes', i, poster_path, config)
	);

	export { config, poster_path, release_date, title, vote_average, overview, media_type, href };
</script>

<Card isLink class="h-[336px] group w-full {$$props.class??''}" {href}>
	<figure class="absolute inset-0 -z-10">
		<img
			loading="lazy"
			width="224"
			height="336"
			class="h-full w-full object-cover object-center"
			srcset={poster_path
				? `
                    ${imagePaths[0]} 92w,
                    ${imagePaths[1]} 154w,
                    ${imagePaths[2]} 185w,
                    ${imagePaths[3]} 342w,
                    ${imagePaths[4]} 500w,
                    ${imagePaths[5]} 780w,
                    `.trim()
				: ''}
			src={poster_path
				? imagePaths[6]
				: 'https://fakeimg.pl/224x336/?retina=1&text=No+Photo&font=noto'}
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

			<p class="text-body-medium hidden group-hover:inline group-hover:text-on-surface">
				{overview.slice(0, 144)}...
			</p>
		</div>

		<div class="inline-flex gap-2 items-center">
			<Icon icon="mdi:{media_type}" height="14px" />
			<span class="text-label-large">{formatDate(release_date, 'long')}</span>
		</div>
	</section>
</Card>
