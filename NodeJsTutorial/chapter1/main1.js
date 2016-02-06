/**
 1. Require
 2. Create Server
 3. Read request and responses

 */
console.log('node.js demo tested');
var http = require('http');

var server = http.createServer(function(request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "Hello World"
    response.end('Hello World\n');
});

//Server start
server.listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');



