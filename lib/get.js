var winston = require('winston');
var scraperjs = require('scraperjs');

var logger = new(winston.Logger)({
  level: 'info',
  transports: [
    new(winston.transports.Console)()
  ]
});

function _conposeSelectors(selectors) {
  var query = '';
  for (var i = 0; i < selectors.length; i++) {
    var selector = selectors[i];
    if (i == 0) {
      query += '$("' + selector + '")';
    } else {
      query += '.find("' + selector + '")';
    }
  }
  return query;
}

function _extractResult(output) {
  if (output == 'html') {
    return '.prop("outerHTML").replace(/\\r?\\n|\\r/g, "")';
  } else if (output == 'text') {
    return '.text().replace(/\\r?\\n|\\r/g, "")';
  } else if (/^attr@(\S+)/.test(output)) {
    return '.attr("' + output.match(/^attr@(\S+)/)[1] + '")';
  } else {
    throw "[ERROR] output option not right !";
  }
}

function _generateInjectedFunc(selectors, output) {
  var query = _conposeSelectors(selectors);
  var extract = _extractResult(output);
  logger.debug("selector: " + query);
  logger.debug("extractor: " + extract);

  return new Function('return ' + 'function ($) { return ' + query + '.map(function() { return $(this)' + extract + ';}).get(); }')();
}

function getDownloadURL(url, selectors, output, isDebug) {
  if (isDebug) logger.transports.console.level = 'debug';
  var injectedFunc = _generateInjectedFunc(selectors, output);

  return scraperjs.DynamicScraper.create(url)
    .scrape(injectedFunc)
    .then(function(result) {
      // return JSON.stringify(result, null, 2);
      return result.join('\r\n');
    });
}

module.exports = getDownloadURL;
