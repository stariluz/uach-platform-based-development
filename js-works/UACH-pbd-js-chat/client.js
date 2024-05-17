const net = require('net');
const client = new net.Socket();
const Readline = require('node:readline');
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = (question) => {
    return new Promise((resolve, reject) => readline.question(question, resolve));
}

let isRunning = true;

client.connect(5000, '127.0.0.1', async () => {
    console.log("Sucesfull connection");
    client.once('data', (connectionNumber) => {
        console.log(`You have the user ${connectionNumber}`);
        client.on('data', (data) => {
            console.log(`${data}`);
        })
    });
});

client.on('close', () => {
    console.log("Connection end");
    isRunning = false
});

const chat = async () => {
    while (isRunning) {
        const value = await input('');
        process.stdout.write("Your message");
        client.write(`${value}`);
    }
}
chat();