const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((request, response) => {

    console.log('request ', request.url);

    var filePath = './client' + request.url;
    if (request.url == '/') {
        filePath = './client/index.html';
    } else if (request.url.match('\.json$')) {
        filePath = '.' + request.url;
    } else if (request.url == '/getChunks') {
        filePath = './input/parsed/deliveries.json';
    }

    console.log('filepath ', filePath);

    var extname = String(path.extname(filePath)).toLowerCase();

    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.ico': 'image/ico'
    };

    var contentType = mimeTypes[extname];

    fs.readFile(filePath, (error, content) => {
        if (error) {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end("Error 404 Page Not Found!!");
        }
        else if (filePath == './input/parsed/deliveries.json') {
            var stream = fs.createReadStream(filePath);
            stream.on('data', () => {
                // response.write(chunk);
                // response.statusCode = 200;
                stream.pipe(response);
            });
            stream.on('end', () => {
                console.log("finished sending data in chunks");
                response.end();
            });
            stream.on('error', () => {
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.end("Error 404 File Not Found!!");
            });
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(9000);

console.log('starting static server at port 9000');