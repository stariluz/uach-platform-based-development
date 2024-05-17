const net = require('net');

let connectionNumber = 0;
const connections = [];

const server = net.createServer((con) => {
    
    con.connectionId = ++connectionNumber;
    console.log(`Remote connection ${connectionNumber}`);
    connections.push(con);
    con.write((connectionNumber).toString());

    con.on('data', (data) => {
        const message = data.toString().trim();

        console.log(`Message from user ${con.connectionId}: ${message}`);

        connections.forEach((connection) => {
            if (connection !== con) {
                connection.write(`User ${con.connectionId}: ${message}`);
            }
        });
    });
});

server.listen(5000, '127.0.0.1');