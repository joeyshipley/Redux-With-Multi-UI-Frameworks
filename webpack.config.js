const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: {
    ng: "./src/ui/angular.index.js",
    react: "./src/ui/react/react.app.jsx"
  },
  output: {
    path: __dirname + '/build',
    filename: "[name].bundle.js",
    publicPath: "http://localhost:8080/"
  },
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ["es2015", "react"]
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
};