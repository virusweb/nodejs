// 'require' is use for load module
var http = require('http'); //TODO do not use var use const or let please try to implement latest JS

// load custom module
var customModule = require('./custom_modules/first_module');

// load URL module (builtin)
var url = require('url');

// file server module for doing operations on file
var fs = require('fs');

// Create object for server
http.createServer(function (req, res) {
    // response header for meta data
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // load custom module method
    res.write("Load from custom moduel = " + customModule.myDateTime());

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
    const fileName = './files/sample.txt';
    fs.readFile(fileName, "utf8", function (err, data) {//TODO if your file name is same so store in variable const and use both place to reduce readablity
        if (err) {
            throw new Error(err);
        }
        // else {
        //     //TODO ths is never work because this fs fuction is sync behaviour so your data is never write in brower page.
        //     res.write(data);
        //     res.end();
        // }
    })

    //For append the file
    fs.appendFile(fileName, '\nYes I am fine', function (err) {
        if (err) {
            throw new Error(err);
        }
        // TODO No need her also to wait because write steam never wait for end your runing code going in next line so That error you get in fs function
    });
    res.end('Saved!'); // here need to add end()

}).listen(8080, function () { //TODO write like this coz your server is started so its show in CMD
    console.log("server running on port 8080");
});

// You get this error because you write and end res 'ERR_STREAM_WRITE_AFTER_END'
// you get this error because you do not handle your error in this project