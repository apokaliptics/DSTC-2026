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
    react({
      babel: {
        compact: false,
      }
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
