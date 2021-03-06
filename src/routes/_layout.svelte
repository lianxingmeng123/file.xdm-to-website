<script lang="ts">
	import Nav from '../components/Navbar.svelte'

	export let segment
</script>

<style>
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
</svelte:head>

<main>
	<slot></slot>
</main>