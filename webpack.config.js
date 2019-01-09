const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = function(env, arg) {
  const mode = arg.mode === "production" ? "production" : "development";
  const config = {
    mode: mode,
    entry: {
      navapp: './demo/navapp.jsx',
      sideapp: './demo/sideapp.jsx'
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js',
      chunkFilename: '[name].js'
    },
    resolve: {
      extensions: ['.jsx', '.js']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /\/node_modules\//,
          use: [
            { loader: 'babel-loader' }
          ]
        },
        {
          test: /\.(sc|c)ss?$/,
          exclude: /\/node_modules\//,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                import: true
              }
            },
            "sass-loader"
          ]
        }
      ]
    },
    "devServer": {
      "contentBase": 'dist'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].css'
      }),
      new HtmlPlugin({
        filename: 'nav.html',
        template: './demo/nav.ejs',
        chunks: ['navapp']
      }),
      new HtmlPlugin({
        filename: 'side.html',
        template: './demo/side.ejs',
        chunks: ['sideapp']
      }),
    ]
  };

  return config;
};
