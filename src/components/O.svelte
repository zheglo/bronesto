<script>
  import { timeline, animate } from 'motion'
  import { onMount } from 'svelte'

  onMount(() => {})
</script>

<div
  class="absolute inset-0 h-18% aspect-square bg-yellow flex items-center justify-center m-auto -z-9"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-122 -122 244 244"
    heigt="100%"
    width="100%"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    stroke="#800000"
    stroke-width="20px"
  >
    <circle
      rotate="-90deg"
      stroke-dasharray="1"
      stroke-dashoffset="1"
      cx="0"
      cy="0"
      r="118"
      pathLength="1"
    >
    </circle>
  </svg>
</div>
