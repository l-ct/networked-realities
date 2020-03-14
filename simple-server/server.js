const fs = require('fs');
const http = require('http');

const PORT = process.env.PORT || 8888;

const server = http.createServer((request, response) => {
    let route = request.url;
    console.log(route);
    if(route == '/') route = '/index.html';
    if(fs.existsSync(__dirname + route)){
        let html = fs.readFileSync(__dirname + route);
        response.end(html);
    }else{
        response.statusCode = 404;
        response.end("page not found");
    }
});

server.listen(PORT, () => {
    console.log(`server listening at ${PORT}`)
});





