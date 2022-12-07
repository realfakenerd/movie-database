<script lang="ts">
	import type { Config, TVResult } from '$lib/types';

	import { formatDate, getImagePath } from '$lib/utils';

	let tv: TVResult;
	let config: Config;

	export { config, tv };

</script>

<a
	class="card-compact group card image-full transform transition duration-300 ease-out hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/30 w-72 md:w-48 lg:w-52 xl:w-56"
	href={'/tv/' + tv.id}
>
	<figure>
		{#if tv.poster_path}
			<img
				width="300"
				height="450"
				srcset={`
					${getImagePath('poster', 0, tv.poster_path, config)} 92w,
					${getImagePath('poster', 1, tv.poster_path, config)} 154w,
					${getImagePath('poster', 2, tv.poster_path, config)} 185w,
					${getImagePath('poster', 3, tv.poster_path, config)} 342w,
					${getImagePath('poster', 4, tv.poster_path, config)} 500w,
					${getImagePath('poster', 5, tv.poster_path, config)} 780w,
				   `}
				src={getImagePath('poster', 6, tv.poster_path, config)}
				loading="lazy"
				alt="tv poster"
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
					d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
				/>
			</svg>
		{/if}
	</figure>
	<div class="card-body">
		<h1 class="card-title text-center">{tv.name}</h1>
		<div class="flex h-full flex-col justify-between">
			<div class="badge gap-1">
				<span>{tv.vote_average}</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4 text-yellow-300 group-hover:animate-spin"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
					/>
				</svg>
			</div>
			<div class="divider">
				<div class="badge">
					<p>{formatDate(tv.first_air_date)}</p>
				</div>
			</div>
		</div>
	</div>
</a>
