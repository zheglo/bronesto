<script lang="ts">
  import { timeline, animate } from 'motion'
  import { onMount } from 'svelte'

  onMount(() => {
    const animateN = [
      ['wrapper4', { x: '22.9%' }, { delay: 6 }, { duration: 0.5 }]
    ]
    timeline(animateN)
  })
</script>

<wrapper4
  class="absolute h-50cqh flex justify-center items-center"
>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="-500 -500 1000 1000"
  height="50cqw"
  width="50cqw"
  preserveAspectRatio="xMidYMid meet"
  >

    <path
    d='M-400 -500 L-400 500' pathLength="1"
    fill="none"
    stroke="#ff1493"
    stroke-width="200px"
    stroke-dasharray="1"
    stroke-dashoffset="1"
    visibility: hidden
    position: fixed
    ></path>

    <path
    d='M270 500 L250 -500' pathLength="1"
    fill="none"
    stroke="#ff1493"
    stroke-width="200px"
    stroke-dasharray="1"
    stroke-dashoffset="1"
    visibility: hidden
    position: fixed
    ></path>

    <path
    d='M-350 0 L250 0' pathLength="1"
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
