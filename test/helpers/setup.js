require('babel-register')({
  presets: ["react", "es2015"]

});
require('babel-polyfill');


global.document = require('jsdom').jsdom('<head><meta charset="utf-8"><title>GetWorking</title><meta name="viewport" content="width=device-width, initial-scale=1"></head><body><div id="application"></div></body>');

global.window = document.defaultView;

global.navigator = window.navigator;
