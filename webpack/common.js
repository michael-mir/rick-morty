const { NoEmitOnErrorsPlugin, EnvironmentPlugin, ProvidePlugin } = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const paths = require('./_paths.js');

// ENV
const { NODE_ENV = 'development' } = process.env || {};
const IS_PROD = NODE_ENV === 'production';

// Configuration
module.exports = {
  entry: paths.indexJs,
  output: {
    clean: true,
    path: paths.build,
    filename: 'js/[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(s[ac]|c)ss$/,
        use: [
          IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: (path) => /\.module\.s[ac]ss$/.test(path),
                localIdentName: '[name]_[local]_[hash:base64:5]',
              },
              importLoaders: IS_PROD ? 3 : 1,
              sourceMap: !IS_PROD,
            },
          },
          { loader: 'postcss-loader', options: { sourceMap: !IS_PROD } },
          { loader: 'sass-loader', options: { sourceMap: !IS_PROD } },
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: !IS_PROD,
              resources: [
                'src/common/styles/variables/index.scss',
                'src/common/styles/keyframes/index.scss',
                'src/common/styles/mixins/index.scss',
              ],
            },
          },
        ],
      },
      {
        test: /\.(ico|gif|png|jp(e)?g)$/i,
        generator: { filename: 'assets/[name].[ext]' },
        type: 'asset/resource',
      },
      {
        test: /\.(eot|ttf|otf|woff(2)?)$/i,
        generator: { filename: 'assets/[name].[ext]' },
        type: 'asset/inline',
      },
      {
        test: /\.svg$/i,
        oneOf: [
          {
            type: 'asset/resource',
            issuer: { and: [/\.(s[ac]|c)ss$/] },
            generator: { filename: 'assets/[name].[ext]' },
          },
          {
            use: ['@svgr/webpack'],
            issuer: { and: [/\.(js)x?$/] },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
    alias: {
      '/': paths.src,
      '@/svg': `${paths.src}/assets/svg`,
      '@/images': `${paths.src}/assets/images`,
      '@/helpers': `${paths.src}/common/helpers`,
      '@/services': `${paths.src}/common/services`,
      '@/constants': `${paths.src}/common/constants`,
      '@/types': `${paths.src}/store/types`,
      '@/sagas': `${paths.src}/store/sagas`,
      '@/actions': `${paths.src}/store/actions`,
      '@/reducers': `${paths.src}/store/reducers`,
      '@/selectors': `${paths.src}/store/selectors`,
    },
  },
  plugins: [
    new CopyPlugin({ patterns: [{ from: paths.assets, to: 'assets/[name].[ext]' }] }),
    new EnvironmentPlugin({ NODE_ENV: NODE_ENV || 'development' }),
    new HtmlWebpackPlugin({
      template: paths.html,
      filename: 'index.html',
      favicon: `${paths.public}/icons/favicon.png`,
      minify: { removeComments: true, useShortDoctype: true },
    }),
    new ProvidePlugin({ React: 'react' }),
    new Dotenv({ path: '.env' }),
    new NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(),
    new ProgressBarPlugin(),
  ],
};
