require! {
	"path": path
	"webpack": webpack
}

module.exports = {
	devtool: "sourcemap"
	entry: [
		#'webpack-hot-middleware/client'
		"./ls/app"
	]
	output: {
		path: path.join(__dirname, 'build')
		filename: 'bundle.js'
	}
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin()
		new webpack.HotModuleReplacementPlugin()
		new webpack.NoErrorsPlugin()
	]
	module: {
		loaders: [
			{
				test: /\.js$/
				loaders: [ "react-hot", "babel" ]
				include: path.join(__dirname, 'ls')
			}
			{
				test: /\.ls$/
				loaders: [ "react-hot", "livescript-loader" ]
				include: path.join(__dirname, 'ls')
			}
		]
	}
}
