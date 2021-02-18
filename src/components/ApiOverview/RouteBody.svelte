<script>
  import Icon from '../Icon/Icon.svelte'

  export let request
  export let status = 200
  export let response
</script>

<div class="d-flex flex-column align-items-center">
  <pre class="mb-0"><code class="text rounded-3">{request}</code></pre>
  <Icon name="arrow-bar-bottom" />
</div>

<p class="fw-bold mb-1">Status: {status}</p>
<pre><code class="json rounded-3">{response}</code></pre>