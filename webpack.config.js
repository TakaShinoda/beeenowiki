const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = [
  {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, './dist/'),
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      open: true,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.(jpg|png|gif)$/,
          loader: ['url-loader'],
        },
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
    ],
  },
];