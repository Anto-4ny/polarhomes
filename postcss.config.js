// postcss.config.js
export default {
  plugins: {
    autoprefixer: {},
    cssnano: {
      preset: ['default', {
        normalizeWhitespace: true,
        discardComments: { removeAll: true },
        // Disable things that break responsive sizing
        convertValues: false,
        normalizeString: false,
        minifyFontValues: false,
      }],
    },
  },
};
