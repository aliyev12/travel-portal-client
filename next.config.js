const withCSS = require("@zeit/next-css");
const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

module.exports = withCSS({
  webpack(config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]"
        }
      }
    });
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  }
});
