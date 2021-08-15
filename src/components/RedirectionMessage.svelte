<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import { goto } from '$app/navigation'

  const SECONDS_BEFORE_REDIRECT = 6
  let counter = SECONDS_BEFORE_REDIRECT
  let counterInterval

  onMount(() => {
    counterInterval = setInterval(() => {
      if (counter <= 1) {
        goto('/')
      } else {
        counter = counter - 1
      }
    }, 1000)
	})

  onDestroy(() => {
    clearInterval(counterInterval)
  })
</script>

<style>
  p {
    text-align: center;
  }
</style>

<p>You will be redirect in {counter}s...</p>