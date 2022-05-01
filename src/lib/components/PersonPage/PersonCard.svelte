<script lang="ts">
	import type { Person } from '$lib/types';

	export let person: Person;
	const srcsetURL = 'https://image.tmdb.org/t/p/';
	const sizes = ['w342', 'w500', 'w780'];
</script>

<div class="card max-w-full bg-base-200 shadow-xl">
	<figure class="px-10 pt-10">
		{#if person.profile_path}
			<img
				class="rounded-lg object-cover"
				width="150"
				height="150"
				srcset={`${srcsetURL}${sizes[1]}${person.profile_path} 500w,
							${srcsetURL}${sizes[2]}${person.profile_path} 780w`}
				src={srcsetURL + sizes[1] + person.profile_path}
				decoding="async"
				loading="lazy"
				alt="Movie poster"
			/>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-full text-secondary bg-secondary/10 rounded-lg shadow-lg"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
					clip-rule="evenodd"
				/>
			</svg>
		{/if}
	</figure>
	<div class="card-body items-center text-center">
		<div class="card-title">
			<h3>
				{person.name}
			</h3>
		</div>
		<div class="w-full">
			<h3>Known For</h3>
			<div class="carousel rounded-box space-x-4 p-4">
				{#each person.known_for as kf}
					<div class="carousel-item">
						<div class="badge badge-primary">
							{#if kf.media_type === 'movie'}
								{kf.title}
							{:else if kf.media_type === 'tv'}
								{kf.name}
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
		{person.known_for_department}
	</div>
</div>
