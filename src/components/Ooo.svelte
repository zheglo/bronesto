<script lang="ts">
  import { timeline, animate } from 'motion'
  import { onMount } from 'svelte'

  onMount(() => {
    const animateOO = [
      ['wrapper3', { x: '+250%' }, { delay: 6 }, { duration: 0.5 }]
    ]

    timeline(animateOO)
  })
</script>

<wrapper3
  class="absolute inset-0 h-18% aspect-square flex items-center justify-center m-auto -z-9"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-126 -126 252 252"
    heigt="100%"
    width="100%"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    stroke="#800000"
    stroke-width="200px"
  >
    <circle
    rotate="-90deg"
    stroke-dasharray="1"
    stroke-dashoffset="1"
    cx="0"
    cy="0"
    r="400"
    pathLength="1"
    >
    </circle>
  </svg>
</wrapper3>
