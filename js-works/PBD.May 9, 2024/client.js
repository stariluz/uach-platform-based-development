const net = require('net');
const client = new net.Socket();

client.connect(5000, '127.0.0.1', () => {
    console.log("Sucesfull connection");
});

client.on('close', () => {
    console.log("Connection end");
});

client.on('data', (data) => {
    console.log(`Info: ${data}`);
})