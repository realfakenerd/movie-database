<script lang="ts">
	import routes from '$lib/routes';
	import { handleScroll } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import Searchbar from './Searchbar.svelte';

</script>

<header class="fixed bottom-0 z-50 w-full md:bottom-full md:top-0">
	<nav class="hidden flex-1 md:flex py-4">
		{#each routes as url, index (index)}
			<a class="btn" href={url.path}>
				{url.title}
			</a>
		{/each}
		<Searchbar />
	</nav>
	<section class="flex flex-col gap-2">
		<Searchbar class="self-end pr-2" />
		<nav
			use:handleScroll
			class="transition-all duration-200 flex h-20 flex-none flex-grow-0 flex-row items-start gap-2 bg-surface-variant py-0 px-2 md:hidden"
		>
			{#each routes as { path, title, icon } (title)}
				<a
					href={path}
					class="flex h-20 flex-none flex-grow flex-col items-center justify-center gap-1 px-0 pt-3 pb-4"
				>
					<div
						class="group-hover:bg-secondary flex h-8 w-16 flex-col items-center justify-center rounded-2xl p-0 transition-all duration-300"
					>
						<span
							class="fill-on-background group-hover:fill-on-secondary flex h-8 w-16 flex-col items-center justify-center rounded-2xl p-0"
						>
							<Icon {icon} width="24px" />
						</span>
						<h3 class="order-1 h-4 flex-none flex-grow-0 self-stretch text-center text-label-small">
							{title}
						</h3>
					</div>
				</a>
			{/each}
		</nav>
	</section>
</header>

<style>
	nav {
		view-transition-name: nav;
	}
</style>
