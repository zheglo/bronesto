<script lang="ts">
  import {animate, timeline} from "motion"
  import { onMount } from "svelte";

  let circle

  onMount(() => {
    const draw = (progress) => ({
      strokeDashoffset: 1 - progress,
      visibility: "visible"
    });

    const animateO = [
    animate("circle", draw(1), { duration: 7})
    ]


  });
</script>

<section class="h-screen flex justify-center items-center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" height="85%" width="85%"
    preserveAspectRatio="xMidYMid meet" fill='none' stroke="#800000" stroke-width='200px'>
    <circle
      rotate="-90deg"
      stroke-dasharray="1"
      stroke-dashoffset="1"
      cx=500 cy=500 r=400 pathLength=1 bind:this={circle}>
    </circle>
  </svg>
</section>