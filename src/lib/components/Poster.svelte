<script lang="ts">
	import { getImagePath } from '$lib/utils';

	export let poster_path = '';
	export let config: Config;
	export let size = 4;

	export let networks: Promise<Provider> | null = null;

	console.log(networks);
</script>

<div class="flex-shrink rounded-xl bg-surface-variant">
	<figure>
		<img
			width="305"
			height="457"
			class="max-w-[305px] rounded-xl bg-surface-variant"
			src={getImagePath('poster_sizes', size, poster_path, config)}
			alt=""
		/>
	</figure>

	<div class="inline-flex items-center gap-2 p-2">
		{#await networks}
			{#if networks}
				<div class="w-9 h-9 rounded-lg bg-background animate-pulse" />
				<span class="text-label-large">Watch now</span>
			{/if}
		{:then value}
			{@const provider = Object.keys(value).length === 0 ? null : value}
			{#each provider?.flatrate.sort((a, b) => b.display_priority - a.display_priority) as flatrate}
				<img
					class="rounded-lg"
					width="36"
					height="36"
					src={getImagePath('logo_sizes', 0, flatrate.logo_path, config)}
					alt={flatrate.provider_name}
				/>
			{/each}
			<a target="_blank" class="text-label-large" href={provider.link}>
				<span>Watch now</span>
			</a>
		{/await}
	</div>
</div>
