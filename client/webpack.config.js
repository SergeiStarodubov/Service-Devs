const path = require('path');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
              loader: "style-loader"
          }, 
          {
              loader: "css-loader"
          }, 
          {
            loader: "sass-loader",
            options: 
              {
                includePaths: ["absolute/path/a", "absolute/path/b"]
              }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      }
    ],
  },
  devtool: "eval-sourcemap"
};