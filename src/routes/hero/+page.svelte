<script lang="ts">
  import {animate} from "motion"
  import { fade } from 'svelte/transition'
  import { onMount } from "svelte";

  let circle

  onMount(() => {
    const draw = (progress) => ({
      strokeDashoffset: 1 - progress,
      visibility: "visible"
    });

    animate("circle", draw(1), { duration: 9, delay: 1 });
  });
</script>

<section class="relative h-[100dvh] w-[100dvw] shrink-0 flex items-center justify-center">
  <div class="absolute inset-x-0 inset-y-0 overflow-hidden">
    <video class="absolute h-full w-full object-cover -z-10" muted autoplay loop playsinline disablepictureinpicture>
      <source src="assets/punkvideo/probrone.webm" type="video/webm" />
      <source src="assets/punkvideo/probrone.mp4" type="video/mp4" />
    </video>
  </div>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000"
    preserveAspectRatio="xMidYMid meet">
    <circle class="bind:this={circle} absolute fill-transparent stroke-[#800000] stroke-[200px] invisible fixed inset-0
      transform-origin: center center
      rotate(-90deg)
      stroke-dasharray: 1
      stroke-dashoffset: 1
      stroke-linecap: round
      stroke-linejoin: round" cx=500 cy=500 r=400 pathLength=1 ></circle>
  </svg>


</section>