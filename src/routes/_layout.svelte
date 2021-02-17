<script lang="ts">
	import Nav from '../components/Nav.svelte';

	export let segment: string;
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

<Nav {segment}/>

<main>
	<slot></slot>
</main>