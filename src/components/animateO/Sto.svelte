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


    animate("numb", { y: '-120%' }, { delay: 5 }, { duration: 1 })

  });

</script>

<div class="absolute h-80% w-20% flex items-center justify-center m-auto">
  <numb class="font-local font-size-7rem text-center color-white">0</numb>
</div>
