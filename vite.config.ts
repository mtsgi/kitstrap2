import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  const isMinifyBuild = mode === 'minify'

  return {
    build: {
      lib: {
        entry: 'src/index.ts',
        name: 'kitstrap2',
        fileName: 'kitstrap2',
        formats: ['es'],
      },
      rollupOptions: {
        output: {
          assetFileNames: isMinifyBuild ? 'kitstrap2.min[extname]' : 'kitstrap2[extname]',
        },
      },
      cssCodeSplit: false,
      minify: false,
      cssMinify: isMinifyBuild ? 'lightningcss' : false,
      emptyOutDir: !isMinifyBuild,
    },
  }
})
