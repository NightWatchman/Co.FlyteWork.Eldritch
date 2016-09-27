module.exports = {
  entry: './scripts/app.js',
  output: {
    path: __dirname + '/scripts/built',
    filename: 'app.js'
  },
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: ['es2015']
      }
    }
  ]
}
