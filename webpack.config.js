const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js",
    test: "mocha!./test/index.js"
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: '/node_modules/', loader: 'babel-loader' },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.css']
  },
  devtool: 'cheap-source-map'
};


// wdio wdio.conf.js

// ./node_modules/.bin/wdio wdio.conf.js
