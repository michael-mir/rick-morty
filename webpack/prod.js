const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');

const config = require('./common.js');

module.exports = merge(config, {
  target: 'browserslist',
  mode: 'production',
  plugins: [new MiniCssExtractPlugin({ filename: 'styles/[name].css', chunkFilename: '[id].[hash].css' })],
  optimization: {
    minimize: true,
    runtimeChunk: 'single',
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
});
