const path = require('path')
const HelloWorldPlugin = require('./hello-world');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  //entry: './src/index.js',
  entry: {
    app: './src/index.js',
    //print: './src/print.js'
  },
  output: {
    //filename: 'bundle.js',
    filename:'[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
   module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       }
     ]
   },
   plugins:[
      new CleanWebpackPlugin(['dist']),
      new CopyWebpackPlugin([{ from: 'src', to: 'copy' }]),
      new HtmlWebpackPlugin({ title: 'Output Management'}),
      new HelloWorldPlugin({options:true}),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()

   ],
   devServer: {
      contentBase: './dist',
      hot:true
   }
};