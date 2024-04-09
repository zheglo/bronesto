<script lang="ts">
  import { animate, timeline } from "motion";
  import { onMount } from "svelte";

  let sto

  onMount(() => {

    const h1 = document.querySelector("h1")

      animate(
        (progress) => h1.innerHTML = Math.round(progress * 100),
        { duration: 7, easing: "ease-out" }
      )

  });
</script>

<div class="absolute h-[100dvh] flex items-center justify-center">
  <h1 class="font-local font-size-130px text-center color-white" bind:this={sto}>0</h1>
</div>
