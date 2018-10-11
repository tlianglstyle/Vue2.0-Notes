const path = require('path')
var HelloWorldPlugin = require('./hello-world');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  //entry: './src/index.js',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
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
      new HelloWorldPlugin({options:true})

   ]
};