var url = require('url');
var http = require('http');
var uc = require('upper-case'); // NPM Package

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/htl'});
    var adr = 'http://localhost:8080/default.htm?year=2023&month=may';
    var q = url.parse(adr, true);
    
    var queryYear = q.query.year; // q.query return object with query param data
    var host = q.host;
    var pathname = q.pathname;
    var search = q.search;

    res.write(host);
    res.write(pathname);
    res.write(search);
    res.write(queryYear);
    res.end(uc.upperCase('done'));

}).listen(8080);