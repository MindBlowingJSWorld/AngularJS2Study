var fs = require('fs');



console.log('Program ended');



var readStream = function(){
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
        writeStream(data);
    });

    readerStream.on('error', function(error){
        console.log('Error thrown while streaming : ' + error);
    });

};

var writeStream = function(data){
    var writerStream = fs.createWriteStream('input2.txt');
    writerStream.write(data);

    // Mark the end of file
    writerStream.end();

    // Handle stream events --> finish, and error
    writerStream.on('finish', function() {
        console.log("Write completed.");
    });

    //
    writerStream.on('error', function(err){
        console.log(err.stack);
    });

};

readStream();