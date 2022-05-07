<script lang="ts">
	import type { Actor } from '$lib/types';
	import { Img_URL } from '$lib/utils';

	let cast: Actor[];
	let crew;
	export { cast, crew };
</script>

<div class="py-3 pl-10">
	<h2 class="text-2xl">Top Billed Cast</h2>
</div>
<div class="carousel carousel-center max-w-full space-x-5 bg-neutral p-4 shadow-inner">
	{#each cast as ac}
		<a href="#" class="carousel-item flex w-36 flex-col items-center">
			{#if ac.profile_path}
				<figure>
					<img
						class="rounded-lg bg-base-300 object-cover shadow-lg"
						width="100"
						height="150"
						src={Img_URL + 'w500' + ac.profile_path}
						alt="actor"
					/>
				</figure>
			{/if}
			<div class="">
				<h3 class="text-xl font-semibold">
					{ac.original_name}
				</h3>
				<h4 class="text-sm">
					{ac.character}
				</h4>
			</div>
		</a>
	{/each}
</div>
