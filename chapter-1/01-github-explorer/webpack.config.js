const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
//checando qual o e o hambiente, se for diferente de production
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production', //modo de deselvolvimento, evita a demora do carregamento
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', //ferramenta pra ajudar a enxergar erro
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), 
    hot: true,
    //onde esta o arquivo para ficar observando mudancas
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean), //pluigin que injeta o arquivo budle.js no HTML
 // .filter e pra remover o false, caso nao seja hambiente de desenvolvimento
  module: {
      rules: [
          {
              test: /\.(j|t)sx$/,
              exclude: /node_modules/,
              use: {
                loader:'babel-loader',
                options: {
                  plugins: [
                    isDevelopment && require.resolve('react-refresh/babel')// plugin do fast refresh, nao muda o estado
                  ].filter(Boolean)
                }
              }
          },          
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader','css-loader', 'sass-loader'],
          }
      ]
  }
}