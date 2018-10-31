const merge = require('webpack-merge')
const common = require('./webpack.common')
const { resolve } = require('path')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const distFolder = 'dist'

module.exports = merge(common, {
	mode: 'production',
	output: {
		path: resolve(__dirname, distFolder),
		filename: 'app.js'
	},
	plugins: [new CleanWebpackPlugin([distFolder])],
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			})
		]
	}
})
