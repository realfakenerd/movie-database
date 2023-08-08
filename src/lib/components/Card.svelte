<script lang="ts">
	export let href = '/';
	export let klass = '';
</script>

<a {href} class="{$$props.class} card {klass} h-[380px] w-full">
	<slot />
	<slot name="person" class="min-h-[428px]" />
</a>
