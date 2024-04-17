<script lang="ts">
  import { timeline, animate } from 'motion'
  import { onMount } from 'svelte'

  onMount(() => {
    const draw = (progress) => ({
      strokeDashoffset: 1 - progress,
      visibility: 'visible',
    })

    const animateO = [
      ['circle', draw(1), { duration: 5 }],
      ['circle', { scale: 0.21 }, { duration: 1 }],
      ['path', { scale: 0.21 }, { duration: 1 }],
      ['path', draw(1), { duration: 0.6, at: "-0.2" }],

    ]
    timeline(animateO)


  })
</script>

<div class="h-screen flex justify-center items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-500 -500 1000 1000"
    height="85%"
    width="85%"
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
      d='M -400 900 L -400 -500' pathLength="1"
      fill="none"
      stroke="none"
      stroke-width="0px"
      stroke-dasharray="1"
      stroke-dashoffset="1"
      visibility: hidden
      position: fixed
      ></path>

  </svg>
</div>
