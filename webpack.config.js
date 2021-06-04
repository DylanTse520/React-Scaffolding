const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'index_bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.join(__dirname, 'node_modules')
        ],
        use: [{ loader: 'babel-loader' }],
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ],
  devServer: {
    host: 'localhost',
    port: 8008,
    open: true
  }
}