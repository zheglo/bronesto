<script lang="ts">
  import { fly } from 'svelte/transition'

  let animate = false
</script>

<div class='absolute h-24px w-252px top-10 right-10'>
  {#if animate}
    <div class="on:click={animate}">
      <div class="inline-block overflow-hidden">
        <span
          class="self-start space-x-5px"
          in:fly={{
            x: -100,
            delay: 300
          }}
        >
        <img src='assets/e/soderzhani.svg' alt='burger' />
        </span>
      </div>
    </div>
  {/if}
  <div class='absolute cursor-pointer top-0 right-0 on:mouseenter={animate}'>
    <img src='assets/e/eeletter.svg' alt='burger' />
  </div>
</div>



