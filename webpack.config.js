const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: [
      // Activate HMR for React.
      'react-hot-loader/patch',

      // Bundle the client for webpack-dev-server
      // and connect to the provided endpoint.
      'webpack-dev-server/client?http://localhost:8080',

      // Bundle the client for hot reloading
      // "only" means to only hot reload for successful updates.
      'webpack/hot/only-dev-server',

      './src/main.js',
    ],
    vendors: [
      'react',
      'react-dom',
      'react-inline-transition-group',
      'classnames',
      'prop-types',
      'react-hot-loader',
    ],
  },
  output: {
    path: path.resolve('./build/scripts'),
    publicPath: path.resolve('/scripts/'),
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
    new webpack.HotModuleReplacementPlugin(),

    // Prints more readable module names in the browser console on HMR updates.
    new webpack.NamedModulesPlugin(),

    // Do not emit compiled assets that include errors.
    new webpack.NoEmitOnErrorsPlugin(),

    // Put the vendors chunk in a separate file.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.js',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: './build',
    hot: true,
  },
};