// @file web-tester.js
// 

config = require('./config.js');

var countConnSuccess = 0;
var countConnFailure = 0;
var startTime = 0;

var http = require('http');

function raiseConnectError(e) {
	console.log("Got Error: " + e.message);
	countConnFailure++;
}

function responseHandling(res) {
	console.log(res.headers);
	res.on('data', chunkHandling);
	countConnSuccess++;
}

var i = 0;
function chunkHandling(chunk) {
	console.log("chunk" + i + ":" + chunk.length + " bytes received");
	i++;
}

// fetch data every 2 seconds.
function tester() {
	conn = http.get(config.hostForGet(), responseHandling);
	conn.on('error', raiseConnectError);
}

//-------------------------------------------------------------------------
// Tester run every 2 seconds
//-------------------------------------------------------------------------
setInterval(tester, 2000);

//-------------------------------------------------------------------------
// Server side for statistics
//-------------------------------------------------------------------------
var oldCountSuccess = -1;
var oldCountFailure = -1;

function dumpStatics(res) {
	var s = '-- Web Tester Statistics --\n';
	s += 'Successful connection:' + countConnSuccess+'\n';
	s += 'Failure connection:' + countConnFailure + '\n';
	res.write(s);
}

function statisticsInterval(res) {
	// console.log("hit statistics if update");
	if (oldCountSuccess != countConnSuccess ||
	    oldCountFailure != countConnFailure) {

	    dumpStatics(res);	

	    oldCountSuccess = countConnSuccess;
	    oldCountFailure = countConnFailure;
	}
}

function handleRequest(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	setInterval(function() {
	statisticsInterval(res)
	}, 1000);
}

var s = http.createServer(handleRequest);
s.listen(8000);
