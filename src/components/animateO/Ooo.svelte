<script lang="ts">
  import { timeline, animate } from 'motion'
  import { onMount } from 'svelte'

  onMount(() => {
    const animateOO = [
      ['wrapper3', { x: '205%' }, { delay: 6 }, { duration: 0.5 }],
      // ['wrapper3', {opacity: 0}]
    ]

    timeline(animateOO)
  })
</script>

<wrapper3
class="absolute inset-0 w21% aspect-square flex items-center justify-center m-auto xl:242px"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-126 -126 252 252"
    preserveAspectRatio="xMidYMid meet"
  >
    <circle
    fill="none"
    stroke="#800000"
    stroke-width="200px"
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
