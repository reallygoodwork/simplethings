// uno.config.ts
import presetIcons from '@unocss/preset-icons'
import { defineConfig, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      darkgreen: '#17332d',
      cream: '#f6fab2',
      white: '#ffffff',
      brand: '#E4F223',
      ashgray: '#aabca3',
      error: '#f23051',
      primary: '#5683d2',
      warning: '#e96516',
      dark: '#1c1b17',
      default: '#e4ebf6',
    },
  },
  presets: [
    presetIcons(),
    presetUno(),
    presetWebFonts({
      provider: 'fontshare',
      fonts: {
        sans: ['Satoshi'],
      },
    }),
  ],
})
