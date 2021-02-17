<script lang="ts">
	import Nav from '../components/Nav.svelte';
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
</style>

<Nav />

<svelte:head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.6.0/highlight.min.js" integrity="sha512-zol3kFQ5tnYhL7PzGt0LnllHHVWRGt2bTCIywDiScVvLIlaDOVJ6sPdJTVi0m3rA660RT+yZxkkRzMbb1L8Zkw==" crossorigin="anonymous"></script>
</svelte:head>

<main>
	<slot></slot>
</main>