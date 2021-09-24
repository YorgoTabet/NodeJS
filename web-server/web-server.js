const http = require('http')

const server = http.createServer(
    (request, result) => {
       const name =  request.url.slice(1)
        result.writeHead(200, {'Content-Type': 'text/html'});
        result.end(`<h1>Nigga you swervin ${name}</h1>`)
    }
);

server.listen(8000, 'localhost')