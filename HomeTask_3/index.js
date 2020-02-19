const http = require('http');
const fs = require('fs');
const port = 3000;
const requestHandler = (request, response) => {
    if(request.url === '/index' || request.url === '/') {
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    }
}
const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }    console.log(`server is listening on ${port}`)
})
