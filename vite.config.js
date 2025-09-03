import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import viteCompression from 'vite-plugin-compression'
import htmlMinifier from 'vite-plugin-html-minifier-terser'
import { resolve } from 'path'
import fs from 'fs'

// Automatically detect all .html files in project root
const htmlFiles = fs.readdirSync(__dirname)
  .filter(file => file.endsWith('.html'))
  .reduce((entries, file) => {
    const name = file.replace('.html', '')
    entries[name] = resolve(__dirname, file)
    return entries
  }, {})

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
      deleteOriginFile: false,
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
      deleteOriginFile: false,
    }),
    htmlMinifier({
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
    }),
  ],

  css: {
    transformer: 'postcss',
  },

  define: {
    'window.jQuery': 'jQuery',
    'window.$': '$'
  },

  optimizeDeps: {
    include: ['jquery']
  },

  build: {
    rollupOptions: {
      input: htmlFiles, // 👈 All HTMLs included here
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})

