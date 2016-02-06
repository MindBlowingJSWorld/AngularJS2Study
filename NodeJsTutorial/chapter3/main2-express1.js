
var express = require('express');

var app = express();

app.get('/', function(request, response){
    response.send('Hello World, request successful');
});

var server = app.listen(8081, function(){

});

var host = server.address().address;
var port = server.address().port;

console.log('server is listening on http://%s:%s', host, port);