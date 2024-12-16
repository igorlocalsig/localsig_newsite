const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',  // Ponto de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),  // Diretório de saída
    filename: 'bundle.js',  // Nome do arquivo de saída
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],  // Extensões que o Webpack pode resolver
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,  // Arquivos TypeScript/JSX
        use: 'ts-loader',  // Usa o ts-loader para compilar TypeScript
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,  // Arquivos JavaScript
        use: 'babel-loader',  // Usa o Babel para compilar
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // Arquivo HTML de template
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),  // Diretório dos arquivos estáticos
    },
    port: 3000,  // Porta do servidor
    open: true,   // Abre o navegador automaticamente
    hot: true,    // Habilita o Hot Module Replacement
    historyApiFallback: true,  // Suporte para navegação em SPA (Single Page Application)
  },
};
