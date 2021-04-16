<script lang="ts">
  import { onMount } from 'svelte'
  import { goto } from '@sapper/app'

  const SECONDS_BEFORE_REDIRECT = 6
  let counter = SECONDS_BEFORE_REDIRECT

  onMount(() => {
    setInterval(() => {
      if (counter <= 1) {
        goto('/')
      } else {
        counter = counter - 1
      }
    }, 1000)
	})
</script>

<style>
  p {
    text-align: center;
  }
</style>

<p>You will be redirect in {counter}s...</p>