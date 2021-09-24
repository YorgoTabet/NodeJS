const os = require('os');


var name = process.argv.slice(2)
console.log(process.argv)
console.log(name.reduce((acc,val) => acc + parseInt(val),0))