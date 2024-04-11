<script>
  import { timeline, animate } from 'motion'
  import { onMount } from 'svelte'

  let rectangle

  onMount(() => {
    const draw = (progress) => ({
      strokeDashoffset: 1 - progress,
      visibility: 'visible'
    })

    const animateO = [
      ['circle', draw(1), { duration: 5 }],
      ['circle', { scale: 0.25 }, { duration: 1 }],
      []
    ]

    timeline(animateO)
  })
</script>

<section>
  <!-- <div class="absolute inset-0 bg-black" bind:this={rectangle}></div> -->

  <div class="h-screen w=90% flex justify-center items-center">
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
    </svg>
  </div>
</section>
