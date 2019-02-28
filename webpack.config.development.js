const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: [
		'@babel/polyfill',
		path.join(__dirname, 'src/index.js'),
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'src'),
				use: {
					loader: 'babel-loader',
					options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['react-hot-loader/babel', '@babel/plugin-proposal-object-rest-spread'],
					},
				},
			},
			{
				test: /\.less$/,
				include: path.join(__dirname, 'src'),
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader', options: { modules: true, importLoaders: 1, localIdentName: '[name]__[local]___[hash:base64:5]' } },
					{ loader: 'less-loader' },
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html'),
			cache: true,
			inject: 'body',
		}),
	],
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    port: 3000,
    hot: true,
    hotOnly: true,
  },
};
