const PATHS = require("./paths");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const commonWebpackConfig = require("./webpack.common");

const devWebpackConfig = merge(commonWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: PATHS.dist,
    },
    port: 3000,
    compress: true,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
