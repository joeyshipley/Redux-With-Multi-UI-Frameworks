module.exports = {
  entry: {
        ng: "./angular.index.js",
        react: "./react.index.js"
  },
  output: {
    path: __dirname + '/public',
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};