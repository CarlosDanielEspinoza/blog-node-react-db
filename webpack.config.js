const path = require("path");

module.exports = {
	entry: path.join(__dirname,"src","app","index.js"),

	output: {
		path: path.join(__dirname,"src","public"),
		filename: "main.js"
	},

	mode: process.env.NODE_ENV || "development",

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},

	resolve: {
		modules: [path.resolve(__dirname, "src"), "node_modules"],
	},

	devServer: {
		port: 4000,
		static: {
			directory: path.join(__dirname,"src","public"),
			publicPath: "/"
		},
	}

};