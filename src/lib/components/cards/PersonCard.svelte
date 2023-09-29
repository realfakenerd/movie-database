<script lang="ts">
	import { getImagePath } from '$lib/utils';
	import Card from './Card.svelte';

	let cast: Cast;
	let config: Config;

	export { cast, config };
</script>

<Card class="flex p-0 min-w-[160px] min-h-[330px] snap-start flex-col items-center rounded-xl bg-background">
	<img
		class="rounded-lg bg-on-surface-variant"
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
</Card>
