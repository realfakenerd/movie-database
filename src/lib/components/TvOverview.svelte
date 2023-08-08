<script lang="ts">
	import type { Tv } from '$lib/types/tv';
	export let src: Tv = {};
</script>

<section class="flex w-full flex-col gap-4">
	<div class="max-w-xl space-y-2">
		<div>
			<h1 class="text-title-large text-on-primary-container">
				{src.name} ({src.first_air_date.split('-')[0]})
			</h1>
			<h2 class="text-headline-medium">{src.tagline}</h2>

			<div class="flex flex-row flex-wrap items-center gap-2 text-label-medium">
				<ul class="flex flex-row gap-x-2">
					{#each src.genres as { name, id } (id)}
						<li class="rounded-lg bg-surface-variant p-1 text-on-surface-variant">
							<p>{name}</p>
						</li>
					{/each}
				</ul>

				<span class="rounded-lg bg-surface-variant p-1 text-on-surface-variant">
					{src.episode_run_time[0] || 40}m
				</span>
			</div>
		</div>
	</div>
	<div class="max-w-xl">
		<h1 class="text-title-medium">Overview</h1>
		<p class="text-body-medium">{src.overview}</p>
		<a class="text-label-large underline" href={src.homepage}>Homepage</a>
	</div>

	<div>
		<ul class="flex flex-row gap-x-2">
			{#each src.created_by as creator, i (i)}
				<li>
					<h2 class="text-title-medium">{creator.name}</h2>
				</li>
			{/each}
		</ul>
		<p class="text-title-small">{src.created_by.length === 1 ? 'Creator' : 'Creators'}</p>
	</div>
</section>
