<script>
  const FEATURES = [
    {
      title: '💡 Incredible DX',
      description: 'Intuitive files structure and JSON syntax to cover all the scenarios of your future API'
    },
    {
      title: '✅ JSON valid',
      description: 'You will only use <code>.json</code> files that follows the <a href="https://www.ecma-international.org/publications-and-standards/standards/ecma-404/">ECMA-404</a> standard'
    },
    {
      title: '🎛 Dashboard ',
      description: 'Out of the box Single Page Application to explore and manage your mocked API'
    },
    {
      title: '💻 CLI',
      description: 'Use the CLI for an instant deployment'
    },
    {
      title: '📝 Fakerjs implementation',
      description: 'Intuitive syntax to quickly populate your API responses with the famous <a href="https://github.com/marak/Faker.js/">fakerjs</a> library'
    },
    {
      title: '🔥 Built in hot watcher',
      description: 'Directly see your changes after a file update'
    }
  ]
</script>

<div class="row mx-4">
  {#each FEATURES as feature}
    <div class="col-md-4 px-1 px-md-4 mb-1 mb-md-5">
      <h3 class="mb-3 fs-4">{feature.title}</h3>
      <p class="grey-text mb-md-0 mb-5 lh-sm">{@html feature.description}</p>
    </div>
  {/each}
</div>
