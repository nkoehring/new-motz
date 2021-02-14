<script>
	import { stores } from '@sapper/app';

	export let pages

	const { page } = stores()
	let showMenu = false
	let currentPage = 'index'

	page.subscribe(({ path }) => {
		showMenu = false // toggle menu on page change
		currentPage = path === '/' ? 'index' : path.slice(1)
	})


	let menuItems = [...pages]
	menuItems.sort((pageA, pageB) => pageA.menuPosition - pageB.menuPosition)
</script>

<style>
	nav {
		flex: 1 1 auto;
		background: var(--highlight);
		color: var(--bg);
		z-index: 1;
	}
	#nav-toggle, label[for="nav-toggle"] {
		display: none;
	}

	ol {
		list-style: none;
		margin: 0;
		padding: 0;
		border-top: 3rem solid var(--highlight);
		border-bottom: 3rem solid var(--highlight);
	}

	li {
	  display: block;
		padding-top: .5rem;
	}

	a {
		display: block;
		padding: .2em .2em .2em .3em;
		text-decoration: none;
		color: var(--bg);
		border-bottom: 1px solid var(--fg);
	}

	[aria-current] {
		background: var(--fg);
		background: linear-gradient(90deg, var(--highlight) 0%, white 1%,  white 99%, var(--highlight) 100%);
		border-bottom: none;
	}

	[aria-current] > a {
		padding: .5em;
		color: var(--highlight);
	}

	@media (prefers-color-scheme: dark) {
		nav {
			background: var(--bg);
			color: var(--fg);
			border-right: 2px solid var(--highlight);
		}
		ol {
			border-top-color: var(--bg);
			border-bottom-color: var(--bg);
		}
		a {
			color: var(--highlight);
			padding: .5em;
			border-bottom: 2px solid var(--highlight);
		}
		[aria-current] {
			background: none;
			border-bottom: 2px solid var(--highlight);
		}
		[aria-current] > a {
			color: var(--fg);
		}
		[aria-current] > a::before {
			content: ">";
			display: inline-block;
			margin: 0 .5em 0 -1em;
			color: var(--highlight);
			font-weight: 600;
		}
	}
	@media screen and (max-width: 650px) {
		label[for="nav-toggle"] {
			display: block;
			position: absolute;
			right: -5.0rem;
			height: 4.6rem;
			font-size: 2em;
			background: var(--bg);
			border-right: 5px solid var(--bg);
			cursor: pointer;
		}
		nav {
			--width: calc(100vw - 2rem - 5px);
			position: fixed;
			width: var(--width);
			height: calc(100vh - 16rem);
			left: 0;
			top: 0;
			margin-top: 16rem;
			padding-left: 2rem;
			border-right: 5px solid var(--highlight);
			transition: transform .3s ease-out;
			transform: translate(-100vw);
		}
		#nav-toggle:checked + nav {
			transform: translate(0);
		}
	}
</style>

<input type="checkbox" id="nav-toggle" bind:checked={showMenu} />
<nav>
	<label for="nav-toggle">×&nbsp;&nbsp;☰</label>
	<ol>
		{#each menuItems as page}
		<li aria-current="{ currentPage === page.slug ? 'page' : undefined }">
			<a rel=prefetch href="{`/${page.slug !== 'index' ? page.slug : ''}`}">{page.link}</a>
		</li>
		{/each}
	</ol>
</nav>
