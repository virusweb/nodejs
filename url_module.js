var url = require('url');
var http = require('http');
// var uc = require('upper-case'); // NPM Package //TODO why you install this instead of use javascript function ex: toUpperCase();

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); //TODO text/html please make sure verify your code before push

    var adr = 'http://localhost:8080/default.htm?year=2023&month=may'; //TODO do not use static way try to use dynamic


    var q = url.parse(adr, true);

    var queryYear = q.query.year; // q.query return object with query param data
    var host = q.host;
    var pathname = q.pathname;
    var search = q.search;

    res.write(host);
    res.write(pathname);
    res.write(search);
    res.write(queryYear);
    const str = 'Done';
    res.end(str.toUpperCase());

}).listen(8080);