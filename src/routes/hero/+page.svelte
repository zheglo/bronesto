<script lang="ts">
  import Onimation from 'components/animateO/Onimation.svelte'
  import Sto from 'components/animateO/Sto.svelte'
  import White from 'components/animateO/White.svelte'
  import R from 'components/animateO/R.svelte'
  import B from 'components/animateO/B.svelte'
  import N from 'components/animateO/N.svelte'
  import Ia from 'components/animateO/Ia.svelte'
</script>

<section
  class="relative h-[100dvh] w-[100dvw] shrink-0 flex items-center justify-center"
>
  <White />

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


  <div class='absolute flex mx-10px'>

    <R />
    <B />
    <N />
    <Onimation />
    <Ia/>
  </div>

  <Sto />

</section>
