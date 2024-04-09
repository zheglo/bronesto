<script lang="ts">
  import { fly } from 'svelte/transition'
</script>

<section
  class="relative bg-#e9a613 h-[100dvh] w-[100dvw] shrink-0 flex items-center">

<div class="inset-0">
  <img class="object-cover h-[100dvh] w-[100dvw]" src="assets/program/greenTheaterYellow.png" alt="openayr theater" />
</div>

<div transition:fly="{{duration: 700, x: 1800, opacity: 0.5, easing: quintOut}}"
class="absolute h-[45%]">
   <img class="object-contain w-[55%] overflow-hidden" src='assets/jubilee/joke.webp' alt="old lady fly"/>
</div>


</section>