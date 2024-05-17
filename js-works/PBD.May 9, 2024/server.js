const net = require('net');

const server = net.createServer((con) => {
    con.write("Servidor iniciado correctamente");
    console.log("Conexion remota");
    con.pipe(con);
});

server.listen(5000, '127.0.0.1');