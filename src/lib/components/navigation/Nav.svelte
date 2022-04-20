<script lang="ts">
	import MediaQuery from '../MediaQuery.svelte';
	import LargeNav from './LargeNav.svelte';
	import MobileNav from './MobileNav.svelte';

	const darkMode = () => {
		let currentTheme = document.documentElement.getAttribute('data-theme');

		// Switch between `dark` and `light`
		const switchToTheme = currentTheme === 'cusdark' ? 'light' : 'cusdark';

		// Set our currenet theme to the new one
		document.documentElement.setAttribute('data-theme', switchToTheme);
	};
</script>

<nav
	class="navbar fixed z-50 w-full bg-base-100/20 px-5 backdrop-blur-md transition-colors duration-1000 md:space-y-0"
>
	<MediaQuery query="(min-width: 768px)" let:matches>
		{#if matches}
			<LargeNav {darkMode} />
		{:else}
			<MobileNav />
		{/if}
	</MediaQuery>
</nav>
