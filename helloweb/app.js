
// sample code from express web site
express = require('express');
var app = express.createServer();

app.get('/', function(req, res) {
	res.send('Hello world!\n');
	});

app.listen(8000);
