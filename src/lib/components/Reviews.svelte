<script lang="ts">
	import type { Reviews } from '$lib/types';

	export let movieComents: Reviews[];

	const popIt = (str: string) => {
		if (str !== null && str.startsWith('/http')) {
			const ret = str.split('');
			ret.shift();
			return ret.join('');
		}
		return 'https://www.gravatar.com/avatar' + str;
	};
</script>

<section class="my-5 p-5 bg-base-300 rounded-2xl">
	<h2 class="text-4xl font-bold">Reviews: {movieComents.length}</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-x-8">
		{#each movieComents as comm (comm.id)}
			<div tabindex="0" class="collapse collapse-arrow rounded-2xl my-5">
				<input type="checkbox" class="peer" />
				<div
					class="collapse-title capitalize text-xl font-medium bg-primary 
                text-primary-content peer-checked:bg-base-100 peer-checked:text-base-content"
				>
					<div class="flex flex-row items-center space-x-5">
						<span>
							{comm.author}
						</span>
						{#if comm.author_details.avatar_path !== null}
							<div class="avatar">
								<div class="w-10 rounded-xl">
									<img
										src={popIt(comm.author_details.avatar_path)}
										alt={'Avatar of' + comm.author}
									/>
								</div>
							</div>
						{/if}
						{#if comm.author_details.rating !== null}
							<div>
								<span class="material-icons-round"> star </span>
							</div>
							{comm.author_details.rating}
						{/if}
					</div>
				</div>
				<div
					class="collapse-content bg-primary text-primary-content 
                peer-checked:bg-base-100 peer-checked:text-base-content"
				>
					<p class="p-5 bg-base-200 rounded-2xl">{comm.content}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
