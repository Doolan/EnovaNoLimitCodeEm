//var sleep = require('sleep');
var Stats = require('fast-stats').Stats;
var http = require('http');
var request = require("request");

var gurl = "https://enova-no-limit-code-em.herokuapp.com/sandbox/players/deal-phase-key";
var purl = "https://enova-no-limit-code-em.herokuapp.com/sandbox/players/deal-phase-key";

getData = function (cb) {request({
  uri: gurl,
  method: "GET",
  form: {
  }
}, function(error, response, body) {
  //console.log(body);
  cb(JSON.parse(body));
});};

//getData(console.log);

bet = function (amt,cb) {request({
  uri: purl,
  method: "POST",
  form: {
  	action_name: 'bet',
  	amount: amt
  }
}, function(error, response, body) {
  //console.log(body);
  cb(body);
});};

fold = function (cb) {request({
  uri: purl,
  method: "POST",
  form: {
  	action_name: 'fold',
  	amount: 0
  }
}, function(error, response, body) {
  //console.log(body);
  cb(body);
});};

nop = function(){console.log('posted')}

useData = function(data){
	if(data.turn){
		var btn = getBetNum(data);
		if(btn >= 0){
			bet(btn,nop);
		}
		else{
			fold(nop);
		}
	}
	setTimeout(function(){getData(useData)}, 800);
}

getBetNum(data){
	//
}

//setTimeout(continueExecution, 10000)

getData(useData);