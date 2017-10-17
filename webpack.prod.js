const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './src/main.js',
    ],
    vendors: [
      'react',
      'react-dom',
      'react-inline-transition-group',
      'classnames',
      'react-hot-loader',
    ],
  },
  output: {
    // Absolute path to the output directory.
    path: path.resolve(__dirname, 'build', 'scripts'),

    // This option specifies the public URL of the output directory when
    // referenced in a browser. A relative URL is resolved relative to the HTML
    // page.
    publicPath: '/scripts/',

    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:6]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    // Clean all the content in the scripts folder.
    new CleanWebpackPlugin(['./build/scripts/**/*']),

    // Put the vendors chunk in a separate file.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.js',
    }),

    new UglifyJSPlugin(),
  ],
};