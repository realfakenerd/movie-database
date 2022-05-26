<script lang="ts">
	let text: string;
	let type: 'a' | 'btn';
	let href: string;

	let additionalClass: string;

	const klass = `text-white transition-colors duration-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none`;

	export { text, type, href, additionalClass };
</script>

{#if type === 'btn'}
	<button class="{klass} {additionalClass}">
		{text}
	</button>
{:else if type === 'a'}
	<a {href} sveltekit:prefetch class="{klass} {additionalClass}">{text}</a>
{/if}
