import { defineConfig, presetUno, presetWebFonts,} from "unocss";
import extractorSvelte from "@unocss/extractor-svelte";


export default defineConfig({
  extractors: [extractorSvelte()],
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        serif: ['Playfair Display: 400, 700, 900'],
        sans: 'Montserrat',
        local: ['Magical Childhood Regular'],
        mono: ['Fira Code', 'Fira Mono']
      }
    })
  ],

  theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
  },

  rules: [
    ['xl', { 'max-width': '1080px' }],
  ],

});
