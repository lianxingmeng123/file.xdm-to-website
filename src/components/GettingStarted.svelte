<script>
  const instanciateRpfy = `import * as path from 'path'
import Restapify from 'restapify'

const apiFolderPath = path.resolve(__dirname, './path/to/folder')

const rpfy = new Restapify({
  rootDir: apiFolderPath
})
rpfy.run()`
</script>
<div class="row justify-content-center">
  <div class="col-md-8">
    <h2>Getting Started</h2>
    <h4 class="mt-5">Using the cli</h4>
    <p>The simplest way to use Restapify is to use his <a href="/docs#cli">cli</a> ...</p>
    <pre><code class="rounded-3 bash">yarn global add restapify
# or npm install -g restapify</code></pre>
    <p>...and then serve your api folder:</p>
    <pre><code class="rounded-3 bash">restapify serve path/to/folder/</code></pre>

    <h4 class="mt-5">Using the JavaScript class</h4>

    <p>You can install restapify's class using `npm` (note that this package should be a devDependency):</p>
    <pre><code class="rounded-3 bash">yarn add -D restapify
# or npm i -D restapify</code></pre>
    <p>You can then import the class and instantiate it to serve the api folder:</p>
    <pre><code class="rounded-3 js">{instanciateRpfy}</code></pre>
  </div>
</div>