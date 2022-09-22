function route(handle, pathname){
    console.log('About to route a request for ' + pathname);
    console.log(handle[pathname]);
    handle[pathname];
}
exports.route = route;