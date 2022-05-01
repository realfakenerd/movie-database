<script lang="ts">
	import { Img_URL } from '$lib/utils';
	export let img: any;
	const sizes = ['w342', 'w500', 'w780'];
</script>

{#if img.poster_path}
	<img
		class="rounded-lg bg-base-100 shadow-2xl"
		width="300"
		height="450"
		srcset={`${Img_URL}${sizes[1]}${img.poster_path} 500w,
							${Img_URL}${sizes[2]}${img.poster_path} 780w`}
		src={Img_URL + sizes[1] + img.poster_path}
		decoding="async"
		loading="lazy"
		alt="Movie poster"
	/>
{:else}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="w-full h-full"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path
			fill-rule="evenodd"
			d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
			clip-rule="evenodd"
		/>
	</svg>
{/if}
