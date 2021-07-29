const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');

const prod = require('./prod');

module.exports = merge(prod, { plugins: [new BundleAnalyzerPlugin()] });
