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
    border-color: black;
    overflow: auto;
  }

  #apiOverview :global(.icon) {
    width: 2em!important;
  }

  #apiOverview :global(.accordion-button) {
    border-color: black;
  }

  pre {
    display: inline-block;
  }
</style>

<div class="accordion bg-light" id="apiOverview">
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
  </Route>

  <Route method="GET" slug="/users">
    <RouteBody 
      request="GET http://localhost:6767/api/users"
      response={stringify([
        {
          "id": 0,
          "email": "Julianne.Hegmann58@gmail.com"
        },
        {
          "id": 1,
          "email": "Sim44@gmail.com"
        },
        '. . .',
        {
          "id": 24,
          "email": "Evalyn_Kovacek71@hotmail.com"
        }
      ])} 
    />
    <hr>
    <RouteBody 
      request="GET http://localhost:6767/api/users?limit=3"
      response={stringify([
        {
          "id": 0,
          "email": "Clyde.Cartwright@gmail.com"
        },
        {
          "id": 1,
          "email": "Maximilian42@yahoo.com"
        },
        {
          "id": 2,
          "email": "Betsy40@gmail.com"
        }
      ])} 
    />
  </Route>

  <Route method="GET" slug="/users/:userid">
    <div class="d-flex flex-column align-items-center">
      <pre class="mb-0"><code class="text rounded-3">GET http://localhost:6767/api/users/42</code></pre>
      <Icon name="arrow-bar-bottom" />
    </div>
    <ul class="nav nav-tabs mb-3 align-items-baseline" id="tabs-tab" role="tablist">
      <h5 class="mb-0 me-2">State:</h5>
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="tabs-default-tab" data-bs-toggle="tab" data-bs-target="#tabs-default" type="button" role="tab" aria-controls="tabs-default" aria-selected="true">
          _default
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="tabs-not-found-tab" data-bs-toggle="tab" data-bs-target="#tabs-not-found" type="button" role="tab" aria-controls="tabs-not-found" aria-selected="false">
          NOT_FOUND
        </button>
      </li>
    </ul>
    <div class="tab-content" id="tabs-tabContent">
      <div class="tab-pane fade show active" id="tabs-default" role="tabpanel" aria-labelledby="tabs-default-tab">
        <p class="fw-bold mb-1">Status: 200</p>
        <pre class="w-100 rounded-3">
          <code>{stringify({
            "id": 42,
            "email": "Betsy40@gmail.com"
          })}</code>
        </pre>
      </div>
      <div class="tab-pane fade" id="tabs-not-found" role="tabpanel" aria-labelledby="tabs-not-found-tab">
        <p class="fw-bold mb-1">Status: 404</p>
      </div>
    </div>
  </Route>
  <Route method="POST" slug="/users/:userid">
    <RouteBody 
      request="POST http://localhost:6767/api/users/42"
      status={201}
      response={stringify({
        "success": true,
        "data": {
          "id": 42,
          "email": "Maximilian42@yahoo.com"
        }
      })} 
    />
  </Route>
  <Route method="DELETE" slug="/users/:userid">
    <ul class="nav nav-tabs mb-3 align-items-baseline" id="tabs-tab" role="tablist">
      <h5 class="mb-0 me-2">State:</h5>
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="tabs-del-user-default-tab" data-bs-toggle="tab" data-bs-target="#tabs-del-user-default" type="button" role="tab" aria-controls="tabs-del-user-default" aria-selected="true">_default</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="tabs-inv-cred-tab" data-bs-toggle="tab" data-bs-target="#tabs-inv-cred" type="button" role="tab" aria-controls="tabs-inv-cred" aria-selected="false">
          INV_CRED
        </button>
      </li>
    </ul>
    <div class="tab-content" id="tabs-tabContent">
      <div class="tab-pane fade show active" id="tabs-del-user-default" role="tabpanel" aria-labelledby="tabs-del-user-default-tab">
        <p class="fw-bold mb-1">Status: 200</p>
        <pre class="w-100 rounded-3">
          <code>{stringify({
            "success": true
          })}</code>
        </pre>
      </div>
      <div class="tab-pane fade" id="tabs-inv-cred" role="tabpanel" aria-labelledby="tabs-inv-cred-tab">
        <p class="fw-bold mb-1">Status: 401</p>
      </div>
    </div>
  </Route>
  <Route method="GET" slug="/users/:userid/comments">
    <RouteBody 
      request="GET http://localhost:6767/api/users/42/comments"
      response={stringify([
        {
          "id": 0,
          "creatorId": 42,
          "content": "Saepe ipsam est recusandae accusamus expedita. Magnam quibusdam aut enim omnis aspernatur libero facilis ab sed. Consequuntur aliquid quod ut ea. Vitae totam nemo error ut quo qui omnis et. Blanditiis natus corporis. Incidunt dolorem recusandae qui."
        },
        {
          "id": 1,
          "creatorId": 42,
          "content": "Quibusdam aut illum sit dicta suscipit. Illo error quia nostrum quod aut. Asperiores vitae tenetur odit odio. Explicabo ab dolores. Molestiae corrupti hic officia nihil sunt veritatis adipisci et et."
        },
        '. . .',
        {
          "id": 24,
          "creatorId": 42,
          "content": "Quo culpa dolorem. Est veniam dolorem nam. Dolor autem dolore qui aut repellendus. Necessitatibus voluptas et et asperiores voluptas consectetur placeat vitae. Voluptas neque et tempora sit aspernatur enim. Quibusdam autem optio veniam."
        }
      ])} 
    />
  </Route>
</div>