var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });    
    if (req.url == '/sum') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            let firstNumber = parseInt(fields.first_number);
            let secondNumber = parseInt(fields.second_number);
            let sum = 0;

            if(isNaN(firstNumber) || isNaN(secondNumber)) {
                res.write('Invalid Inputs');
                res.end();
            } else {
                sum = firstNumber + secondNumber;
                res.write('SUM : '+sum);
                res.write('<br><a href="form">Back</a>');
                res.end();
            }
        });
    } else {
        res.write('<form action="sum" method="post">');
        res.write('<input type="number" min="0" name="first_number"><br>');
        res.write('<input type="number" min="0" name="second_number"><br>');
        res.write('<input type="submit" name="SUM">');
        res.write('</form>');
        res.end();
    }
}).listen(8080);