<script lang="ts">
  import { fly } from 'svelte/transition'
  import { backOut } from 'svelte/easing'
  import aletter from 'assets/e/aletter.svg'
  import dletter from 'assets/e/dletter.svg'
  import eletter from 'assets/e/eletter.svg'
  import iletter from 'assets/e/iletter.svg'
  import nletter from 'assets/e/nletter.svg'
  import oletter from 'assets/e/oletter.svg'
  import rletter from 'assets/e/rletter.svg'
  import sletter from 'assets/e/sletter.svg'
  import zhletter from 'assets/e/zhletter.svg'


  const letters = [
    'iletter',
    'nletter',
    'aletter',
    'zhletter',
    'rletter',
    'eletter',
    'dletter',
    'oletter',
    'sletter'
  ]

  let animate = false
</script>

<div class='absolute top-10 right-10 on:mouseenter={animate}'>
  <img src='assets/e/eeletter.svg' alt='burger' />
</div>

{#if animate}
  <div class="on:mouseenter={animate}">
    {#each letters as letter, i}
    <div class="inline-block overflow-hidden">
      <span
        class="self-start space-x-5px"
        in:fly={{
          x: -100,
          delay: 300 * i,
          easing: backOut
        }}
      >
        {letter}
      </span>
    </div>
  {/each}
  </div>
{/if}

