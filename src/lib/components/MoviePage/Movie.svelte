<script lang="ts">
	import { formatDate, Img_URL } from '$lib/utils';
	import { fade } from 'svelte/transition';

	export let movie;

	let img: any;
	const sizes = ['w342', 'w500', 'w780'];
</script>

<a
	transition:fade={{ delay: 500, duration: 1500 }}
	sveltekit:prefetch
	class="cartao"
	href={'/movie/' + movie.id}
>
	<figure>
		<img
			width="300"
			height="450"
			srcset={`${Img_URL}${sizes[1]}${movie.poster_path} 500w,
							${Img_URL}${sizes[2]}${movie.poster_path} 780w`}
			src={Img_URL + sizes[1] + movie.poster_path}
			decoding="async"
			loading="lazy"
			alt="Movie poster"
		/>
	</figure>

	<div>
		<span>
			{movie.vote_average}

			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="ml-1.5 h-4 w-4 text-yellow-300"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				/>
			</svg>
		</span>
		<div class="content">
			<h3>{movie.title}</h3>
			<p>{formatDate(movie.release_date)}</p>
		</div>
	</div>
</a>

<style>
	a {
		@apply relative grid h-full overflow-hidden rounded-2xl;
	}
	a::before {
		content: var(--tw-content);
		@apply relative z-10 rounded-2xl bg-base-300 opacity-80;
	}

	a::before,
	a > * {
		@apply col-start-1 row-start-1;
	}

	figure {
		@apply flex items-center justify-center;
	}
	figure > img {
		@apply h-full overflow-hidden object-cover;
	}
	a > div {
		@apply z-20 grid grid-cols-2 grid-rows-2 justify-items-end gap-2 p-2 text-center text-lg;
	}
	div > span {
		@apply col-start-2 mt-3 inline-flex h-5 max-w-fit items-center rounded-full bg-base-300
		 px-3 py-1 text-xs font-semibold shadow-md;
	}
	.content {
		@apply col-span-2 row-start-2 mx-auto mb-10 self-end;
	}
	h3 {
		@apply flex max-w-[16rem] items-center gap-2 text-xl leading-7;
	}
</style>
