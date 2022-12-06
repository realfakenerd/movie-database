<script lang="ts">
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	const { searchData, query } = data;
	const { movie, tv, person } = searchData;
</script>

<div class="container mx-auto grid grid-cols-1 gap-3 py-32 px-10 md:grid-cols-3">
	<div class="rounded-box h-max bg-base-300 p-5">
		<h2>Search results for <span class="capitalize text-primary">{query}</span></h2>
		<ul class="menu rounded-box menu-compact w-full bg-base-100 p-2 lg:menu-normal">
			<li>
				<a class="justify-between" href={'/search/movie?q=' + query}>
					Movies : <span class="badge badge-primary">{movie.total_results}</span>
				</a>
			</li>
			<li>
				<a class="justify-between" href={'/search/tv?q=' + query}>
					Tv Shows : <span class="badge badge-primary">{tv.total_results}</span>
				</a>
			</li>
			<li>
				<a class="justify-between" href={'/search/person?q=' + query}>
					Person : <span class="badge badge-primary">{person.total_results}</span>
				</a>
			</li>
		</ul>
	</div>
	<div class="col-span-2"><slot /></div>
</div>
