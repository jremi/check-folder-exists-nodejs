# Node module to check if local file path contains a specified folder name using NodeJS

This module returns a promise. This package is available via npm

    npm install --save check-folder-exists

# Example Usage

In the example below we are checking if the *filePath* (first parameter) **/Users/jremi/Documents** has *folderName* (second parameter) existing named **Foo**. 

**Note:** This example can be found in this repository inside */example.js*

    var checkFolderExists =  require('check-folder-exists');
    
    checkFolderExists('/Users/jremi/Documents/', 'Foo')
    .then(function(res){
	   console.log(res);
	})
    .catch(function(err){
	    console.log(err);
    });

Parameter 1, is the **filePath** 
Parameter 2, is the **folderName** to check

    - If folder is found, promise returns true
    - If folder is not found, promise returns false
    - If file path is invalid, promise returns error

## Questions
Shoot a message or open an issue. If you like this repo please ⭐ :) 

Pull requests are welcomed. 

If anyone has any code work, hit me up. I can always use some extra bucks.