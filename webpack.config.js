const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './index.jsx',
    module: {
        rules: [
              { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
              {
                  test: /\.m?js$/,
                  exclude: /(node_modules)/,
                  use: {
                      loader: 'babel-loader',
                      options: {
                          presets: ['@babel/preset-env']
                      }
                  }
              }
        ],
    },
    resolve: {
         extensions: ['.js', '.jsx', '.css']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};
