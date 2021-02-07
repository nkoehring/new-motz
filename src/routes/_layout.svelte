<script>
	import { pages } from '../pages'
	import HeaderImage from 'images/motz-header.jpg'
	import Nav from '../components/Nav.svelte'

	export let segment
</script>

<style>
	header, #content-wrapper {
		max-width: 102rem;
		width: 100%;
	}

	header {
		display: block;
		margin: 5rem auto 0;
	}

	#main-header {
		width: 474px;
		height: 100px;
		margin-left: 320px;
		mix-blend-mode: lighten;
		filter: invert();
	}

	#content-wrapper {
		display: flex;
		flex-flow: row nowrap;
		box-sizing: border-box;
		margin: 0 auto;
		padding: 4rem 3rem;
		font-size: 2rem;
	}
	main {
		flex: 0 1 auto;
		width: calc(78% - 2rem);
		margin-left: 2rem;
		text-align: justify;
	}
</style>

<header>
	<h1 class="hidden">berliner straßenmagazin motz</h1>
	<img id="main-header" aria-hidden src="{HeaderImage}" alt="berliner straßenmagazin motz" />
</header>

<div id="content-wrapper">
	<Nav {segment} {pages} />

	<main>
		<slot></slot>
	</main>
</div>
