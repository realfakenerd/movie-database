<script>
	import { userInfo } from '$lib/stores/userStore';
	console.log($userInfo);
</script>

<section class="mx-auto grid place-items-center py-20">
	<div class="card w-96 bg-base-100 shadow-xl">
		<div class="card-body">
			<div class="avatar self-center">
				<div
					class="w-24 rounded-full bg-primary ring ring-primary ring-offset-2 ring-offset-base-100"
				>
					<img alt="profile art" src="{'https://avatars.dicebear.com/api/croodles-neutral/' + $userInfo.name}.svg" />
				</div>
			</div>
			<h2 class="card-title">{$userInfo.name}</h2>
			<p>If a dog chews shoes whose shoes does he choose?</p>
			<div class="card-actions justify-end">
				<button class="btn btn-primary">Buy Now</button>
			</div>
		</div>
	</div>
</section>
