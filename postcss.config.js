module.exports = (ctx) => ({
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    'postcss-custom-media': {},
    cssnano: ctx.env === 'production' ? { preset: 'default' } : false,
  },
});
