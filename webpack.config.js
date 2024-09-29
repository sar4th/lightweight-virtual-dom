const path = require("path");

module.exports = {
  entry: "./tests/vdom.test.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "tests"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
