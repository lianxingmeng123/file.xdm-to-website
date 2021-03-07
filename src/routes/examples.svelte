<script>
  const PROJECTS =  [
    {
      link: 'https://github.com/johannchopin/restapify-examples/tree/main/github-api',
      title: 'GitHub API',
      description: 'Proof of concept that you can mock a real API architecture by mocking some endpoints of the <a href="https://docs.github.com/en/enterprise-server@2.22/rest/reference">GitHub API</a>.'
    },
    {
      link: 'https://github.com/johannchopin/restapify-examples/tree/main/nextjs-animal-shelter-app',
      title: 'Animal shelter app with NextJS',
      description: 'Small project to demonstrate the use of Next.js with Restapify API mocker.'
    }
  ]
</script>

<style>
  .card-text {
    color: black;
  }
</style>

<section class="container py-5">
  <h1>Examples</h1>
  <p>Explore some <a href="https://github.com/johannchopin/restapify-examples">examples</a> that describe the use of Restapify in real projects:</p>

  <div class="row mt-5">
    <div class="col-md-8 w-100 d-flex flex-column flex-md-row justify-content-center align-items-center">
      {#each PROJECTS as { link, title, description}}
        <div class="card border-primary mx-3 mb-3" style="max-width: 18rem;">
          <div class="card-body text-primary">
            <h5 class="card-title">
              <a href={link} target="_blank">
                {title}
              </a>
            </h5>
            <p class="card-text">{ @html description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>