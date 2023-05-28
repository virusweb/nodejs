// require is use for load module
var http = require('http');

// load custom module
var customModule = require('./custom_modules/first_module');

// load URL module (builtin)
var url = require('url');

// file server module for doing operations on file
var fs = require('fs'); 

// Create object for server
http.createServer(function (req, res) {
    // response header for meta data
    res.writeHead(200, {'Content-Type': 'text/html'});

    // load custom module method
    res.write("Load from custom moduel = "+customModule.myDateTime());

    // write method is use to stream the data
    res.write('Hello World ....');

    // get current URL
    res.write(req.url);

    // for parse the query param
    var q = url.parse(req.url, true).query;

    // store the query param data
    var name = q.name || '-';
    res.write(name);

    // For read the file
    fs.readFile('files/sample.txt', function(err, data) {
        res.write(data);
        return res.end();
    });

    //For append the file
    fs.appendFile('./files/sample.txt', '\nYes I am fine', function (err) {
        if (err) throw err;
        res.write('Saved!');
        return res.end();
    });
}).listen(8080);