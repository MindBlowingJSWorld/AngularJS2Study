var fs = require('fs');

var readerStream = fs.createReadStream('input.txt');

//readerStream.setEncoding('UTF8');
var data = '';
readerStream.on('data', function(chunk){
    console.log('chunk : ' + chunk);
    data += chunk;
});

readerStream.on('end', function(){
    console.log('streaming finished');
    console.log('PRINTING FINAL DATA');
    console.log(data);
});

readerStream.on('error', function(error){
    console.log('Error thrown while streaming : ' + error);
});


console.log('Program ended');
