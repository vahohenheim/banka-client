const path = require("path");
const webpack = require("webpack");
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')

// Webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const excludedFolders = [path.join(__dirname, 'node_modules'), /flexboxgrid/]

const cssVariablesPlugin = require('postcss-css-variables');
const cssVariables = require('./src/styles/variables.js');

module.exports = {
  entry: {
    client: ['./src/index.tsx'],
    vendor: ['react'],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // JS
      {
        test: /\.js$/,
        exclude: excludedFolders,
        loader: 'babel-loader',
        options: { 
          presets: ["@babel/env"],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "dynamic-import-webpack",
            ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] // `style: true` for less
          ],
        }
      },
      // CSS
      {
        test: /styles(\/|\\).*\.css$/,
        use: [
          ExtractCssChunks.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              namedExport: true,
              camelCase: true
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                cssVariablesPlugin({
                  variables: cssVariables
                })
              ],
            },
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\.module\.css$/,
        include: [/flexboxgrid/, /react-times/, /react-day-picker/, /antd/],
      },
      {
        test: /\.less$/,
        use: ["style-loader", {loader: 'css-loader', options: {sourceMap: 1}}, "postcss-loader", "less-loader"]
      },
      // Fonts
      {
        test: /fonts(\/|\\).*\.(woff(2)?|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: './../fonts/',
              outputPath: 'assets/fonts/',
              name: '[name].[ext]',
            },
          },
        ],
      },
      // Images
      {
        test: /\.(jpe?g|png)$/,
        loader: 'responsive-loader',
        options: {
          name: 'assets/images/[hash]-[width].[ext]',
          adapter: require('responsive-loader/sharp'),
          placeholder: true,
        },
      },
      {
        test: /\.gif$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets/images/',
            },
          },
        ],
      },
      // SVG
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
  },
  output: {
    filename: 'assets/scripts/[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    port: 3210,
    host: '0.0.0.0',
    compress: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new ExtractCssChunks({
      filename: 'assets/stylesheets/[name].[hash].css',
    }),
  ]
};