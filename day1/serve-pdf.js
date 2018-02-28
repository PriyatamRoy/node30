var http = require('http');
var fs = require('fs');
console.log('Server will listen at :  127.0.0.1:3000 ');
http.createServer( (req, res)=> {
	console.log("Port Number : 3000");
	// Change the MIME type to application/pdf

	fs.readFile('assets/sample.pdf', (error, data) => {
		if(error){
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(JSON.stringify({'status':'error',msg:error}));
		}else{	
			res.writeHead(200, {"Content-Type": "application/pdf"});		
			res.write(data);
			res.end();       
		}
	});
}).listen(3000);