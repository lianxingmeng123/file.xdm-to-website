<script context="module">
  import Documentation from '../components/Documentation.svelte'

  export async function load({ fetch }) {
    const response = await fetch('https://raw.githubusercontent.com/johannchopin/restapify/main/docs/deployment/README.md')
    const inlineMd = await response.text()
    
		return { props: { inlineMd }}
	}
</script>

<script>
  export let inlineMd
</script>

<Documentation
  pageSlug='/deployment'
  pageTitle='Deployment • Restapify'
  markdown={inlineMd} 
  editUrl='https://github.com/johannchopin/restapify/edit/main/docs/deployment/README.md' 
/>
