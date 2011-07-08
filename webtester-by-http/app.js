// @file web-tester.js
// 

config = require('./config.js');
EscapedTimeOfGet = 'Retrieve Page Escaped Time';
var countConnSuccess = 0;
var countConnFailure = 0;
var startTime = 0;

var http = require('http');
var timeoutId = null;

function raiseConnectError(e) {
	countConnFailure++;
	if (err.code == ECONNREFUSED) {
		console.log("Error: " + err.message + " recovery state.");
		clearInterval(timeoutId);
		timeoutId = setInterval(tester, interval);
	} else {
		console.log("Error: " + e.message);
	}
	console.timeEnd(EscapedTimeOfGet); 
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
	console.timeEnd(EscapedTimeOfGet); 
}

// fetch data every 2 seconds.
function tester() {
	conn = http.get(config.hostForGet(), responseHandling);
	console.time(EscapedTimeOfGet); 
	conn.on('error', raiseConnectError);
}


//-------------------------------------------------------------------------
// Tester run every 2 seconds
//-------------------------------------------------------------------------
var interval = config.get("CheckInterval");
timeoutId = setInterval(tester, interval);

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

serverCheckInterval = config.get("ServerCheckInterval");
serverPort = config.get("ServerPort");

function handleRequest(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	setInterval(function() {
		statisticsInterval(res)
	}, serverCheckInterval);
}

var s = http.createServer(handleRequest);
console.log(new Date() + " Server started at :" + serverPort);
s.listen(serverPort);

// Global process exception handling
process.addListener('uncaughtException', function(err) {
	if (err.code == ECONNREFUSED) {
		console.log(err.message + " recovery state.");
		timeoutId = setInterval(tester, interval);
	}
});

