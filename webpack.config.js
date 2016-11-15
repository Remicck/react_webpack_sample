module.exports = {
  entry: {
    javascript: __dirname + "/src/main.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "like-button.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "stage-0"]
        }
      }
    ]
  },
  devServer: {
    contentBase: 'dist',
    inline: true,
    hot: true
  }
};
