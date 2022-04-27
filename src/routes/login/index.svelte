<script lang="ts">
	import { goto } from '$app/navigation';
	import { userInfo } from '$lib/stores/userStore';
	import { v4 as uuid } from 'uuid';
	let pName = '';
	let pEmail = '';
	let pAge = '';
	let id = uuid();
	const submitValues = () => {
		let values = JSON.parse(`{
			"email": "${pEmail}",
			"name": "${pName}",
			"age": "${pAge}",
			"id": "${id}",
			"isLogged": "true"
		}`);
		userInfo.set(values);
		goto('/profile/');
	};
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">{pName ? `${pName} ,we greet you!` : ''}</h1>
			<p class="py-6">Save your collections and review movies or tvshows</p>
		</div>
		<section class="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
			<form on:submit|preventDefault={submitValues}>
				<div class="card-body">
					<div class="form-control">
						<label for="hisName" class="label">
							<span class="label-text">Your Name</span>
						</label>
						<input
							required
							bind:value={pName}
							type="text"
							id="hisName"
							placeholder="Luke Skywalker"
							class="input input-bordered"
						/>
					</div>
					<div class="form-control">
						<label for="hisEmail" class="label">
							<span class="label-text">Your Email</span>
						</label>
						<input
							required
							bind:value={pEmail}
							type="text"
							id="hisEmal"
							placeholder="luke@skywalker.com"
							class="input input-bordered"
						/>
					</div>
					<div class="form-control">
						<label for="hisPass" class="label">
							<span class="label-text">Your Password</span>
						</label>
						<input
							required
							type="password"
							id="hisPass"
							placeholder="*******"
							class="input input-bordered"
						/>
						<label for="hisReapeatedPass" class="label">
							<span class="label-text">Repeat Your Password</span>
						</label>
						<input
							required
							type="password"
							id="hisReapeatedPass"
							placeholder="*******"
							class="input input-bordered"
						/>
						<div class="label">
							<a href="/" class="link link-hover label-text-alt">Forgot password?</a>
						</div>
					</div>
					<div class="form-control mt-6">
						<button class="btn btn-primary">Login</button>
					</div>
				</div>
			</form>
		</section>
	</div>
</div>
