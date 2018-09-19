const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./js/ClientApp.jsx",
  devtool: "cheap-eval-source-maps",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    publicPath: "/public/"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  }
};