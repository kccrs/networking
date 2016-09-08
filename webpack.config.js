const path = require('path');

module.exports = {
  entry: {
    main: ['babel-polyfill', './lib/index.js'],//what is babel-polyfill
    test: "mocha!./test/index.js"
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',//what does this do?
    filename: "[name].bundle.js"
  },
  module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react'],
          },
        },
        { test: /\.svg$/, loader: 'svg-url-loader'},
        { test: /\.css$/, loader: 'style!css' },
        { test: /\.scss$/, loader: 'style!css!sass' },
      ],
    },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css']
  }
};


// wdio wdio.conf.js

// ./node_modules/.bin/wdio wdio.conf.js
