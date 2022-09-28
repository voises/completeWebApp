let exec = require('child_process').exec;

function start(response){
    console.log('Request handler "start" has been called');

    exec('ls -lah', function(error,stdout,stderr){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(stdout);
        response.end();
    });
}
function upload(response){
    console.log('Request handler "upload" has been called');
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write('Nice upload');
    response.end();
}
exports.start = start;
exports.upload = upload;