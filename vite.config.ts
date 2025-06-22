import { defineConfig } from 'vite'
// 👇 Importa como any
// @ts-ignore
import purgecss from 'vite-plugin-purgecss'

export default defineConfig({
  plugins: [
    // @ts-ignore
    purgecss({
      content: ['./index.html', './src/**/*.ts'],
    }),
  ],
  build: {
    minify: 'esbuild',
  },
})
