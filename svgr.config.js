const template = require('./svg/template');

module.exports = {
  outDir: 'app/components/icons',
  template,
  typescript: true,
  expandProps: false,
  svgProps: { className: '{className}' },
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  },
};
