const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = () => {
  return {
    mode: process.env.NODE_ENV ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env'],
                  ['@babel/preset-react']
                ]
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ],
    devServer: {
      contentBase: './dist'
    }
  }
}
