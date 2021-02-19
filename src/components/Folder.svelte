<script>
	import File from './File.svelte';
	import Icon from './Icon/Icon.svelte';

	export let expanded = false;
	export let name;
	export let files;

	const toggle = () => {
		expanded = !expanded;
	}
</script>

<style>
	button {
    border: none;
    background-color: transparent;
		color: black;
		background-size: 1em 1em;
		font-weight: bold;
		cursor: pointer;
	}

	ul {
		padding: 0.2em 0 0 0.5em;
		margin: 0 0 0 0.4em;
		list-style: none;
		border-left: 2px solid black;
	}

	li {
		padding: 0.2em 0;
	}
</style>

<button on:click={toggle} class="ps-0">
	<Icon name={expanded ? 'folder-open' : 'folder'} />
	{name}
</button>

{#if expanded}
	<ul>
		{#each files as {type, ...file}}
			<li>
				{#if type === 'folder'}
					<svelte:self {...file}/>
				{:else}
					<File {...file}/>
				{/if}
			</li>
		{/each}
	</ul>
{/if}