const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  title: "Electron",
  template: __dirname + "/src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/app.js",
  target: "electron-renderer",
  output: {
    path: path.resolve(__dirname, "app"),
    publicPath: "./",
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: "[absolute-resource-path]"
  },
  module: {
    rules: [
      {
        test: /\.js(x*)$/,
        exclude: [/node_modules/, /.json?/, /.test.js/],
        use: {
          loader: "babel-loader",
          query: {
            presets: ["env", "react"]
          }
        }
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [htmlPlugin],
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
