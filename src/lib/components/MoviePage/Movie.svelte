<script lang="ts">
	import type { PopularMovies } from '$lib/types';
	import { formatDate } from '$lib/utils';
	const srcsetURL = 'https://image.tmdb.org/t/p/';
	const sizes = ['w342', 'w500', 'w780'];
	export let movie: PopularMovies;
</script>

<div class="card image-full max-w-full bg-base-100 before:rounded-none">
	<figure>
		<img
			class="rounded-lg bg-base-100 shadow-2xl"
			width="300"
			height="450"
			srcset={`${srcsetURL}${sizes[1]}${movie.poster_path} 500w,
							${srcsetURL}${sizes[2]}${movie.poster_path} 780w`}
			src={srcsetURL + sizes[1] + movie.poster_path}
			decoding="async"
			loading="lazy"
			alt="Movie poster"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title max-w-fit">{movie.title}</h2>
		<p>{movie.year}</p>
		<div class="badge badge-secondary">
			<span class="pr-2">
				{movie.vote_average}
			</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				/>
			</svg>
		</div>
		<div class="card-actions">
			<a sveltekit:prefetch class="btn btn-primary" href={'/movie/' + movie.id}>see more</a>
		</div>
	</div>
</div>
