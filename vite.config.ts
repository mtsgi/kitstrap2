import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'kitstrap2',
      fileName: 'kitstrap2',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        assetFileNames: 'kitstrap2[extname]',
      },
    },
    cssCodeSplit: false,
  },
})
