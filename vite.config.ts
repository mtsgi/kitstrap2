import { defineConfig, type Plugin } from 'vite'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

function generateMinCss(): Plugin {
  let outDir: string
  return {
    name: 'generate-min-css',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    async closeBundle() {
      const cssPath = resolve(outDir, 'kitstrap2.css')
      if (!existsSync(cssPath)) {
        this.warn(`generate-min-css: ${cssPath} not found, skipping minification`)
        return
      }
      const css = readFileSync(cssPath)
      const { transform } = await import('lightningcss')
      const { code } = transform({
        filename: 'kitstrap2.css',
        code: css,
        minify: true,
      })
      writeFileSync(resolve(outDir, 'kitstrap2.min.css'), code)
    },
  }
}

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
    cssMinify: false,
  },
  plugins: [generateMinCss()],
})
