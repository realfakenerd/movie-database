<script lang="ts">
	import { fly } from 'svelte/transition';
	let query = '';
	let show = false;
	const showInput = () => {
		show ? (show = false) : (show = true);
	};
</script>

{#if show === true}
	<form
		transition:fly={{ x: -20, delay: 180, duration: 200 }}
		id="searchForm"
		data-sveltekit-reload
		action="/search/movie?"
	>
		<div class="relative mr-3">
			<label class="sr-only" for="searchBar"> Search </label>

			<input
				class="input input-bordered input-secondary w-full max-w-md"
				id="searchBar"
				type="search"
				name="q"
				placeholder="Search movies, tv or people..."
			/>
		</div>
	</form>
{/if}
<button
	type="button"
	on:click={showInput}
	class="btn btn-ghost mr-2 text-secondary hover:bg-secondary hover:text-white focus:outline-none focus:ring-4 focus:ring-secondary/30"
>
	<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
		<path
			fill-rule="evenodd"
			d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
			clip-rule="evenodd"
		/>
	</svg>
</button>
