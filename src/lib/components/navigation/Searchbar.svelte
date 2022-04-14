<script lang="ts">
	import { goto } from '$app/navigation';
	let inputVal = '';
	let show = true;
	const search = () => {
		goto('/search/' + inputVal);
		inputVal = '';
	};
</script>

<form on:submit|preventDefault={search}>
	<div class:hidden={show} class="mr-3">
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
<button on:click={() => (show ? (show = false) : (show = true))} class="btn btn-ghost">
	<span class="material-icons-rounded bg-transparent text-secondary"> search </span>
</button>
