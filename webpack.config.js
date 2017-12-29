const webpack = require('webpack')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const { resolve } = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const sourcePath = resolve(__dirname, 'src')
const buildPath = resolve(__dirname, 'build')

module.exports = (env = {}) => {
  const html = new HtmlPlugin({
    template: './index.html',
    chunksSortMode: 'dependency',
  })

  const config = {
    entry: {
      app: './src/index',
    },
    output: {
      filename: '[name].bundle.js',
      path: buildPath,
    },
    module: {
      rules: [
        {
          loader: 'ts-loader',
          test: /\.tsx?$/,
          include: [sourcePath],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    plugins: [html, new webpack.NamedModulesPlugin()],
    devtool: 'eval-source-map',
  }

  if (env.production) {
    config.plugins = [
      html,

      new webpack.DefinePlugin({
        'process.env.NODE_ENV': `"production"`,
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'lib',
        minChunks: ({ resource }) => resource && resource.includes('node_modules'),
      }),

      new webpack.optimize.ModuleConcatenationPlugin(),

      new UglifyPlugin({
        sourceMap: true,
      }),
    ]

    config.devtool = 'source-map'
  }

  return config
}
