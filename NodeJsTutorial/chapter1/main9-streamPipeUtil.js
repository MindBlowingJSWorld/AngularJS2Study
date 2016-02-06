var fs = require('fs');
var zLib = require('zlib');


var compressFile = function(file){

    var zipFileName = file + '.gz';
    fs.createReadStream(file)
        .pipe(zLib.createGzip())
        .pipe(fs.createWriteStream(zipFileName));

    console.log('zip file created with name : ' + zipFileName);

};

var uncompressFile = function(zipFileName, unzipFileName){

    fs.createReadStream(zipFileName)
        .pipe(zLib.createGunzip())
        .pipe(fs.createWriteStream(unzipFileName));

    console.log('unzipped file created with name : ' + unzipFileName);

};

var copyFile = function(srcFile, outputFile){

    var readerStream = fs.createReadStream(srcFile);
    var writerStream = fs.createWriteStream(outputFile);

    readerStream.pipe(writerStream);
    console.log('file copied successfully');
};


var file1 = 'input.txt';

copyFile(file1, 'input_1.txt');
compressFile('input_1.txt');
uncompressFile('input_1.txt.gz','input_2.txt');
