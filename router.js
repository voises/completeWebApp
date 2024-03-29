function route(handle, pathname, response, postData){
    console.log('About to route a request for ' + pathname);
    if (typeof handle[pathname] === 'function'){
        handle[pathname](response, postData);
    }else{
        console.log('There is no request handler for ' +pathname);
        response.writeHead(404, {'Content-Type':'text/html'});
        response.write('404 Not Found');
        response.end();
    }
}
exports.route = route;