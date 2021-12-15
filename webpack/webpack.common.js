const PATHS = require('./paths');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    index: ["./source/index.tsx"]
  },
  output: {
    filename: "[name].js",
    path: PATHS.dist,
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "./assets/fonts/[name].[ext]"
        }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { 
              sourceMap: true,
              modules: {
                localIdentName: "[local]__[hash:base64:5]",
              }
            }
          },
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  require("autoprefixer"),
                  require("cssnano")({
                    preset: [
                      "default",
                      {
                        discardComments: {
                          removeAll: true,
                        },
                      },
                    ],
                  }),
                ]
              }
            }
          },
        ]
      }
    ]
  },
  resolve: {
    mainFields: ["main", "module"],
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".css", ".scss"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new CopyWebpackPlugin({
        patterns: [
          { from: `${PATHS.src}/${PATHS.assets}`, to: `${PATHS.assets}` },
          { from: `${PATHS.src}/${PATHS.public}`, to: `${PATHS.public}` },
          { from: `${PATHS.src}/index.html`, to: "index.html" },
        ]
      }
    )
  ]
};
