<script lang="ts">
	import RedirectionMessage from '../components/RedirectionMessage.svelte'
	export let status: number;
	export let error: Error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		text-align: center;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Error {status} • Restapify</title>
</svelte:head>

<h1 class="mt-5">Error {status}</h1>

{#if status === 404}
	 <RedirectionMessage />
{/if}

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
