<script lang="ts">
	import type { Images } from '$lib/types';
	import type { PopularResult } from '$lib/types/movies';
	import { formatDate } from '$lib/utils';

	let movie: PopularResult;
	let images: Images;

	export { images, movie };

	const sizeOne = images.secure_base_url + images.poster_sizes[4] + movie.poster_path;
	const sizeTwo = images.secure_base_url + images.poster_sizes[5] + movie.poster_path;
	const sizeOriginal = images.secure_base_url + images.poster_sizes[6] + movie.poster_path;
</script>

<a
	data-sveltekit-prefetch
	class="lg:w-56 card card-compact image-full transition duration-300 ease-out transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/30 group"
	href={'/movie/' + movie.id}
>
	<figure>
		<img
			width="300"
			height="450"
			srcset={`${sizeOne} 500w, ${sizeTwo} 780w`}
			src={sizeOriginal}
			loading="lazy"
			alt="Movie poster"
		/>
	</figure>

	<div class="card-body">
		<h1 class="card-title text-center">{movie.title}</h1>
		<div class="h-full flex flex-col justify-between">
			<div class="badge gap-1">
				<span>{movie.vote_average}</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="group-hover:animate-spin h-4 w-4 text-yellow-300"
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
					<p>{formatDate(movie.release_date)}</p>
				</div>
			</div>
		</div>
	</div>
</a>
