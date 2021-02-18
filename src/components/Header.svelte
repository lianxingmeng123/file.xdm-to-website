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
        type: 'folder',
        name: 'users',
        files: [
          { 
            type: 'file', 
            name: '*.json',
            content: [
              "#for i in range([q:limit|25])",
              {
                id: "n:[i]",
                email: "[#faker:internet:email]"
              },
              "#endfor"
            ]
          },
          {
            type: 'folder',
            name: '[userid]',
            files: [
              { 
                type: 'file', 
                name: '*.json',
                content: {
                  id: "n:[userid]",
                  email: "[#faker:internet:email]"
                },
              },
              { 
                type: 'file', 
                name: '*.404.{ERR}.json',
                content: [null],
              },
              { 
                type: 'file', 
                name: '*.DELETE.401.{INV_CRED}.json',
                content: [null],
              },
              { 
                type: 'file', 
                name: '*.DELETE.json',
                content: {
                  "#header": {
                    "Content-Type": "text/html; charset=UTF-8"
                  },
                  "#body": {
                    "success": true,
                  }
                }
              },
              { 
                type: 'file', 
                name: '*.POST.201.json',
                content: {
                  success: true,
                  data: {
                    id: "n:[userid]",
                    email: "[#faker:internet:email]"
                  }
                }
              },
              { 
                type: 'file', 
                name: 'comments.json',
                content: [
                  "#for i in range([q:limit|25])",
                  {
                    id: "n:[i]",
                    creatorId: "n:[userid]",
                    content: "[#faker:lorem:sentences]"
                  },
                  "#endfor"
                ]
              }
            ]
          },
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