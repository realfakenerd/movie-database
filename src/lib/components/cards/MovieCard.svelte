<script lang="ts">
	import { formatDate, getImagePath } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import Card from './Card.svelte';

	let config: Config;
	let poster_path = '';
	let release_date: string | Date = '';
	let title = '';
	let vote_average = 0;
	let href = '';

	const imagePaths = Array.from({ length: 7 }, (_, i) =>
		getImagePath('poster_sizes', i, poster_path, config)
	);

	export { config, poster_path, release_date, title, vote_average, href };
</script>

<Card class={$$props.class ?? ''}>
	<figure class="max-w-[204px]">
		<img
			loading="lazy"
			height="298"
			width="204"
			class="object-cover object-center w-full rounded-md shadow-lg shadow-surface/30"
			src={imagePaths[4] || 'https://fakeimg.pl/160x240/?retina=1&text=No+Photo&font=noto'}
			alt="movie"
		/>
	</figure>

	<section class="flex w-full flex-col justify-between h-full">
		<div class="flex flex-col gap-2">
			<a {href}>
				<h1 class="text-title-large">{title}</h1>
			</a>

			<div class="inline-flex justify-between items-center text-title-medium">
				<div class="inline-flex items-center gap-1">
					<Icon icon="ic:round-star" width="18" class="text-primary" />
					<span>{vote_average}</span>
				</div>
				<button class="inline-flex items-center gap-1">
					<Icon icon="ic:round-star-outline" width="18" class="text-on-surface" />
					<span>Rate</span>
				</button>
				<Icon icon="mdi:info" width="18" class="text-on-surface" />
			</div>
		</div>

		<button class="btn justify-start bg-surface text-label-large">
			<Icon icon="mdi:play" width="24" />
			Trailer
		</button>
	</section>
</Card>
