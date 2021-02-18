<script lang="ts">
  export let content: string
  export let language: string = ''
</script>

<style lang="scss">
  pre {
    width: 300px;

    code {
      display: inline-block;
      width: 100%;
    }
  }

  .editor {
    width: fit-content;
    overflow: hidden;

    .editor-toolbar {
      div {
        height: 12px;
        width: 12px;
      }
    }
  }
</style>

<div class="editor d-flex flex-column ms-4 mt-2 rounded-3">
  <div class="editor-toolbar d-flex ps-2 py-1 bg-light">
    <div class="rounded-circle mx-1 bg-danger"> </div>
    <div class="rounded-circle mx-1 bg-warning"> </div>
    <div class="rounded-circle mx-1 bg-success"> </div>
  </div>
  <pre>
    <code class={`${language} rounded-3 p-3`}>{content}</code>
  </pre>
</div>