const { resolve } = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const distFolder = 'dist'
const nodeExternals = require('webpack-node-externals')

module.exports = {
	mode: 'production',
	target: 'node',
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	output: {
		path: resolve(__dirname, distFolder),
		filename: 'app.js'
	},
	plugins: [new CleanWebpackPlugin([distFolder])]
}
