<script lang="ts">
  import Icon from '../Icon/Icon.svelte';
  import Route from './Route.svelte'
  import RouteBody from './RouteBody.svelte'

  const stringify = (json): string => {
    return JSON.stringify(json, null, 2)
  }
</script>

<style style="scss">
  #apiOverview {
    max-height: 80vh;
    overflow: auto;
  }

  #apiOverview :global(.icon) {
    width: 2em!important;
  }

  pre {
    display: inline-block;
  }
</style>

<div class="accordion" id="apiOverview">
  <Route method="GET" slug="/me">
    <RouteBody 
      request="GET http://localhost:6767/api/me" 
      response={stringify({
        "firstname": "Janie",
        "lastname": "Hermann",
        "email": "Jo.Kessler@yahoo.com"
      })} 
  />
  </Route>
  <Route method="GET" slug="/posts">
    <RouteBody 
      request="GET http://localhost:6767/api/posts"
      response={stringify([
        {
          "id": 0,
          "title": "Post n: #0"
        },
        {
          "id": 1,
          "title": "Post n: #1"
        },
        {
          "id": 2,
          "title": "Post n: #2"
        },
        {
          "id": 3,
          "title": "Post n: #3"
        },
        {
          "id": 4,
          "title": "Post n: #4"
        },  
      ])} 
    />
    <div class="d-flex flex-column align-items-center">
      <pre><code>GET http://localhost:6767/api/posts</code></pre>
      <Icon name="arrow-bar-bottom" />
    </div>
  </Route>
  <Route method="GET" slug="/users">
    <pre><code>GET http://localhost:6767/api/posts</code></pre>
  </Route>
  <Route method="GET" slug="/users/:userid">
    <pre><code>GET http://localhost:6767/api/posts</code></pre>
  </Route>
  <Route method="POST" slug="/users/:userid">
    <pre><code>GET http://localhost:6767/api/posts</code></pre>
  </Route>
  <Route method="DELETE" slug="/users/:userid">
    <pre><code>GET http://localhost:6767/api/posts</code></pre>
  </Route>
  <Route method="GET" slug="/users/:userid/comments">
    <pre><code>GET http://localhost:6767/api/posts</code></pre>
  </Route>
</div>