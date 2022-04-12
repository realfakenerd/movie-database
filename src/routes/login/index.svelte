<script lang="ts">
	import { goto } from '$app/navigation';
	let values = {
		email: '',
		name: '',
		age: '',
		id: Math.ceil(Math.random() * 999 * (Math.random() * 3))
	};

	const submitValues = () => {
		localStorage.setItem('login-info', JSON.stringify(values));
		goto('/profile/' + values.id);
	};
</script>

<h2 class="text-center text-2xl">Your info</h2>

<div class="min-h-[70vh] p-10">
	<form on:submit|preventDefault={submitValues} class="grid grid-cols-1 lg:grid-cols-3">
		<section class="form-control">
			<label for="hisEmail" class="label">
				<span class="label-text">Your Email</span>
			</label>
			<label class="input-group">
				<span>Email</span>
				<input
					bind:value={values.email}
					id="hisemail"
					type="text"
					placeholder="luke_skywalker@force.com"
					class="input input-bordered input-primary"
					required
				/>
			</label>
		</section>
		<section class="form-control">
			<label for="hisName" class="label">
				<span class="label-text">Your Name</span>
			</label>
			<label class="input-group">
				<span>Name</span>
				<input
					bind:value={values.name}
					id="hisName"
					type="text"
					placeholder="Luke Skywalker"
					class="input input-bordered input-primary"
					required
				/>
			</label>
		</section>
		<section class="form-control">
			<label for="hisAge" class="label">
				<span class="label-text">Your Age</span>
			</label>
			<label class="input-group">
				<span>Age</span>
				<input
					bind:value={values.age}
					id="hisAge"
					type="number"
					class="input input-bordered input-primary"
					required
				/>
			</label>
		</section>
		<button class="btn btn-primary my-10 max-w-md md:col-start-2 md:col-end-3">sigin</button>
	</form>
</div>
