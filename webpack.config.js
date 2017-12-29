const webpack = require('webpack')
const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = env => {
  const config = {
    entry: {
      app: './src/index',
    },
    output: {
      filename: '[name].bundle.js',
      path: __dirname + '/build',
    },
    module: {
      rules: [{ loader: 'ts-loader', test: /\.tsx?$/ }],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    plugins: [new webpack.NamedModulesPlugin()],
    devtool: 'eval-source-map',
  }

  if (env.production) {
    config.plugins = [
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
