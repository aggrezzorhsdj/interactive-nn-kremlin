const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/*
* конфигурация сборщика приложения
 */
module.exports = (mode) => ({
	mode,
	entry: "./src/index.tsx",
	output: {
		filename: "[name].[chunkhash].js",
		path: path.resolve(__dirname, "dist"),
		clean: true
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	devtool: mode === "development" ? "source-map" : false,
	devServer: {
		port: 3030,
		open: true
	},
	// оптимизация посредством разделения файлов библиотек конечной сборки
	optimization: {
		splitChunks: {
			chunks: "all",
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name(module) {
						const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/) ?? 'package';
						return `${packageName[1].replace('@', '')}`;
					}
				}
			}
		},

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
			filename: '[name].[chunkhash].css',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'public' }
			]
		})
	],
})
