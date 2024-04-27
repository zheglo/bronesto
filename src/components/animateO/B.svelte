<script lang="ts">
  import { timeline, animate } from 'motion'
  import { onMount } from 'svelte'

  onMount(() => {
    const animateB = [
      ['wrapper2', { x: '-45.8%' }, { delay: 6 }, { duration: 0.5 }]
    ]

    timeline(animateB)
  })
</script>

<wrapper2
  class="absolute h-50cqh flex justify-center items-center"
>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="-500 -500 1000 1000"
  height="100cqh"
  width="50cqw"
  preserveAspectRatio="xMidYMid meet"
  >
    <circle
    fill="none"
    stroke="#ff1493"
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
    d='M-400 500 L-400 -750 L200 -750' pathLength="1"
    fill="none"
    stroke="#ff1493"
    stroke-width="200px"
    stroke-dasharray="1"
    stroke-dashoffset="1"
    visibility: hidden
    position: fixed
    ></path>

  </svg>
</wrapper2>

