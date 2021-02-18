<script>
  import { onMount } from "svelte"
  import { initHighlightJs } from "../utils"
  import Terminal from './Terminal.svelte'

	export let name
  export let content
  export let expended = false

  const toggle = () => {
		expended = !expended
	}

  onMount(() => {
    initHighlightJs()
  })
</script>

<style lang="scss">
	span {
		padding: 0 0 0 1.5em;
		background: 0 0.1em no-repeat;
		background-size: 1em 1em;
		cursor: pointer;
	}
</style>

<span on:click={toggle} class="ps-0">📜 {name}</span>

<div class:d-none={!expended}>
  <Terminal content={JSON.stringify(content, null, content[0] !== null ? 2 : 0)} language="json" />
</div>
