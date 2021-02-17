<script lang="ts">
  import { onMount } from "svelte"
  import { initHighlightJs } from "../utils"

  import Folder from './Folder.svelte'

  	let root = [
      {
        type: 'folder',
        name: 'posts',
        expanded: true,
        files: [
          { 
            type: 'file', 
            name: '*.json',
            expended: true,
            content: [
              "#for i in range(5)",
              {
                id: "n:[i]",
                title: "Post n: #[i]"
              },
              "#endfor"
            ]
          }
        ]
      },
      { 
        type: 'file', 
        name: 'me.json',
        content: {
          firstname: "[#faker:name:firstName]",
          lastname: "[#faker:name:lastName]",
          email: "[#faker:internet:email]"
        }
      }
    ];

  onMount(() => {
    initHighlightJs()
  })
</script>

<style>
  #filesTree {
    color: #dcdcdc;
    background-color: #3f3f3f;
  }
</style>

<header class="container">
  <h1 class="text-center px-5">
    Quickly and easily deploy a mocked REST API
  </h1>
  <div id="filesTree" class="row p-3">
    <Folder name="mockedApi" files={root} expanded/>
  </div>
</header>