var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module:{
    loaders: [
      {test : /\.css$/, loader: 'style!css!'}
    ]
  }
}