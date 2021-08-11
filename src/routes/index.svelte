<script>
  import { onMount } from "svelte"
  import { initHighlightJs } from "../utils"
	import Header from '../components/Header.svelte'
	import Features from '../components/Features.svelte'
	import GettingStarted from '../components/GettingStarted.svelte'
	import Footer from '../components/Footer.svelte'

	onMount(() => {
    initHighlightJs()
  })
</script>

<style>
	#home {
		height: 100%;
		overflow: auto;
	}
</style>

<svelte:head>
	<title>Restapify • Quickly and easily deploy a mocked REST API</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.6.0/styles/vs2015.min.css" integrity="sha512-w8aclkBlN3Ha08SMwFKXFJqhSUx2qlvTBFLLelF8sm4xQnlg64qmGB/A6pBIKy0W8Bo51yDMDtQiPLNRq1WMcQ==" crossorigin="anonymous" />
</svelte:head>

<div id="home">
	<Header />
	<section class="container my-5 py-5">
		<Features />
		<hr />
		<GettingStarted />
	</section>
	<Footer />
</div>
