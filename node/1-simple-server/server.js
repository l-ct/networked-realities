const http = require('http');

// any 4 digit number can be the port
// as long as no other servers are using the same port on the same machine
const PORT = 3000;

http.createServer((request, response) => {
    // stores the requested route in a variable
    let route = request.url;
    // outputs route
    console.log(route);
    // the server simply responds to a 
    response.end(`you requested ${route}`);
}).listen(PORT, () => {
    console.log(`server listening at ${PORT}`)
});





