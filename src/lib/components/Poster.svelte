<script lang="ts">
	import type { Config } from '$lib/types';
	import { getImagePath } from '$lib/utils';

	export let poster_path = '';
	export let config: Config;
	export let size = 4;

	interface Network {
		id: number;
		name: string;
		logo_path: string;
		origin_country: string;
	}

	export let networks: Network[] | null = null;
</script>

<div class="flex-shrink rounded-xl bg-surface-variant">
	<figure>
		<img
			width="305"
			height="457"
			class="max-w-[305px] rounded-xl bg-surface-variant"
			src={getImagePath('poster', size, poster_path, config)}
			alt=""
		/>
	</figure>
	{#if networks}
		<ul class="flex flex-row justify-center gap-2 py-2">
			{#each networks as network, i (i)}
				<li class="rounded-lg bg-secondary p-1">
					<img
						width="64"
						height="64"
						src={getImagePath('logo', 2, network.logo_path, config)}
						alt=""
					/>
				</li>
			{/each}
		</ul>
	{/if}
</div>
