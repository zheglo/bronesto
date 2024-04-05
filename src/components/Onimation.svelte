<script lang="ts">
  import { animate, timeline } from "motion";
  import { onMount } from "svelte";

  let circle
  console.log(circle)

  onMount(() => {
    const draw = (progress) => ({
      strokeDashoffset: 1 - progress,
      visibility: "visible"
    });

    animate("circle", draw(1), { duration: 7, delay: 1 });
  });
</script>

<section class="relative h-[100dvh] w-[100dvw] shrink-0 flex items-center justify-center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000"
    preserveAspectRatio="xMidYMid meet">
    <circle class="fill-transparent stroke-[#800000] stroke-[200px] invisible fixed inset-0
      transform-origin: center center
      rotate(-90deg)
      stroke-dasharray: 1
      stroke-dashoffset: 1
      stroke-linecap: round
      stroke-linejoin: round" cx=500 cy=500 r=400 pathLength=1 bind:this={circle}></circle>
  </svg>
</section>