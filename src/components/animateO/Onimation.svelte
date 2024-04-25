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
      ['path', draw(1), { duration: 0.5, }],
    ]
    timeline(animateO)


  })
</script>


<div class="h-1200px flex justify-center items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-500 -500 1000 1000"
    height="1200px"
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

    <path d='M 2000 340 C 2000 740 1700 740 1600 740'
      pathLength="1"
      fill="none"
      stroke="#ff1493"
      stroke-width="200px"
      stroke-dasharray="1"
      stroke-dashoffset="1"
      visibility: hidden
      position: fixed
      stroke-miterlimit="10"
      >
    </path>

    <path d='M 1700 740 C 1700 1300 1200 1600 640 1300
                        C 600 2000 -650 2000 -700 1300
                        C -1600 1700 -1900 1000 -1900 850'
      pathLength="1"
      fill="none"
      stroke="#ff1493"
      stroke-width="200px"
      stroke-dasharray="1"
      stroke-dashoffset="1"
      visibility: hidden
      position: fixed
      stroke-miterlimit="10"
      >
    </path>

    <path d='M -2000 -649 C -2000 -1200 -1200 -1500 -740 -1100
                          C -650 -1800 650 -1800 700 -1100
                          C 1150 -1500 2000 -1340 2000 -649'
      pathLength="1"
      fill="none"
      stroke="#ff1493"
      stroke-width="200px"
      stroke-dasharray="1"
      stroke-dashoffset="1"
      visibility: hidden
      position: fixed
      stroke-miterlimit="10"
      >
    </path>

  </svg>
</div>
