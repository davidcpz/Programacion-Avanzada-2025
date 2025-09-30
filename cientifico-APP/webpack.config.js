/* const path = require('path');/*importo una libreria dentro de nodemodule path meneja la ruta de los archivos   */
/* const HtmlWebpackPlugin = require('html-webpack-plugin');/* plugin para generar archivos estaticos en html */
/* const CopyWebpackPlugin = require('copy-webpack-plugin');/*plugin para css sirve para mimificar   */

/* module.exports = {/* estructura de exportacion */
/* entry: './index.js',/* es como nuestro index punto de entrada*/
/*output: {
path: path.resolve(__dirname, 'dist'),/* directorio de salida para construir nuestro archivo de produccion */
/*filename: 'main.js',/* nombre de archivo de la salida */
/*publicPath: '/',/* ruta del proyecto */
/*clean: true,
},
resolve: {/* resuelve todas las extenciones */
/*extensions: ['.js'],
},
module: {/* modulos */
/*rules: [
{
test: /\.js$/,
exclude: /node_modules/,/* npm ram bill excluya la carpeta node_ */
/*use: {
loader: 'babel-loader',
options: {
presets: ['@babel/preset-env']
}
}
}
]
},
plugins: [
new HtmlWebpackPlugin({
inject: true,
template: './public/index.html',
filename: './index.html',
}),
new CopyWebpackPlugin({
patterns: [
{ from: './src/styles/styles.css', to: 'styles.css' }
],
})
],
devServer: {
static: {
directory: path.join(__dirname, 'dist'),
},
compress: true,
port: 3000,
open: true,
historyApiFallback: true,
}
}*/
// webpack.config.js


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') })
  ],
  devServer: {
    static: { directory: path.resolve(__dirname, 'dist') },
    port: 3000,
    open: true,
    hot: true
  },
  mode: 'development'
};

