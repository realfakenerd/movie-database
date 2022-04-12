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

<section class="my-5 rounded-2xl bg-base-300 p-5">
	<h2 class="text-4xl font-bold">Reviews: {movieComents.length}</h2>
	<div class="grid grid-cols-1 gap-x-8 md:grid-cols-2">
		{#each movieComents as comm (comm.id)}
			<div tabindex="0" class="collapse collapse-arrow my-5 rounded-2xl">
				<input type="checkbox" class="peer" />
				<div
					class="collapse-title bg-primary text-xl font-medium capitalize 
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
					<p class="rounded-2xl bg-base-200 p-5">{comm.content}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
