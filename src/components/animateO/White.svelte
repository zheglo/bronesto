<script lang="ts">
  import { timeline, animate } from 'motion'
  import { onMount } from 'svelte'

onMount(() => {
  const escape = [
    ['item', { opacity: '0' }, { duration: 0.2}]
  ]
  timeline(escape)
})
</script>

<item class='absolute inset-0 bg-white z-5'>
</item>
