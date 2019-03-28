const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');


module.exports = {
    entry: ['./index.jsx', './main.scss'],
    plugins: [ new CleanWebpackPlugin(), new ManifestPlugin()],
    devtool: 'source-map',
    module: {
        rules: [
              { test: /\.scss$/, use: [
                  { loader: 'file-loader', options: { name: 'bundle.[contenthash].css' } },
                  { loader: "sass-loader" }
              ]},
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
         extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js'
    }
};
