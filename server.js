/**
 * a basic web server using node.js
 */

let http = require("http");
let url = require("url");
/**
 * this server.js file will be used as a module for the index.js file
 * by exporting the following code as a function, start()
 */
function start(route, handle) {
  http
    .createServer(function (request, response) {
      let dataPosted = "";
      let pathname = url.parse(request.url).pathname;
      request.setEncoding("utf8");

      request.addListener("data", function (stubPost) {
        dataPosted += chunkPosted;
        console.log("Received chunk POST " + chunkPost + ".");
      });

      request.addListener("end", function () {
        route(handle, pathname, response, dataPosted);
      });
      //this distinguises requests based on the requested path
      console.log("Request for " + pathname + " recieved.");
    })
    .listen(8888);
  console.log("Server started");
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
