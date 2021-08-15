<script>
	export let segment
</script>

<style>
	li {
		display: block;
	}

  .nav-link.active,
	a:hover {
		text-decoration: underline;
		color: black;
	}

	a {
		display: block;
		text-decoration: none;
		padding: 1em 0.5em;
		color: black;
	}
</style>

<li class="nav-item">
  <a class="nav-link" class:active={segment === 'docs'} rel="prefetch" href="/docs">Docs</a>
</li>
<li class="nav-item">
  <a class="nav-link" class:active={segment === 'deployment'} rel="prefetch" href="/deployment">Deployment</a>
</li>
<li class="nav-item">
  <a class="nav-link" class:active={segment === 'examples'} rel="prefetch" href="/examples">Examples</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="https://github.com/johannchopin/restapify" target="_blank">GitHub</a>
</li>