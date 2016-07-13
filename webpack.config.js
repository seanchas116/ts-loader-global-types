"use strict"

const webpack = require("webpack")

module.exports = {
  entry: "./index.ts",
  output: {
    path: "./",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
}
