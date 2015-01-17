var replaceStream = require("replacestream");
var fs = require('fs');
var path = require("path");
var data = require("./morphiso-7c8f2a51-d1f5-4534-9a16-1d689c3b3e76");

///////////////////////////////////////////////////////////////////////////////

module.exports = morphiso;
module.exports.middleware = middleware;

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function middleware(filePath){
  return function(req, res, next){
    filePath = filePath || path.dirname(require.main.filename)+req.originalUrl;

    fs.createReadStream(filePath)
      .pipe(replaceStream('require('+'"./morphiso-7c8f2a51-d1f5-4534-9a16-1d689c3b3e76"'+');', JSON.stringify(data)))
      .pipe(res);
  }
}

///////////////////////////////////////////////////////////////////////////////

function morphiso(key, defaults){  
  data[key] = data[key] || defaults || {};
  return data[key];
}

///////////////////////////////////////////////////////////////////////////////

