var path = require('path');

module.exports = {

mode: "production",
  entry: './src/index.js',

  output: {
    //出力先のフォルダ
    path: path.resolve(__dirname, 'build'),
    // 出力先のファイル名
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // export link Tag
          "style-loader",
          // bundle CSS 
          "css-loader",
          // sass2css
          "sass-loader",
        ],
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        type: "asset/inline",
      },
    ],
  },
  target: ["web", "es5"],

};