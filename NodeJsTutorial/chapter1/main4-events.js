
var events = require('events');

var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
    console.log('connection successful.');

    // Fire the data_received event
    eventEmitter.emit('data_received',{message: 'data reached'});
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(message){
    console.log('data received successfully : ' + JSON.stringify(message));
});


// Fire the connection event
eventEmitter.emit('connection');

console.log("Program Ended.");