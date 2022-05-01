<script lang="ts">
	import { goto } from '$app/navigation';
	import { searchVal } from '$lib/stores/statsStore';
	let inputVal = '';
	let show = false;
	const search = () => {
		goto('/search/movie/' + inputVal);
		searchVal.set(inputVal);
		show = false;
		inputVal = '';
	};
	const showInput = () => {
		show ? (show = false) : (show = true);
	};
</script>

{#if show === true}
	<form on:submit|preventDefault={search}>
		<div class="mr-3">
			<input
				bind:value={inputVal}
				type="text"
				id="searchBar"
				placeholder="search movies..."
				class="input input-primary"
				required
			/>
		</div>
	</form>
{/if}
<button on:click={showInput} class="btn btn-ghost">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-5 w-5 text-secondary"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path
			fill-rule="evenodd"
			d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
			clip-rule="evenodd"
		/>
	</svg>
</button>
