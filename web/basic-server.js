var http = require('http');
var handler = require('./request-handler');
var initialize = require('./initialize.js');
var httpHelper = require('./http-helpers');
var url = require('url');
var fs = require('fs');
// Why do you think we have this here?
// HINT: It has to do with what's in .gitignore
initialize('./archives');

var port = 8080;
var ip = '127.0.0.1';
var server = http.createServer(function(request, response) {
  console.log('serving ' + request.url + ' at method:' + request.method);
  // pull out path (Only GET, POST, OPTIONS allowed)
  let address = url.parse(request.url); // splits the url into different parts

  // route handler for non-archived pages
  if (address.pathname === '/' || address.pathname === '/styles.css' || address.pathname === '/loading.html') {
    
    if (request.method === 'GET') { // also have to send styles.css
      httpHelper.serveAssets(response, address.pathname);
      
      
    // if post request on home page
    // then invoke route handler
    } else if (request.method === 'POST') {
      //send to event handler
      handler.handleRequest(request, response);
      
    } else if (request.method === 'OPTIONS') {
      httpHelper.respondSuccess(response);
      
    } else {
      httpHelper.throwTeaPot(response);
    }
  // if get request to other path
      // attempt to serve archive
      // otherwise error
      
  // route handler for archived pages
  } else {
    if (request.method === 'GET') {
      //attempt to serve the page from archive
      // if archive doesnt contain page
        //throw error 404
        
    } else if (request.method === 'OPTIONS') {
      httpHelper.respondSuccess(response);
    
    } else {
      httpHelper.throwTeaPot(response);
    }
  }

});

if (module.parent) {
  module.exports = server;
} else {
  server.listen(port, ip);
  console.log('Listening on http://' + ip + ':' + port);
}



