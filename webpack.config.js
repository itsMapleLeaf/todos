module.exports = {
  entry: './src/index',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      { loader: 'ts-loader', test: /\.tsx?$/ }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  }
}
