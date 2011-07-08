// @file config.js
// global variable definitions
var globalKeyArray = [];

// -----------------------------------------------------------------------------
// change your global config settings
/// CheckInterval is used to hit host every (N) micro seconds
globalKeyArray["CheckInterval"] = 3000;

/// ServerCheckInterval is used to dump statistics of webtester every (N) micro seconds.
globalKeyArray["ServerCheckInterval"] = 1000;

/// ServerPort is used for client connect to view statistics of webtester
globalKeyArray["ServerPort"] = 8000;

// -----------------------------------------------------------------------------
// Fill you testing host and uri path here
connectInfo = {
  host: 'yoursite.yoursite',
  path: '/testuri',
  method: 'GET' };

// -----------------------------------------------------------------------------
// Connection code for exports
exports.hostForGet=function() { 
	return connectInfo;
}

exports.get=function(key) {
	return globalKeyArray[key];	
}

