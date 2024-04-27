<script lang="ts">
  import { animate, timeline, spring } from "motion";
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
      ['wrapper100', { y: '-45%' }, { delay: 5 }, { duration: 1 }],
      ['numb', { color: '#8b0000' }],
      ['wrapperL', { opacity: [0, 1] }, { delay: 1 }],
      ['wrapperR', { opacity: [0, 1] }],
      ['wrapperL', { x: [ '0', '-100%', '-20%'] }, { duration: 0.7 }, { delay: 1 }],
      ['wrapperR', { x: [ '0', '100%', '20%'] }, { duration: 0.5 }],
      ['span', { opacity: [0, 1] }, { delay: 0.2 }]

    ]

    timeline(animateOOO)

  });

</script>


<wrapper100 class='h-[80%] w-100% flex items-center justify-between'>
  <wrapperL class="block h-50% w-45% flex justify-end items-center">
    <span class="font-local font-size-4vw px-2 color-[#ff0000]">1924</span>
    <img class='w-10%' src="assets/hero/arrowL.svg" alt="arrow left" >
  </wrapperL>

  <div class="">
    <numb class="font-local font-size-6vw text-center color-white px-2">0</numb>
  </div>

  <wrapperR class="block h-25% w-45% flex justify-start items-center">
    <img class='w-10%' src="assets/hero/arrowR.svg" alt="arrow right">
    <span class="font-local font-size-4vw px-2 color-[#ff0000]">2004 </span>
  </wrapperR>
</wrapper100>