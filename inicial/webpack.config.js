const webpack = require('webpack');

const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './src/app.js',
  },
  output: {
    filename: './build.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', { modules: false }],
          ],
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeENV) },
    }),
  ],
};
