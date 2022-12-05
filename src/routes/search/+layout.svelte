<script lang="ts">
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	const { searchData } = data;
	const { movie, tv, person } = searchData;
</script>

<div class="grid grid-cols-3 gap-3 container mx-auto py-32 px-10">
	<div class="bg-base-300 h-max p-5 rounded-box">
		<h2>Search results</h2>
		<ul class="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
			<li>
				<a class="justify-between" href="/"
					>Movies : <span class="badge badge-primary">{movie.total_results}</span></a
				>
			</li>
			<li>
				<a class="justify-between" href="/"
					>Tv Shows : <span class="badge badge-primary">{tv.total_results}</span></a
				>
			</li>
			<li>
				<a class="justify-between" href="/"
					>Person : <span class="badge badge-primary">{person.total_results}</span></a
				>
			</li>
		</ul>
	</div>
	<div class="col-span-2"><slot /></div>
</div>
