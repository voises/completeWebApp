/**
 * a basic web server using node.js
 */

let http = require('http');
/**
 * this server.js file will be used as a module for the index.js file
 * by exporting the following code as a function, start()
 */
function start(){
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello World!!');
    response.end();
    
}).listen(8888);
}
exports.start = start;
/**
 * Notes:
 * the first line calls the html module that comes with node.js and
 * assigns it to the http variable
 * 
 * thereafter we call a function of http, createServer, which returns 
 * an object with a method, listen, which takes a numeric value for
 * the port value on which the server will listen
 * 
 * the function definition is the only parameter that is called to 
 * createServer(). It is used to handle all incoming requests
 * 
 * request and response are objects, and their methods allow the site to
 * react to requests
 * response.writeHead() declares the http status and the conent-type of
 * the informastion it will send
 * response.write() sends the text in the body of the response
 * response.end()
 */