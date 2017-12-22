// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.

var archive = require('../helpers/archive-helpers');
var fs = require('fs');


archive.readListOfUrls(function(importedData) {

  let urls = importedData;

  fs.writeFile(archive.paths.list, '', function(err) {
    if (err) { throw err; }
    console.log('sites.text was cleared!');
  });

  archive.downloadUrls(urls);

});

// CRONJOB
// archive.downloadUrls(urls)//
// hasURLListChanged?
  // Create queue based on diff
  // while queue is not empty
    // download URL of first item in queue
    // write archive to the 'sites' folder
    // remove url from queue

//setInterval on cronjob