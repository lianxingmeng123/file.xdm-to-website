<script lang="ts">
  import restapifyIcon from '../assets/restapify-icon.svg'

	export let segment: string;
</script>

<style>
	li {
		display: block;
	}
	nav {
		z-index: 1;
	}

	.navbar-brand img {
		width: 25%
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>


<nav class="navbar navbar-expand-lg ps-4 pe-4 pt-0 pb-0 navbar-light bg-light shadow">
  <div class="container-fluid">
    <a class="navbar-brand py-1" href="/">
			<img src={restapifyIcon} alt="Restapify icon">
    </a>
    <ul class="d-flex ms-auto mb-0">
      <li class="nav-item">
        <a class="nav-link" href="/docs">Docs</a>
      </li>
			<li class="nav-item d-flex align-items-center">
				<iframe src="https://ghbtns.com/github-btn.html?user=johannchopin&repo=restapify&type=star&count=true&v=2" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
      </li>
    </ul>
  </div>
</nav>