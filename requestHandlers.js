function start(){
    console.log('Request handler "start" has been called');
}
function upload(){
    console.log('Request handler "upload" has been called')
}
exports.start = start;
exports.upload =upload;