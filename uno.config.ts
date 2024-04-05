import { defineConfig, presetUno, presetWebFonts } from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";
import extractorSvelte from "@unocss/extractor-svelte";

export default defineConfig({
  extractors: [extractorSvelte()],
  presets: [
    presetUno(),
    presetRemToPx(),
    presetWebFonts({
      // provider: 'google',
      fonts: {
        serif: ['Playfair Display: 400, 700, 900'],
        sans: 'Montserrat',
        local: ['Magical Childhood Regular'],
        mono: ['Fira Code', 'Fira Mono']
      }
    })
  ]
});
