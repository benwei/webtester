
// sample code from express web site
// fix security alert, update to express 3.11.0
var express = require("express");
var app = express();

app.get('/', function(req, res) {
	res.send('Hello world!\n');
	});

app.listen(8000);
