var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(parentDir, 'index.js')
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        loaders: ["style-loader", "css-loder", "less-loader"]
      },
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: () => [require('autoprefixer')]
          }},
          {
          loader: 'sass-loader',
          options: {
            includePaths: [path.resolve(__dirname, 'node_modules/carbon-components/scss'),
            path.resolve(__dirname, 'ui/core')]
            }
          }
        ]
      }
    ]
  },
  output: {
    path: parentDir + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    contentBase: parentDir,
    historyApiFallback: true
  }
}