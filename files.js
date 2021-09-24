const fs = require('fs');

//reading from file
const data = fs.readFileSync('./system.js');
console.log(data.toString());


// writing to file
fs.writeFileSync('data.txt', 'Hello World');

//appending to file
fs.appendFileSync('data.txt', 'Hello World');

//copying to file
fs.copyFileSync('data.txt', 'data.bak.txt');


//renaming  file
fs.renameSync('data.bak.txt', 'data.old.txt');

//delete  file
fs.unlinkSync('data.old.txt');

//reading contents of directory
const dir = fs.readdirSync(__dirname);
console.log(dir);

//create new directoy
fs.mkdirSync('file-system')


//moving file to new directory
fs.renameSync('data.txt', 'file-system/data.txt');

// watch file for changes
fs.watchFile('file-system/data.txt', () => {console.log('data Changed!');})