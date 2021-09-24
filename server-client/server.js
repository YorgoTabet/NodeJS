
const net = require('net');
const { setInterval } = require('timers/promises');

//creating a server
const server = net.createServer();
var connectedClients = [];

//setting where the server listens to
server.listen({
    host: 'localhost',
    port: 8800,
})


//event for on client connection
server.on('connection', (client) => {
    console.log('client connected');
    client.write('Welcome to the server');
    connectedClients.push(client);
});

setInterval(()=>{
    const now =client.write(Date.toString())
    connectedClients.forEach(element => { 
        element.write(now)
    });
},2000);