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
      ["path", draw(1), { duration: 0.5, at: "-0.2" }],
    ]
    timeline(animateO)
  })
</script>

<div class="h-screen flex justify-center items-center z-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-500 -500 1000 1000"
    height="85%"
    width="85%"
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

    <path d='M 2100 340 C 2100 740 1800 740 1700 740'
      pathLength="1"
      fill="none"
      stroke="#ff1493"
      stroke-width="200px"
      stroke-dasharray="1"
      stroke-dashoffset="1"
      visibility: hidden
      position: fixed
      stroke-miterlimit="10"
    ></path>

  </svg>
</div>
