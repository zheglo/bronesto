<script>
  import {onMount} from 'svelte'
  import { animate, timeline } from "motion"

  let fly

  onMount(() => {

    const broneFly = [
      ["fly", {x: 1000}, {duration: 3}],
    ]

    timeline(broneFly)

  })

</script>

<section
  class="relative h-[100dvh] w-[100dvw] shrink-0 flex justify-center">
  <img
    class="absolute h-full w-full object-cover"
    src='assets/jubilee/greenTheater.webp' alt="openayr theater"/>

  <div class='absolute h-6% bottom-0 flex justify-center'>
    <img class='w-99%' src="assets/jubilee/vprogramme.svg" alt="v programme">
  </div>

  <div class='absolute top:0 w-full h-[30%]'>
    <img class="object-contain w-[45%] overflow-hidden" src='assets/jubilee/joke.webp' alt="old lady fly" bind:this={fly}/>
  </div>


</section>