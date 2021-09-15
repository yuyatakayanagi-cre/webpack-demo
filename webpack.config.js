var path = require('path');

module.exports = {

mode: "production",
  // どのファイルを読み込むか　default=> ./src/index.js
  entry: './src/index.js',

  output: {
    //出力先のフォルダ
    path: path.resolve(__dirname, 'build'),
    //出力先のファイル名
    filename: 'bundle.js'
  },

  module: {
    rules: [
      // Sassファイルの読み込みとコンパイル
      {
        // 拡張子がsassとscssのファイルを対象とする
        test: /\.s[ac]ss$/i,
        // ローダー名 
        use: [
          // linkタグに出力する機能
          "style-loader",
          // CSSをバンドルするための機能
          "css-loader",
          // sass2css
          "sass-loader",
        ],
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        // 画像をBase64として取り込む
        type: "asset/inline",
      },
    ],
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],

};