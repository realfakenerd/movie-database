<script lang="ts">
	import type { Config, PersonResult } from '$lib/types';

	import { formatDate, getImagePath } from '$lib/utils';

	let person: PersonResult;
	let config: Config;

	export { config, person };

</script>

<div
	class="card-compact card transform transition duration-300 ease-out hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/30 w-72 md:w-48 lg:w-52 xl:w-56"
>
	<figure>
		{#if person.profile_path}
			<img
				width="300"
				height="450"
				srcset={`
					${getImagePath('profile', 0, person.profile_path, config)} 45w,
					${getImagePath('profile', 1, person.profile_path, config)} 185w,
					${getImagePath('profile', 2, person.profile_path, config)} 632w
				   `}
		   		src={getImagePath('profile', 3, person.profile_path, config)}
				loading="lazy"
				alt="Movie poster"
			/>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
				/>
			</svg>
		{/if}
	</figure>
	<div class="card-body items-center bg-base-300 text-center">
		<div class="card-title">
			<h3 class="text-center">
				{person.name}
			</h3>
		</div>
		<div class="w-full">
			<h3>Known For</h3>
			<div class="divider">
				{person.known_for_department}
			</div>
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
	</div>
</div>
