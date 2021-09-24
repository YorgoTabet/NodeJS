const events = require('events');

// no need to use events front the UI or frint end but for other types
// for example a user login
let userLoggedIn = 0;
const eventEmitter = new events.EventEmitter();


eventEmitter.on('userLoggedIn', () => {
    userLoggedIn += 1;
    console.log(`There are ${userLoggedIn} users logged in ` );
});


eventEmitter.emit('userLoggedIn');

//we can use this for example with our file watch funtion
const fs = require('fs');
const watcher = fs.watch('events.js');

watcher.on('change', ()=>{
    console.log('file Changed');
})