import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  devtool: 'source-map',
  entry: './src/index',
  resolve: {
    root: include,
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      react: join(__dirname, 'node_modules', 'react'),
    },
  },
  output: {
    path: join(__dirname, 'umd'),
    libraryTarget: 'umd',
    library: 'MobXReactMatchMedia',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include,
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }],
  },
};
