<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>
<script lang="ts">
	import { dev } from '$app/env';

	import RedirectionMessage from '../components/RedirectionMessage.svelte'
	export let status: number;
	export let error: Error;
</script>

<style>
	h1 {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		text-align: center;
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
