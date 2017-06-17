var http = require('http');
var port = require('./config');

http.createServer(function(req, res){
    res.writeHead(200);
    res.write("Hello, World!");   
    res.end();
}).listen(port);