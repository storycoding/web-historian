// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.

var archive = require('../helpers/archive-helpers');

// CRONJOB

// hasURLListChanged?
  // Create queue based on diff
  // while queue is not empty
    // download URL of first item in queue
    // write archive to the 'sites' folder
    // remove url from queue



//setInterval on cronjob