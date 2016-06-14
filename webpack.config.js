const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const AureliaWebpackPlugin = require('aurelia-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    angular: "./src/ui/angular/angular.app.js",
    react: "./src/ui/react/react.app.jsx",
    aurelia: "./src/ui/aurelia/aurelia.app.js"
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
          presets: ["es2015", "stage-0", "react"],
          plugins: ["angular2-annotations", "transform-runtime", "transform-decorators-legacy"]
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.html$/,
        loader: "html"
      }
    ]
  },
  htmlLoader: {
    ignoreCustomFragments: [/\{\{.*?}}/]
  },
  plugins: [
    new AureliaWebpackPlugin({
      src: path.resolve('./src/ui/aurelia'),
      root: path.resolve('.')
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
};
