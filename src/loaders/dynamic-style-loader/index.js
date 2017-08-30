/**
 * Created by nihartrivedi810 on 26/12/16.
 */
var loaderUtils = require("loader-utils");
var insertCssPath = 'isomorphic-style-loader/lib/insertCss.js';

module.exports = function loader() {};
module.exports.pitch = function pitch(remainingRequest) {
  this.cacheable && this.cacheable();

  return `
    var fileContent = require(${loaderUtils.stringifyRequest(this, `!!${remainingRequest}`)});
    var insertCss = require(${loaderUtils.stringifyRequest(this, `!${insertCssPath}`)});
    var content =  fileContent;
    if (typeof content === 'string') {
      content = [[module.id, fileContent, '']];
    }

    module.exports = content.locals || {};
    module.exports._processCss = function (theme) {
          return fileContent.toString().replace(/var\\(\\-\\-([^\\)]+)\\)/g,
            function (match, p1)  {
                return theme[p1]
            })
      };
    module.exports._getCss = function() { return fileContent.toString(); };
    module.exports._insertCss =  function (rawContent) {return insertCss([[module.id, rawContent || fileContent.toString(), '']])};
  `;
};
