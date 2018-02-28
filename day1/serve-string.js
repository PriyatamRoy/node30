var http = require('http');

var host = '127.0.0.1'
var port = 3000

var server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World!");
  response.write("Hello World!");
  response.write("Hello World!");
  response.end();
});

//In the above section we used response.end() to send the response 
//but we can only send one response using this. however , we can send
// as many responses as we want using response.write() method

server.listen(port, host, (error) => {  
  if (error) {
    return console.log('Error occured : ', error );
  }

  console.log('server is listening on ' + host + ':'+ port);
});