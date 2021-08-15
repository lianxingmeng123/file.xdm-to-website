<script lang="ts">
  // @ts-nocheck
  import Icon from '../components/Icon/Icon.svelte'
  import Footer from '../components/Footer.svelte'

  interface Project {
    link: string
    title: string
    description: string
    links?: {
      link: string
      label: string
      icon: IconName
    }[]
  }

  const PROJECTS: Project[] =  [
    {
      link: 'https://github.com/johannchopin/restapify-examples/tree/main/github-api',
      title: 'GitHub API',
      description: 'Proof of concept that you can mock a real API architecture by mocking some endpoints of the <a href="https://docs.github.com/en/enterprise-server@2.22/rest/reference">GitHub API</a>.'
    },
    {
      link: 'https://github.com/johannchopin/restapify-examples/tree/main/nextjs-animal-shelter-app',
      title: 'Animal shelter app with NextJS',
      description: 'Small project to illustrate the use of Next.js with Restapify API mocker.'
    },
    {
      link: 'https://github.com/johannchopin/restapify-examples/tree/main/website-homepage',
      title: 'Mocked API example',
      description: 'Implementation of the mocked API that you can see on the <a href="https://restapify.vercel.app/">Restapify\'s website</a>.',
      links: [
        {
          link: 'https://stackblitz.com/edit/restapify-template?file=README.md',
          label: 'Explore this example on Stackblitz',
          icon: 'stackblitz'
        },
        {
          link: 'https://codesandbox.io/s/restapify-h5c3p?fontsize=14&hidenavigation=1&theme=dark',
          label: 'Explore this example on Codesandbox',
          icon: 'codesandbox'
        }
      ]
    }
  ]
</script>

<style>
  #content {
    height: 100%;
    overflow: scroll;
  }

  .container {
    min-height: 100vh;
  }

  .card-text {
    color: black;
  }
</style>

<svelte:head>
	<title>Examples • Restapify</title>
</svelte:head>

<div id="content">
  <section class="container py-5">
    <h1>Examples</h1>
    <p>Explore some <a href="https://github.com/johannchopin/restapify-examples">examples</a> that illustrate the use of Restapify in real projects:</p>

    <div class="row mt-5">
      <div class="col-md-8 w-100 d-flex flex-column flex-md-row justify-content-center align-items-flex-start">
        {#each PROJECTS as { link, title, description, links }}
          <div class="card border-primary mx-3 mb-3" style="max-width: 18rem;">
            <div class="card-body text-primary d-flex flex-column">
              <h5 class="card-title">
                <a href={link} target="_blank">
                  {title}
                </a>
              </h5>
              <p class="card-text">{ @html description}</p>
              <div class="d-flex justify-content-end align-items-end flex-grow-1">

                {#each [...(links || []), { link, icon: 'github', label: 'Open on GitHub'}] as innerLink}
                  <a href={innerLink.link} target="_blank" class="mx-1" title={innerLink.label}>
                    <Icon name={innerLink.icon} style="width: 1.2em; height: 1.2em;" />
                  </a>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  <Footer />
</div>
