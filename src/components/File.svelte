<script>
	export let name
  export let content
  import { onMount } from "svelte"
  import { initHighlightJs } from "../utils"

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

  pre {
    max-width: 300px;

    code {
      display: inline-block;
    }
  }
  
  .editor {
    width: fit-content;
    overflow: hidden;

    .editor-toolbar {
      div {
        height: 12px;
        width: 12px;
      }
    }
  }
</style>

<span on:click={toggle} class="ps-0">📜 {name}</span>

<div class="editor d-flex flex-column ms-4 mt-2 rounded-3" class:d-none={!expended}>
  <div class="editor-toolbar d-flex ps-2 py-1 bg-light">
    <div class="rounded-circle mx-1 bg-danger"> </div>
    <div class="rounded-circle mx-1 bg-warning"> </div>
    <div class="rounded-circle mx-1 bg-success"> </div>
  </div>
  <pre>
    <code class="json rounded-3 p-3">{JSON.stringify(content, null, 2)}</code>
  </pre>
</div>
