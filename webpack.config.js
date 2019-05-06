const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

const extractor = (isDev, isMod) => ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: [
    {
      loader: 'css-loader',
      options: {
        sourceMap: isDev,
        importLoaders: 1,
        modules: isMod
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: isDev,
        plugins: () => [
          autoprefixer({ browsers: ['last 2 versions'] }),
          cssnano()
        ]
      }
    },
    {
      loader: 'less-loader',
      options: { sourceMap: isDev }
    }
  ]
})

module.exports = (env, { mode }) => {
  const isDev = mode === 'development'
  const fname = `[name].bundle${isDev ? '' : '.[contenthash]'}.js`

  return {
    context: __dirname,
    mode: mode,
    devtool: isDev ? 'source-map' : false,
    entry: { app: './index.js' },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: fname,
      chunkFilename: fname
    },
    resolve: {
      extensions: ['.js', '.jsx', '.less']
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'source-map-loader'
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.(less|css)$/,
          include: [ path.resolve(__dirname, 'src') ],
          use: extractor(isDev, true)
        },
        {
          test: /\.(less|css)$/,
          exclude: [ path.resolve(__dirname, 'src') ],
          use: extractor(isDev, false)
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: 'file-loader'
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'style.css',
        allChunks: true,
        disable: isDev
      }),
      new HtmlPlugin({
        template: 'index.ejs',
        minify: {
          collapseWhitespace: true,
          minifyCSS: true
        }
      })
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
          bundle: {
            name: 'commons',
            chunks: 'all',
            minChunks: 3,
            reuseExistingChunk: false
          },
          vendors: {
            name: 'vendors',
            chunks: 'initial',
            test: 'vendors'
          },
          styles: {
            name: 'styles',
            chunks: 'all',
            test: /\.(less|css)$/
          }
        }
      }
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      open: true,
      historyApiFallback: true
    }
  }
}
