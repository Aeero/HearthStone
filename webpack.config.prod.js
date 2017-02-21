var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(ROOT_PATH, 'src/views')

var ExtractTextPlugin = require('extract-text-webpack-plugin'); // css单独打包
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',

    entry: {
      index: path.resolve(APP_PATH, 'index.js')
    },
    output: {
        path: BUILD_PATH, //打包后的文件存放的地方
        filename: 'bundle.js', //打包后输出文件的文件名
        publicPath: '/'
      },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            loader: 'react-hot!babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0',
            include: /src/,
            exclude: /node_modules/,
          }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss'),
          }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
          }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=8192',
          },],
      },

    postcss: [
        require('autoprefixer'), //调用autoprefixer插件,css3自动补全
    ],

    plugins: [
        // 压缩代码
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new HtmlwebpackPlugin({
          title: '炉石社区',
          template: path.resolve(TEM_PATH, 'index.html'),
          filename: path.resolve(BUILD_PATH, 'index.html'),
          inject: 'body'
        }),
        new ExtractTextPlugin('main.css')
    ],

  };
