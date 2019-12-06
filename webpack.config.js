const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { resolve, join } = require('path')

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development'
  return {
    mode: argv.mode,
    entry: './src/index.js',
    output: {
      filename: 'main.[hash].js',
      path: resolve(__dirname, 'build'),
      publicPath: '/',
    },
    devtool: isDev
      ? '#eval-source-map'
      : false,
    devServer: {
      contentBase: join(__dirname, 'build'),
      port: 8080,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            outputPath: 'assets',
            publicPath: 'assets',
          },
        },
        {
          test: /\.(woff(2)?|(o|t)?tf)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts',
                publicPath: 'fonts',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        components: resolve(__dirname, 'src/components/'),
        pages: resolve(__dirname, 'src/pages/'),
        utils: resolve(__dirname, 'src/utils/'),
        styles: resolve(__dirname, 'src/styles/'),
        assets: resolve(__dirname, 'src/assets/'),
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HTMLWebpackPlugin({
        template: resolve(__dirname, 'src/index.html'),
      }),
    ],
  }
}
