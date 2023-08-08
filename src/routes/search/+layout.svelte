<script lang="ts">
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	const { searchData, query } = data;
	const { movie, tv, person } = searchData;
</script>

<svelte:head>
	<title>Popkorn - searching for {query}</title>
</svelte:head>

<div class="flex flex-col gap-3 px-4 py-5 md:py-32">
	<div class="flex flex-wrap items-center justify-between gap-2 md:flex-row-reverse">
		<form id="searchForm" class="flex-grow" data-sveltekit-reload action="/search/movie?">
			<fieldset>
				<label class="sr-only" for="searchBar"> Search </label>
				<input
					class="w-full max-w-3xl rounded-full border-none bg-surface-3
					px-4 py-4 transition placeholder:text-on-background focus:bg-surface-1"
					id="searchBar"
					type="search"
					name="q"
					placeholder="Search movies, tv or people..."
				/>
			</fieldset>
		</form>
		<div class="rounded-box flex flex-grow flex-col gap-2 bg-surface-1 p-4 md:flex-grow-0">
			<h2 class="text-title-medium">
				Search results for <span class="capitalize text-primary">{query}</span>
			</h2>
			<ul class="flex flex-row items-center justify-between gap-2">
				<li class="rounded-lg border border-outline-variant bg-background px-2 py-1">
					<a class="text-label-medium underline" href={'/search/movie?q=' + query}>
						<span>Movies</span>
						<span class="text-label-small">{movie.total_results}</span>
					</a>
				</li>
				<li class="rounded-lg border border-outline-variant bg-background px-2 py-1">
					<a class="text-label-medium underline" href={'/search/tv?q=' + query}>
						<span>Tv Shows</span>
						<span class="text-label-small">{tv.total_results}</span>
					</a>
				</li>
				<li class="rounded-lg border border-outline-variant bg-background px-2 py-1">
					<a class="text-label-medium underline" href={'/search/person?q=' + query}>
						<span>Person</span>
						<span class="text-label-small">{person.total_results}</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<div><slot /></div>
</div>
