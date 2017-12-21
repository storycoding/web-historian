var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelper = require('./http-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) { // this is only for post requests on homepage
  var url = req.url;

  httpHelper.bufferData(req, function(data) {
    let url = data.substr(data.indexOf('=') + 1);
    archive.isUrlInList(url, function(bool) {
      if (bool) {
        archive.isUrlArchived(url, (isArchived) => {
          if (isArchived) {

          } else {
            httpHelper.serveAssets(res, '/loading.html');
          }

        });

      } else {
        archive.addUrlToList(url, function() {
          httpHelper.serveAssets(res, '/loading.html');
        });
      }
    });
  });
  // console.log('outside-requestedURL: ', requestedUrl);
  // archive.isUrlInList(url, archive.readListOfUrls); // needs to take cb
  // archive.readListOfUrls(archive.isUrlInList);
  
  
  // pull out the requested URL
  // read URL list and store in array - readList
  // isURLInList?
    // if no,
      // addURLToList
      // send wait message
    // if yes, isArchived?
      // if yes, serve file
      // if no, send wait message

  // res.end();
};

