const path = require('path');

module.exports = {
  entry: './src/types/index.t.ts',
  module: {
    rules: [
      {
        test: /\\.(png|jp(e*)g|svg|gif)$/,
        use: 'file-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
