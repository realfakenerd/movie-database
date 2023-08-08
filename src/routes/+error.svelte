<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let innerWidth = 0;
	let innerHeight = 0;

	onMount(() => {
		innerWidth = window.innerWidth;
		innerHeight = window.innerHeight;
	});
</script>

<section class="flex min-h-screen w-full items-center justify-center">
	<div>
		<div class="my-5">
			<h1 class="text-2xl md:text-4xl font-bold text-warning">
				{$page.status} - <span class="text-sm">{$page.error.message}</span>
			</h1>
			<p>looks like you're into some trouble...</p>
			<p>
				maybe going to the <a class="link-primary link decoration-wavy" href="/">home screen</a> helps
			</p>
		</div>
		<iframe
			src="https://giphy.com/embed/hEc4k5pN17GZq"
			width={innerWidth / 3}
			height={innerHeight / 2}
			frameBorder="0"
			class="giphy-embed"
			allowFullScreen
			title="surprise surprise"
		/>
		<p>
			<a class="link-primary link" href="https://giphy.com/gifs/original-hEc4k5pN17GZq">via GIPHY</a
			>
		</p>
	</div>
</section>
