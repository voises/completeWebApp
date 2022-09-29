
function start(response, postData) {
  console.log('Request handler "start" has been called');
  let body =
    "<html>" +
    "<head>" +
    '<meta http-equiv = "Content-Type" content = "text/html; charset = UTF-8 "/> ' +
    "</head>" +
    "<body>" +
    '<form action = "/upload" method = "post">' +
    '<textarea name = "text" rows = "20" cols = "60"> </textarea>' +
    '<input type = "submit" value = "Send text" />' +
    "</form>" +
    "</body>" +
    "</html>";

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(body);
  response.end();
}
function upload(response, dataPosted) {
  console.log('Request handler "upload" has been called');
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("You said: " + dataPosted);
  response.end();
}
exports.start = start;
exports.upload = upload;