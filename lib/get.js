var winston = require('winston');
var scraperjs = require('scraperjs');

var logger = new(winston.Logger)({
  level: 'info',
  transports: [
    new(winston.transports.Console)()
  ]
});

function getDownloadURL(url, selector) {
  var injectedFunc = new Function("return " + "function ($) { return $('" + selector + "').map(function() { return $(this).prop('outerHTML');}).get(); }")();

  return scraperjs.DynamicScraper.create(url)
    .scrape(injectedFunc)
    .then(function(result) {
      // return JSON.stringify(result, null, 2);
      return result.join('\r\n');
    });
}

module.exports = getDownloadURL;
