<script lang="ts">
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	let inputVal = '';

	const search = () => {
		goto('/search/' + inputVal);
		inputVal = '';
	};
</script>

<form class="form-control" on:submit|preventDefault={search}>
	<label class="input-group">
		<span>search movies</span>
		<input bind:value={inputVal} type="text" id="searchBar" class="input input-primary" />
		{#if inputVal}
			<span class="btn btn-primary">
				<button in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>search</button>
			</span>
		{/if}
	</label>
</form>
