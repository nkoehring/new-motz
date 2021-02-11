<script context="module">
	import { findPage } from '../pages'

	export function preload() {
		const page = findPage('index')
		return { page }
	}
</script>

<script>
	export let page;
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

{@html page.html}
