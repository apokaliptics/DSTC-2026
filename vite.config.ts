import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function customAssetResolver() {
  return {
    name: 'custom-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('project:asset/')) {
        const filename = id.replace('project:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  base: './',
  publicDir: "public",
  plugins: [
    customAssetResolver(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  esbuild: {
    target: 'esnext',
    jsx: 'automatic',
  },
  build: {
    minify: 'esbuild',
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
