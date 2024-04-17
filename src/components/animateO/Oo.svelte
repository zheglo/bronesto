<script lang="ts">
  import { timeline, animate } from 'motion'
  import { onMount } from 'svelte'

  onMount(() => {
    const animateOO = [
      ['wrapper2', { x: '-188%' }, { delay: 6 }, { duration: 0.5 }]
    ]

    timeline(animateOO)
  })
</script>

<wrapper2
  class="absolute inset-0 w21% flex items-center justify-center m-auto xl:242px"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-126 -500 252 1000"
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

    <path
    d='M-400 500 L-400 -750 L-10 -750' pathLength="1"
    fill="none"
    stroke="#800000"
    stroke-width="200px"
    stroke-dasharray="1"
    stroke-dashoffset="1"
    visibility: hidden
    position: fixed
    ></path>

  </svg>
</wrapper2>

