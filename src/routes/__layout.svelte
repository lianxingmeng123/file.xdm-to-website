<script lang="ts">
	import { dev } from '$app/env';

	import Nav from '../components/Navbar.svelte'

	export let segment
</script>

<style>
	:global(html, body) {
		position: relative;
		width: 100%;
		height: 100%;
	}

	:global(body) {
		margin: 0;
		font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		font-size: 14px;
		line-height: 1.5;
		color: #333;
	}

	:global(#root) {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}

	@media (min-width: 400px) {
		:global(body) {
			font-size: 16px;
		}
	}
	main {
		position: relative;
		margin: 0 auto;
		box-sizing: border-box;
		overflow-x: hidden;
    overflow: hidden;
		flex-grow: 1;
		width: 100%;
	}
	:global(*:not(pre) > code) {
		color: white!important;
		padding: .2em .4em;
		font-size: 80%;
		background-color: #3F3F3F;
		border-radius: .25rem;
		white-space: nowrap;
	}
</style>

<Nav {segment} />

<svelte:head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.6.0/highlight.min.js" integrity="sha512-zol3kFQ5tnYhL7PzGt0LnllHHVWRGt2bTCIywDiScVvLIlaDOVJ6sPdJTVi0m3rA660RT+yZxkkRzMbb1L8Zkw==" crossorigin="anonymous"></script>

	{#if !dev}
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-D7FP9VSLXX"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-D7FP9VSLXX');
		</script>
	{/if}
</svelte:head>

<main>
	<slot></slot>
</main>