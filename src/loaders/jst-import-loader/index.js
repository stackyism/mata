/**
 * User: abhinavsingi
 * Date: 09/01/16
 * Time: 12:33 PM
 * Desc: in a jst template - export window.JST_TEMPLATES also
 */

module.exports = function ( content ) {
  var namespace, regex, match;
  this.cacheable && this.cacheable();

  regex = /window.JST_([A-Z_]+)/;
  match = regex.exec( content );

  if ( Array.isArray( match ) ) {
    namespace = match[ 1 ];
  }

  return content + ' module.exports = window.JST_' + namespace + ';\n';
};