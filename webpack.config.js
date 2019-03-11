const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: './src/index.js',
    header: './src/header.js',
    vendor: ['react', 'react-dom']
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          
          test: /[\\/]node_modules[\\/]/,
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },

  mode: 'development',

  watch: true,

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        } 
        
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: '[name].[ext]',
            outputPath: 'img/'
          
          }
        }
      }
    ]
  },
 
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
}