<script context="module">
  import Documentation from '../components/Documentation.svelte'

  export async function load({ fetch }) {
    const response = await fetch('https://raw.githubusercontent.com/johannchopin/restapify/main/docs/README.md')
    const inlineMd = await response.text()
    
		return { props: { inlineMd }}
	}
</script>

<script>
  export let inlineMd
</script>

<Documentation markdown={inlineMd} editUrl='https://github.com/johannchopin/restapify/edit/main/docs/README.md' />
