const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => ({
	entry: "./src/index.tsx",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	devtool: "source-map",
	devServer: {
		port: 3030,
		open: true
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: "babel-loader"
			},
			{
				test: /\.(sa|sc|c)ss$/, // styles files
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader"
				],
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
				loader: "url-loader",
				options: { limit: false },
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html", // to import index.html file inside index.js
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'public' }
			]
		})
	],
})
