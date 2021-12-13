const PATHS = require("./paths");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const commonWebpackConfig = require("./webpack.common");

const devWebpackConfig = merge(commonWebpackConfig, {
  // Set the mode to development or production
  mode: 'development',
  // Control how source maps are generated
  devtool: 'inline-source-map',
  // Spin up a server for quick development
  devServer: {
    static: {
      directory: PATHS.dist,
    },
    port: 9000,
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
