<script lang="ts">
	import { goto } from '$app/navigation';
	import { searchVal } from '$lib/stores/statsStore';
	import { fly } from 'svelte/transition';
	let inputVal = '';
	let show = false;
	const search = () => {
		goto('/search/movie/' + inputVal);
		console.log(inputVal);

		searchVal.set(inputVal);
		show = false;
		inputVal = '';
	};
	const showInput = () => {
		show ? (show = false) : (show = true);
	};
</script>

{#if show === true}
	<form
		transition:fly={{ x: -20, delay: 180, duration: 200 }}
		id="searchForm"
		on:submit|preventDefault={search}
	>
		<div class="relative mr-3">
			<label class="sr-only" for="searchBar"> Search </label>

			<input
				bind:value={inputVal}
				class="w-full rounded border-2 border-secondary py-3 text-sm text-neutral"
				id="searchBar"
				type="text"
				placeholder="Search movies, tv or people..."
			/>
		</div>
	</form>
{/if}
<button
	type="button"
	on:click={showInput}
	class="transition-color mr-2 inline-flex items-center rounded-lg p-2.5 text-center text-sm font-medium text-secondary duration-200 hover:bg-secondary hover:text-white focus:outline-none focus:ring-4 focus:ring-secondary/30"
>
	<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
		<path
			fill-rule="evenodd"
			d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
			clip-rule="evenodd"
		/>
	</svg>
</button>
