

// Prints path of current file being executed
console.log(__filename);

// Prints current directory path
console.log(__dirname);

//setTimeout

setTimeout(function(){
    console.log('I was waiting to be executed');
}, 1000);

var counter = 0;
var timer = setInterval(function(){
    console.log('I will get executed everytime, the time triggers, count = ' + counter);
    counter ++;
}, 1000);

// Clears Timeout
// clearTimeout(setTimeout1, 5000);

// Clear Interval
//clearInterval(timer, 15000);



console.log('Once the timeout is done, the function will executed');



