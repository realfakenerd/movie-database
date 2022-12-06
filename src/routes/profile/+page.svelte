<script lang="ts">
	import { page } from '$app/stores';

	const user = $page.data.user;
</script>

<div class="hero min-h-screen">
	<div class="hero-content">
		<section class="inline-flex gap-5">
			<figure class="avatar">
				<div class="w-36 rounded-full">
					<img
						src={'https://www.gravatar.com/avatar/' + user.avatar.gravatar.hash + '.webp?s=200'}
						alt="profile"
					/>
				</div>
			</figure>
			<div class="flex flex-col justify-evenly">
				<h1 class="uppercase font-semibold text-2xl">{user.username}</h1>
				<h2 class="text-xl">{user.name}</h2>
			</div>
		</section>
	</div>
</div>
