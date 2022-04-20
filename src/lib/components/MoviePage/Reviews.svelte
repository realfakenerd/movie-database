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
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
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
