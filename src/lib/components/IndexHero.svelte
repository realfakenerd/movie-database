<svelte:head>
	<link
		rel="preload"
		href="https://image.tmdb.org/t/p/original/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg"
		as="image"
	/>
</svelte:head>
<div
	class="hero min-h-screen"
	style="position:relative; background-image: url(https://image.tmdb.org/t/p/original/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg);"
>
	<div class="hero-overlay bg-gradient-to-b from-transparent via-base-100/60 to-base-300" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<div class="inline-flex items-end space-x-5">
				<a sveltekit:prefetch href="/">
					<img src="popcorn512.png" width="64" height="64" class="w-16" alt="Pop Korn Logo" />
				</a>
				<h2 class="text-5xl font-bold uppercase">Pop Korn</h2>
			</div>
			<div class="divider" />
			<h3 class="text-2xl">Watch, review, see what's new, repeat.</h3>
			<a
				style="position:absolute;bottom:6.5rem;right: 50%; transform:translateX(50%)"
				class="btn btn-link"
				href="#mainContainer">go to step 3</a
			>
		</div>
	</div>
</div>
