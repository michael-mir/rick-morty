const { HotModuleReplacementPlugin } = require('webpack');
const { merge } = require('webpack-merge');

const config = require('./common.js');
const paths = require('./_paths')

module.exports = merge(config, {
  target: 'web',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    compress: true,
    contentBase: paths.build,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  plugins: [new HotModuleReplacementPlugin()]
});
