module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  plugins: [
    './resources/load-staticly-from-npm.js',
    '@babel/plugin-transform-flow-strip-types',
  ],
};
