<script lang="ts">
	export let href = '/';
	export let isLink = false;
	export let isRoute = true;

	const tag = isLink ? 'a' : 'section';

	const a = {
		href,
		rel: 'noreferrer',
		target: isRoute ? '_self' : '_blank'
	};
</script>

<svelte:element
	this={tag}
	{...isLink ? a : {}}
	class="rounded-xl p-2 relative bg-surface-variant gap-3 text-on-surface flex flex-col items-center min-w-[228px] {$$props.class ?? ''}"
>
	<slot />
</svelte:element>
