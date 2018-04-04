const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    // 'custom-elements-es5-adapter': ['@webcomponents/webcomponentsjs/custom-elements-es5-adapter'],
    // 'webcomponents-loader': ['@webcomponents/webcomponentsjs/webcomponents-loader'],
    // vendor: ['./src/vendor'],
    app: [
        'webpack-dev-server/client?http://localhost:8080', // live reload
        './src/index'
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    hot: true
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new CleanWebpackPlugin(['docs'], { verbose: true, root: path.resolve(__dirname, './') }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './static'),
        to: 'static',
        ignore: ['.*']
      },
      {
        from: path.resolve(__dirname, './node_modules/reveal.js/css/reveal.css')
      },
      {
        from: path.resolve(__dirname, './node_modules/reveal.js/js/reveal.js')
      }
    ]),
    new webpack.HotModuleReplacementPlugin(),
  ]
};