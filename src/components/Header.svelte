<script lang="ts">
  import bg from '../assets/restapify-icon-bg.svg'

  import Folder from './Folder.svelte'
  import ApiOverview from "./ApiOverview/ApiOverview.svelte";
  import Terminal from "./Terminal.svelte";
  import Icon from "./Icon/Icon.svelte";

  	let root = [
      {
        type: 'folder',
        name: 'posts',
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
        expanded: true,
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
            expanded: true,
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
                name: '*.404.{NOT_FOUND}.json',
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
</script>

<style lang="scss">
  header {
    position: relative;
    min-height: 80vh;

    h1 {
      margin-top: 10vh
    }

    #bg {
      position: absolute;
      top: -10%;
      left: -20%;
      width: 120%;
      opacity: .3;
      z-index: -1;
    }

    #arrowSeparator :global(.icon) {
      width: 2.5em;
    }

    .api-overview {
      height: 100%;
      overflow: auto;
    }

    #filesTree {
      height: 80vh;
      overflow: auto;
    }

    #filesTree :global(img) {
      width: 1.3em!important;
    }

    @media (max-width: 768px) { 
      overflow-x: hidden;

      #bg {
        top: -5%;
        left: -50%;
        height: 100vh;
        width: auto;
      }

      #arrowSeparator {
        transform: rotate(90deg);
        margin: 1em 0;
      }
    }
  }
</style>

<header class="px-3 d-flex flex-column">
  <img src={bg} id="bg" alt="Design colors" />
  <h1 class="text-center px-2 px-md-5">
    Quickly and easily deploy a mocked REST API
  </h1>
  <p class="text-center fs-5 lh-sm">Save time on the development of your Frontend project by avoiding wasting it on the API mocking.</p>
  <Terminal class="mx-auto mt-5" content={`$ yarn global add restapify 
# or npm install -g restapify
$ restapify serve mockedApi/`} language="bash"/>
  <div class="row justify-content-center mt-5">
    <div class="col-11 col-md-5 col-lg-4 p-0">
      <h3>#1 Define routes
        <a href="/docs" class="fs-6 text-decoration-none">[docs]</a>
      </h3>
      <div id="filesTree" class="p-3 bg-light border border-dark rounded-3">
        <Folder name="mockedApi" files={root} expanded/>
      </div>
    </div>
    <div id="arrowSeparator" class="col-12 col-md-1 align-self-center d-flex justify-content-center">
      <Icon name='arrow-right' />
    </div>
    <div class="col-11 col-md-5 col-lg-4 p-0 api-overview">
      <h3>#2 Consume the API</h3>
      <ApiOverview />
    </div>
  </div>
</header>