<script>
	import Searchbar from './Searchbar.svelte';
</script>

<nav class="navbar p-5 flex-col space-y-3 md:space-y-0 md:flex-row">
	<div class="navbar-start items-end space-x-3">
		<a sveltekit:prefetch href="/">
			<img src="popcorn512.png" class="w-16" alt="Pop Korn Logo" />
		</a>
		<h3 class="text-3xl uppercase font-bold">Pop Korn</h3>
	</div>
	<div class="navbar-end">
		<Searchbar />
	</div>
</nav>
