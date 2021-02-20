<script lang="ts">
  import MethodBadge from '../MethodBadge.svelte'

  export let method
  export let slug
  export let open = false

  const replaceAll = (str: string, find: string, replace: string): string => {
    return str.split(find).join(replace)
  }

  const id = `${method}_${replaceAll(replaceAll(slug, '/', '-'), ':', '-')}`
</script>

<div class="accordion-item">
  <h2 class="accordion-header" id={`heading-${id}`}>
    <button class="accordion-button align-items-center" class:collapsed={!open} type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls={`${id}`}>
      <MethodBadge method={method} />
      <h3 class="fs-6 ms-2 mb-0">{slug}</h3>
    </button>
  </h2>
  <div id={`${id}`} class="accordion-collapse collapse" class:show={open} aria-labelledby={`heading-${id}`} data-bs-parent="#apiOverview">
    <div class="accordion-body">
      <slot></slot>  
    </div>
  </div>
</div>
