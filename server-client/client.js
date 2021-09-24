const net = require('net');

const client = net.createConnection({
    port:8800,
});

client.on('data', (data) => {
    console.log(`Message received from server: ${data}`)
})