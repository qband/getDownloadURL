var winston = require('winston');
var scraperjs = require('scraperjs');

var logger = new(winston.Logger)({
  level: 'info',
  transports: [
    new(winston.transports.Console)()
  ]
});

function getDownloadURL(url, selector) {
  var injectedFunc = new Function("return " + "function ($) { return $('" + selector + "').text(); }")();

  return scraperjs.DynamicScraper.create(url)
    .scrape(injectedFunc)
    .then(function(result) {
      return result;
    });
}

module.exports = getDownloadURL;
