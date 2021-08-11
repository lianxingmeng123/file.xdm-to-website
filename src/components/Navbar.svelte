<script>
	import Links from './Links.svelte'
  import restapifyIcon from '../assets/restapify-icon.svg'

	export let segment
</script>

<style lang="scss">
	.navbar {
		position: relative;
		display: block;
		background-color: red!important;
	}

	h1 {
		line-height: 2.5em;
	}

	#brand {
		position: absolute;

		img {
			width: 60px;
		}
	}

	li {
		display: block;
	}
	nav {
		z-index: 2;
	}

	.navbar-brand img {
		width: 25%;
	}

	a {
		display: block;
		text-decoration: none;
		padding: 1em 0.5em;
		color: black;
	}
</style>


<nav class="navbar navbar-expand-lg px-md-4 pt-0 pb-0 navbar-light bg-light shadow">
  <div class="container-fluid">
    <a id="brand" rel="prefetch" class="p-0 d-flex align-contents-center link-dark" href="/">
			<img src={restapifyIcon} alt="Restapify icon">
			<h1 class="d-none d-md-block ms-1 mb-0 fs-4">Restapify</h1>
    </a>
    <ul class="d-flex ms-auto mb-0">
			<Links {segment} />
			<li class="nav-item d-none d-md-block ms-3">
				<a class="nav-link" href="https://codecov.io/gh/johannchopin/restapify">
					<img src="https://img.shields.io/codecov/c/github/johannchopin/restapify" target="_blank" alt="codecov">
				</a>
      </li>
			<li class="nav-item d-none d-md-flex align-items-center">
				<iframe src="https://ghbtns.com/github-btn.html?user=johannchopin&repo=restapify&type=star&count=true&v=2" frameborder="0" scrolling="0" width="100" height="20" title="GitHub"></iframe>
      </li>
    </ul>
  </div>
</nav>