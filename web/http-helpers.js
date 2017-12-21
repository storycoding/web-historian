var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');


exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

var router = {
  '/': './public/index.html',
  '/styles.css': './public/styles.css',
  '/loading.html': './public/loading.html'
};


// serve the index.html here
exports.serveAssets = function(res, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
  
  //kirk suggested the test was failing because it couldn't access our router[asset]
  fs.readFile( __dirname + '/public/index.html', function(err, data) {
    
    if (err) {
      console.log('err = ', err);
      exports.throwTeaPot(request, response);
    }
    res.writeHead(200, exports.headers);
    res.write(data);
    res.end();
  });
};

exports.respondSuccess = function(request, response) {
  response.writeHead(200
  , exports.headers);
  response.end();
};

exports.throwTeaPot = function(request, response) {
  response.writeHead(418
  , exports.headers);
  response.end('The requested entity body is short and stout. Tip me over and pour me out.');
};


// As you progress, keep thinking about what helper functions you can put here!
