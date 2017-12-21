var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelper = require('./http-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) { // this is only for post requests on homepage
  var url = req.url;
  archive.readListOfUrls(archive.isUrlInList);
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
