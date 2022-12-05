<script lang="ts">
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	const { searchData, query } = data;
	const { movie, tv, person } = searchData;
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-3 container mx-auto py-32 px-10">
	<div class="bg-base-300 h-max p-5 rounded-box">
		<h2>Search results for <span class="capitalize text-primary">{query}</span></h2>
		<ul class="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
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
