import { defineConfig, presetUno, presetWebFonts } from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";
import extractorSvelte from "@unocss/extractor-svelte";

export default defineConfig({
  extractors: [extractorSvelte()],
  presets: [
    presetUno(),
    presetRemToPx(),
    presetWebFonts({
      fonts: {
        serif: ["Playfair Display"],
        sans: ["Montserrat"],
        mono: ["Fira Code", "Fira Mono"]
      },
    }),
  ],
  safelist: ["bg-orange-300", "styled-input"],
});
