<script lang="ts">
	import type { Reviews } from '$lib/types';
	export let movieComents: Reviews[];

	const startPath =
		'M12,17.27l4.15,2.51c0.76,0.46,1.69-0.22,1.49-1.08l-1.1-4.72l3.67-3.18c0.67-0.58,0.31-1.68-0.57-1.75l-4.83-0.41 l-1.89-4.46c-0.34-0.81-1.5-0.81-1.84,0L9.19,8.63L4.36,9.04c-0.88,0.07-1.24,1.17-0.57,1.75l3.67,3.18l-1.1,4.72 c-0.2,0.86,0.73,1.54,1.49,1.08L12,17.27z';

	const popIt = (str: string) => {
		if (str !== null && str.startsWith('/')) {
			const ret = str.split('');
			ret.shift();
			return ret.join('');
		}
		return str;
	};
	console.log(movieComents);
</script>

<section class="my-5 p-5 bg-base-300 rounded-2xl">
	<h2 class="text-4xl font-bold">Reviews</h2>
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
								<svg
									xmlns="http://www.w3.org/2000/svg"
									enable-background="new 0 0 24 24"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#FFFFFF"
									><g
										><path d="M0,0h24v24H0V0z" fill="none" /><path
											d="M0,0h24v24H0V0z"
											fill="none"
										/></g
									><g><path d={startPath} /></g></svg
								>
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
