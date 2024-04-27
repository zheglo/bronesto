<script lang="ts">
  import { timeline, animate } from 'motion'
  import { onMount } from 'svelte'

  onMount(() => {
    const animateIa = [
      ['wrapperI', { x: '43%' }, { delay: 6 }, { duration: 0.5 }]
    ]
    timeline(animateIa)
  })
</script>

<wrapperI class="absolute h-50cqh flex justify-center items-center">
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
    d='M400 -500 L400 850' pathLength="1"
    fill="none"
    stroke="#ff1493"
    stroke-width="200px"
    stroke-dasharray="1"
    stroke-dashoffset="1"
    visibility: hidden
    position: fixed
    >
  </path>
 </svg>
</wrapperI>
