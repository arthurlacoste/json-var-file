const fs = require('fs');
const filenamify = require('filenamify');

var verbose = false
/*
* return a JSON variable from a namespace
* (called string)
*/

exports.get = function(string) {
  try {
    return require("json-var-file/data/"+filenamify(string)+".json");
  } catch (ex) {
    if(verbose===true) {
      id.log(ex);
      return false;
    }
  }
}

/*
* Save string file with JSONvar variable
*/
exports.save = function(string, JSONvar) {
  fs.writeFile("node_modules/json-var-file/data/" + filenamify(string) + ".json", JSON.stringify(JSONvar), {flag: 'w'}, function (err, data) {
    if (err) {
      id.log(err) ;
    } else if(verbose===true) {
      console.log('The file has been saved!');
    }
  })
}
