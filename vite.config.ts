import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function customAssetResolver() {
  return {
    name: 'custom-asset-resolver',
    resolveId(id) {
      if (id.startsWith('project:asset/')) {
        const filename = id.replace('project:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  // ADD THIS LINE BELOW
  base: '/DSTC-2026/', 
  
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
