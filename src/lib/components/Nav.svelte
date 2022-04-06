<script>
	import Searchbar from './Searchbar.svelte';
</script>

<nav class="navbar p-5 flex-col space-y-3 md:space-y-0 md:flex-row">
	<div class="flex-1">
		<a sveltekit:prefetch class="btn btn-ghost" href="/">Home</a>
	</div>
	<div class="flex-none">
		<Searchbar />
	</div>
</nav>
