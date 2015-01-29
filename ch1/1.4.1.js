var fs = require('fs');

fs.readFile('./1.4.1/file1.txt', function(err, file){
	console.log('File1 Done.');
});
console.log('Out Function 1.');

fs.readFile('./1.4.1/file2.txt', function(err, file){
	console.log('File2 Done.');
});
console.log('Out Function 2.');

fs.readFile('./1.4.1/file3.txt', function(err, file){
	console.log('File3 Done.');
});
console.log('Out Function 3.');