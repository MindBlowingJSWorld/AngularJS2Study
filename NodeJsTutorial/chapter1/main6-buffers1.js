var buff1 = new Buffer(100);

var buff2 = new Buffer([10,20,30,40,50,60]);

var buff3 = new Buffer('Simply easy learning','utf-8');

console.log(buff1.toString());
console.log(buff2.toString());
console.log(buff3.toString());

var len = buff1.write('Testing if test can be added');

console.log(len);
console.log(buff1.toString());

