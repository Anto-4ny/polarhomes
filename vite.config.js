import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import viteCompression from 'vite-plugin-compression'
import htmlMinifier from 'vite-plugin-html-minifier-terser'

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    viteCompression({
      algorithm: 'brotliCompress', // Brotli compression
      ext: '.br',
      threshold: 1024, // Only compress files > 1KB
      deleteOriginFile: false,
    }),
    viteCompression({
      algorithm: 'gzip', // Gzip fallback
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
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // remove console logs
        drop_debugger: true,
      },
    },
  },
})
