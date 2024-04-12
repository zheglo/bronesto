<script lang="ts">
  import Onimation from 'components/Onimation.svelte'
  import Sto from 'components/Sto.svelte'
  import O from 'components/O.svelte'
  import Oo from 'components/Oo.svelte'
  import Ooo from 'components/Ooo.svelte'
  import N from 'components/N.svelte'
</script>

<section
  class="relative h-[100dvh] w-[100dvw] shrink-0 flex items-center justify-center"
>
  <div class="absolute inset-x-0 inset-y-0 overflow-hidden">
    <video
      class="absolute h-full w-full object-cover -z-10"
      muted
      autoplay
      loop
      playsinline
      disablepictureinpicture
    >
      <source src="assets/punkvideo/probrone.webm" type="video/webm" />
      <source src="assets/punkvideo/probrone.mp4" type="video/mp4" />
    </video>
  </div>

<div class="absolute w-90% flex justify-center">
  <N />
  <O />
  <Oo />
  <Ooo />
  <Onimation />
</div>

  <Sto />
</section>
