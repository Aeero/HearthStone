var path = require('path');
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
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint-loader?{rules:{semi:0}}',
            exclude: /node_modules/,
          },],
        loaders: [{
            test: /\.js[x]?$/,
            loader: 'react-hot!babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0',
            include: /src/,
            exclude: /node_modules/,
          }, {
            test: /\.css$/,
            // loader: ExtractTextPlugin.extract('style', 'css!postcss'),
            loader: 'style!css!postcss'
          }, {
            test: /\.scss$/,
            // loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
            loader: 'style!css!postcss!sass'
          }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=8192',
          },],
      },

    postcss: [
        require('autoprefixer'), //调用autoprefixer插件,css3自动补全
    ],


    devServer: {
        // contentBase: './src/views',  //本地服务器所加载的页面所在的目录
        port: 8080,
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true,
        proxy: {
          '/8hpoty': {
            target: 'http://i1.17173cdn.com/',
            secure: false,
            changeOrigin: true
          },
          '/v1': {
            target: 'http://media.services.zam.com/',
            secure: false,
            changeOrigin: true
          }
        },
        hot: true//实时刷新
      },

    plugins: [
        new ExtractTextPlugin('main.css')
    ],

  };
