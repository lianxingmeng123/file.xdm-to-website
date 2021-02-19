<script>
  import { onMount } from "svelte"
  import { initHighlightJs } from "../utils"
  import Terminal from './Terminal.svelte'
	import Icon from './Icon/Icon.svelte';

  import arrowIcon from '../assets/arrow-90deg-down.svg'

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
	button {
    border: none;
    background-color: transparent;
    position: relative;
		padding: 0 0 0 1.5em;
		background: 0 0.1em no-repeat;
		background-size: 1em 1em;
		cursor: pointer;

    img {
      position: absolute;
      left: 100%;
      top: 50%;
      transform: rotateY(180deg);
      width: 1.5em;
    }
	}
</style>

<button on:click={toggle} class="ps-0">
  <Icon name="file-earmark-text" /> {name}
  <img 
    src={arrowIcon} 
    alt="File content indicator"
    class:d-none={!expended} 
    class="ms-3"
  />
</button>

<div class:d-none={!expended} class="mt-4">
  <Terminal class="ms-4 mt-2" content={JSON.stringify(content, null, content[0] !== null ? 2 : 0)} language="json" />
</div>
