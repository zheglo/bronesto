<script lang="ts">
  import Onimation from 'components/Onimation.svelte'
  import Sto from 'components/Sto.svelte'
  import { spring } from 'svelte/motion'
  import { fly } from 'svelte/transition'

  // let isVisible = false;

</script>

<section class="relative h-[100dvh] w-[100dvw] shrink-0 flex items-center justify-center">
  <div class="absolute inset-x-0 inset-y-0 overflow-hidden">
    <video class="absolute h-full w-full object-cover -z-10" muted autoplay loop playsinline disablepictureinpicture>
      <source src="assets/punkvideo/probrone.webm" type="video/webm" />
      <source src="assets/punkvideo/probrone.mp4" type="video/mp4" />
    </video>
  </div>

  <Onimation />
  <Sto />
</section>

<!-- <label>Click here to view transitions</label>
<input type="checkbox" on:click={() => show = !show} />
<main>
  {#if isVisible}
    <div
      class="text-5xl my-24"
      in:fly={{ y: 200, duration: 500}}
      out:fly={{ y: -200, duration: 500}}>
    EEE
    </div>
  {/if}

  <button on:click={() => isVisible = !isVisible}>Toggle</button>
</main> -->