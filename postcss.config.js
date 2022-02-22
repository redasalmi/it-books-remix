module.exports = (ctx) => ({
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    'postcss-custom-media': {
      importFrom: 'styles/shared/_breakpoints.css',
    },
    cssnano: ctx.env === 'production' ? { preset: 'default' } : false,
  },
});
