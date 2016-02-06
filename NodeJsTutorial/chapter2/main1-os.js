

var os = require('os');

console.log('total Number of CPUs : ' + os.cpus().toString());

os.cpus().forEach(function(cpu){
   console.log('CPU Details : ' + JSON.stringify(cpu));
});


console.log('Network Interface : ' + JSON.stringify(os.networkInterfaces()));

console.log('Operating System Name : ' + os.hostname());

console.log('Platform : ' + os.platform());