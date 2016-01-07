"use strict"

var webpack = require("webpack"),
    path    = require("path");

function isProduction() { return process.env.NODE_ENV === "production" }
var NullPlugin = {apply: function() {/* NOP */}}

module.exports = {

  entry: {
    debug:   "./debug.js",
    release: "./release.js",
  },

  resolve: {
    root: ".",
    extensions: ["", ".js"],
    modulesDirectories: ["node_modules", "."],
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: isProduction() ? `bundle.[name].min.js` : `bundle.[name].js`,
  },

  module: {
    loaders: [
      { test: /(\.js)$/, loader: 'babel?cacheDirectory', exclude: /node_modules/ },
    ],
  },

  externals: {
    jquery: "$",
  },

  plugins: [
    //new webpack.IgnorePlugin(/electron|remote/),
    isProduction() ? new webpack.optimize.UglifyJsPlugin() : NullPlugin,
    //new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|ja/),
  ],

  debug: !isProduction(),

  devtool: isProduction() ? "cheap-module-source-map" : "source-map",
  //devtool: "cheap-module-eval-source-map",
}
