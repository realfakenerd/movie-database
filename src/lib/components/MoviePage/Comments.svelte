<script lang="ts">
	import type { Reviews } from '$lib/types';
	import { animate, stagger } from 'motion';
	import { onMount } from 'svelte';

	export let movieComents: Reviews[];
	export let movieRating;
	export let totalRating;
	let totalContent = 400;
	const showOrCollapse = (content: number) => {
		if (totalContent === content) {
			totalContent = 500;
		} else {
			totalContent = content;
		}
		return '' as any;
	};

	const rating = Array(10);

	onMount(() => {
		animate(
			'blockquote',
			{
				opacity: [0, 5]
			},
			{
				duration: 1,
				delay: stagger(0.5)
			}
		);
	});

	const popIt = (str: string) => {
		if (str !== null && str.startsWith('/http')) {
			const ret = str.split('');
			ret.shift();
			return ret.join('');
		}
		return 'https://www.gravatar.com/avatar' + str;
	};
</script>

<section class="my-5 bg-base-300">
	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
		<h2 class="text-xl font-bold sm:text-2xl">Customer Reviews</h2>

		<div class="mt-4 flex items-center">
			<p class="text-3xl font-medium">
				{movieRating}
				<span class="sr-only"> Average review score </span>
			</p>

			<div class="ml-4">
				<div class="-ml-1 flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-yellow-400"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-yellow-400"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-yellow-400"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-yellow-400"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-gray-200"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/>
					</svg>
				</div>

				<p class="mt-0.5 text-xs text-gray-500">Based on {totalRating} reviews</p>
			</div>
		</div>

		<div class="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
			{#each movieComents as mc (mc.id)}
				<blockquote>
					<header class="sm:flex sm:items-center">
						{#each rating as star, i}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 text-yellow-400"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
						{/each}
						{#if mc.author_details.avatar_path !== null}
							<div class="avatar mt-0.5 ml-5">
								<div class="w-8 rounded-full ring ring-secondary">
									<img src={popIt(mc.author_details.avatar_path)} alt="Avatar art" />
								</div>
							</div>
						{:else}
							<div class="avatar placeholder mt-0.5 ml-5">
								<div class="ring ring-secondary text-neutral-content rounded-full w-8">
									<p class="text-xs">{mc.author.split('')[0]}</p>
								</div>
							</div>
						{/if}
					</header>
					<div class="my-2 space-y-5 bg-base-100 p-5">
						<p class="prose mt-2">
							{@html mc.content.slice(0, totalContent)}
						</p>

						{#if mc.content.length >= 500}
							<button class="btn btn-sm btn-block" on:click={showOrCollapse(mc.content.length)}>
								{totalContent == mc.content.length ? 'collapse' : 'show more'}
							</button>
						{/if}
					</div>

					<footer class="mt-4">
						<p class="text-xs">{mc.author} - {mc.created_at}</p>
					</footer>
				</blockquote>
			{/each}
		</div>
	</div>
</section>
