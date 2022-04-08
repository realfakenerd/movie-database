<script lang="ts">
	import { goto } from '$app/navigation';
	let inputVal = '';

	const search = () => {
		goto('/search/' + inputVal);
		inputVal = '';
	};
</script>

<form class="form-control" on:submit|preventDefault={search}>
	<div class="input-group">
		<input
			bind:value={inputVal}
			type="text"
			id="searchBar"
			placeholder="search movies..."
			class="input input-primary"
		/>
		<button class="btn btn-outline btn-primary">
			<span class="material-icons-round bg-transparent text-secondary"> search </span>
		</button>
	</div>
</form>
