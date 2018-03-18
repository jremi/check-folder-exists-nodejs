/*

    * Parameter 1, is the file path 
    * Parameter 2, is the folder name to check

    - If folder is found, promise returns true
    - If folder is not found, promise returns false
    - If file path is invalid, promise returns error

*/

var checkFolderExists = require('./checkFolderExists.js');

checkFolderExists('/Users/jremi/Documents/', 'code')
  .then(function(res){
    console.log(res);
  })
  .catch(function(err){
    console.log(err);
  });