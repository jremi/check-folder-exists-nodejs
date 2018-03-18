const { spawn } = require('child_process');

module.exports = checkFolderExists;

function checkFolderExists(filePath, folderName, cb){
    return new Promise(function(resolve,reject){
        if((filePath || folderName) === undefined){
            reject('Missing filePath or folderName parameters');
        }
        var ls = spawn('ls', [filePath]);
        ls.stdout.on('data', (data) => {
            var dataDir = data.toString('utf8'),
                dataDirArray = dataDir.split('\n');
            dataDirArray.splice(-1);
            var filteredArray = dataDirArray.filter(function (element) { 
                return element === folderName;
            });
            if(filteredArray.length === 0) {
                resolve(false);
            }
            else { 
                resolve(true);
            }
        });
        ls.stderr.on('data', (data) => {
            reject('Error reading file path: ' + filePath, data.toString('utf8'));
        });
    });
}