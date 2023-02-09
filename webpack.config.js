const path = require('path')

module.exports = {
  entry: './app/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,
  devServer: {
      port: 8080,
      contentBase: path.resolve(__dirname, 'public'),
      hot: true
    },
    mode: 'development',
}