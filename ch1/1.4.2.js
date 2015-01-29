var http = require('http');
var querystring = require('querystring');

// Listening request event
http.createServer(function(req, res){
	var postData = '';
	req.setEncoding = 'utf8';
	
	// data event
	req.on('data', function(chunk){
		postData += chunk;
	});
	
	// end event
	req.on('end', function(){
		res.end(postData);
	});
}).listen(8080);

console.log('Server Started.')