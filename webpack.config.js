var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src/');

module.exports = (env) => {
  return {
    context: __dirname,
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
      path: __dirname + "/dist",
      publicPath: "/dist/",
      filename: "bundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.scss$/,
          loaders: [{
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
        }],
    },
    plugins: env.dev=="false" ? [
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        warnings: false,
      })
    ] : []
  }
}