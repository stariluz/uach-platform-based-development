const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    console.log(request.url);
    switch (request.url) {
        case '/ok':
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.write("Adrian Alejandro Gonzalez Dominguez | 359834");
            response.end();
            break;
        case '/ohno':
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.write("El servidor exploto");
            response.end();
            break;

        case '/noencontrado':
            fs.readFile("./WWW/noencontrado.html", (err, data) => {
                if (err) {
                    response.writeHead(404, { "Content-Type": "text/plain" });
                    response.write("Alguio salio mal, no me fune profe UnU");
                    response.end();
                } else {
                    response.writeHead(404, { "Content-Type": "text/html" });
                    response.write(data);
                    response.end();
                }
            });
            break;

        default:
            const filename = request.url == '/'
                ? './WWW/index.html'
                : `./WWW${request.url}`;
            console.log(filename);
            fs.readFile(filename, (err, data) => {
                if (err) {
                    response.writeHead(404, { "Content-Type": "text/plain" });
                    response.write("Alguio salió mal, no me fune profe UnU");
                    response.end();
                } else {
                    const extension = request.url.split('.').pop();
                    switch (extension) {
                        case 'html':
                            response.writeHead(200, { "Content-Type": "text/html" });
                            break;
                        case 'webp':
                            response.writeHead(200, { "Content-Type": "image/webp" });
                            break;
                        case 'jpeg':
                            response.writeHead(200, { "Content-Type": "image/jpeg" });
                            break;
                    }
                    response.write(data);
                    response.end();
                }
            });
            break;
    }
}).listen(4000);
