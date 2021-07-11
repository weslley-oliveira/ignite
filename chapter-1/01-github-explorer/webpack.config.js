const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

//checando qual o e o hambiente, se for diferente de production
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production', //modo de deselvolvimento, evita a demora do carregamento
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', //ferramenta pra ajudar a enxergar erro
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
      extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), 
    //onde esta o arquivo para ficar observando mudancas
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
    })
  ], //pluigin que injeta o arquivo budle.js no HTML
  module: {
      rules: [
          {
              test: /\.jsx$/,
              exclude: /node_modules/,
              use: 'babel-loader',
          },          
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader','css-loader', 'sass-loader'],
          }
      ]
  }
}