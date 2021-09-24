//streams are used to stream data and in i/o processes
const fs = require('fs');
const http = require('http')

const server = http.createServer(
    (request, result) => {
    const file = fs.createReadStream('./blog.txt')
    file.pipe(result);
    });

server.listen(8000, 'localhost')
