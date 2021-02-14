<script>
	import { pages } from '../pages'
	import HeaderImage from 'images/motz-header.jpg'
	import Nav from '../components/Nav.svelte'
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
		max-width: 100vw;
		margin-left: 380px;
		float: none;
	}

	#content-wrapper {
		display: flex;
		flex-flow: row nowrap;
		box-sizing: border-box;
		margin: 0 auto;
		padding: 4rem 3rem;
	}
	main {
		flex: 0 1 auto;
		width: calc(78% - 2rem);
		margin-left: 2rem;
		text-align: justify;
	}
	@media screen and (prefers-color-scheme: dark) {
		#main-header {
			mix-blend-mode: lighten;
			filter: invert();
		}
	}

	@media screen and (max-width: 650px) {
		main, #main-header {
			width: 100%;
			margin-left: 0;
		}
	}
</style>

<header>
	<h1 class="hidden">berliner straßenmagazin motz</h1>
	<img id="main-header" aria-hidden src="{HeaderImage}" alt="berliner straßenmagazin motz" />
</header>

<div id="content-wrapper">
	<Nav {pages} />

	<main>
		<slot></slot>
	</main>
</div>
