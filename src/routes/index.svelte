<script>
	import Header from '../components/Header.svelte'
	import Features from '../components/Features.svelte'
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	#home {
		height: 100%;
		overflow: auto;
	}
</style>

<svelte:head>
	<title>Restapify</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.6.0/styles/monokai-sublime.min.css" integrity="sha512-/l4iViNMhxR5MhSlak3Yw/L/7qUBifVy7MpLjeJTc8BPMRFbGplGN0xqufCDwhSdxSnVgy+e/OYsNnU75K3yyQ==" crossorigin="anonymous" />
</svelte:head>

<div id="home">
	<Header />
	<Features />
</div>
