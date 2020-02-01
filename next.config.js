const withCSS = require("@zeit/next-css");
// module.exports = withCSS({
//   /* my next config */
// });

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
// next.config.js
module.exports = withCSS();
