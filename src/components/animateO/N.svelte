<script lang="ts">
  import { timeline, animate } from 'motion'
  import { onMount } from 'svelte'

  onMount(() => {
    const animateOO = [
      ['wrapper4', { x: '95%' }, { delay: 6 }, { duration: 0.5 }]
    ]
    timeline(animateOO)
  })
</script>

<wrapper4
  class="absolute inset-0 w21% aspect-square flex items-center justify-center m-auto xl:242px"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-126 -126 252 400"
    preserveAspectRatio="xMidYMid meet"
  >

    <path
    d='M -400 -500 L -400 500' pathLength="1"
    fill="none"
    stroke="#ff1493"
    stroke-width="200px"
    stroke-dasharray="1"
    stroke-dashoffset="1"
    visibility: hidden
    position: fixed
    ></path>

    <path
    d='M 270 500 L 250 -500' pathLength="1"
    fill="none"
    stroke="#ff1493"
    stroke-width="200px"
    stroke-dasharray="1"
    stroke-dashoffset="1"
    visibility: hidden
    position: fixed
    ></path>

    <path
    d='M-350 0 L 250 0' pathLength="1"
    fill="none"
    stroke="#ff1493"
    stroke-width="200px"
    stroke-dasharray="1"
    stroke-dashoffset="1"
    visibility: hidden
    position: fixed
    ></path>

  </svg>
</wrapper4>
