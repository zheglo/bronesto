<script lang="ts">
  import { animate, timeline } from "motion";
  import { onMount } from "svelte";

  let sto

  onMount(() => {
      setTimeout(() => {
      const h1 = document.querySelector("h1")

      animate(
        (progress) => h1.innerHTML = Math.round(progress * 100),
        { duration: 7, easing: "ease-out" }
      )
    }, 1000)
  });
</script>

<div class="absolute h-[100dvh] flex items-center justify-center">
  <h1 class="color-white" bind:this={sto}>0</h1>
</div>


<style>
  h1 {
    font-family: "Montserrat";
    text-align: center;
    font-size: 200px;
    font-weight: 900;
  }
</style>