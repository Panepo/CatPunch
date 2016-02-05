var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: "sourcemap",
  entry: [
    //'webpack-hot-middleware/client',
    './js/app'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ "react-hot", "babel" ],
        include: path.join(__dirname, 'js')
      }
    ]
  }
}
