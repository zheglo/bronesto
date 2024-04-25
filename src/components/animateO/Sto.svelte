<script lang="ts">
  import { animate, timeline } from "motion";
  import { onMount } from "svelte";

  onMount(() => {

    const numb = document.querySelector("numb")
    let counter = 0
    setInterval(() => {
      if(counter == 100){
        clearInterval()
      }else{
        counter+=2
        numb.textContent = counter
      }
    }, 100)

    const animateOOO = [
      ["wrapper100", { y: '-45%' }, { delay: 5 }, { duration: 1 }],
      ["numb", { color: '#ff0000' }],

    ]

    timeline(animateOOO)

  });

</script>


<wrapper100 class='h-[80%] w-100% flex items-center justify-between'>
  <div class="block h-25% w-45% flex justify-end items-center">
    <img src="assets/hero/arrowL.svg" alt="arrow left">
  </div>

  <div class="">
    <numb class="font-local font-size-6vw text-center color-white px-2">0</numb>
  </div>

  <div class="block h-25% w-45% flex justify-start items-center">
    <img src="assets/hero/arrowR.svg" alt="arrow right">
  </div>
</wrapper100>