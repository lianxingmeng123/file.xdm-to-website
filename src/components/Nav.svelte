<script>
  import restapifyIcon from '../assets/restapify-icon.svg'
</script>

<style>
	h1 {
		line-height: 2.5em;
	}

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
    <a class="navbar-brand py-1 d-flex align-contents-center" href="/">
			<img src={restapifyIcon} alt="Restapify icon">
			<h1 class="ms-1 mb-0 fs-4">Restapify</h1>
    </a>
    <ul class="d-flex ms-auto mb-0">
      <li class="nav-item">
        <a class="nav-link" href="/docs">Docs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://github.com/johannchopin/restapify" target="_blank">GitHub</a>
      </li>
			<li class="nav-item d-flex align-items-center ms-3">
				<iframe src="https://ghbtns.com/github-btn.html?user=johannchopin&repo=restapify&type=star&count=true&v=2" frameborder="0" scrolling="0" width="100" height="20" title="GitHub"></iframe>
      </li>
    </ul>
  </div>
</nav>