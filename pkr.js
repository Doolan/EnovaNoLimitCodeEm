var dataSet = [{
	card1: 'A',
	card2: 'A',
	value: 232
},
{
	card1: 'A',
	card2: 'K',
	value: 51
},
{
	card1: 'A',
	card2: 'Q',
	value: 31
},{
	card1: 'A',
	card2: 'J',
	value: 19
},{
	card1: 'A',
	card2: 'T',
	value: 8
},{
	card1: 'A',
	card2: '9',
	value: -3
},{
	card1: 'A',
	card2: '8',
	value: -7
},{
	card1: 'A',
	card2: '7',
	value: -10
},{
	card1: 'A',
	card2: '6',
	value: -12
},{
	card1: 'A',
	card2: '5',
	value: -12
},{
	card1: 'A',
	card2: '4',
	value: -12
},{
	card1: 'A',
	card2: '3',
	value: -13
},{
	card1: 'A',
	card2: '2',
	value: -15
},{
	card1: 'K',
	card2: 'K',
	value: 167
},{
	card1: 'K',
	card2: 'Q',
	value: 16
},{
	card1: 'K',
	card2: 'J',
	value: 8
},{
	card1: 'K',
	card2: 'T',
	value: 1
},{
	card1: 'K',
	card2: '9',
	value: -7
},{
	card1: 'K',
	card2: '8',
	value: -11
},{
	card1: 'K',
	card2: '7',
	value: -11
},{
	card1: 'K',
	card2: '6',
	value: -12
},{
	card1: 'K',
	card2: '5',
	value: -13
},{
	card1: 'K',
	card2: '4',
	value: -13
},{
	card1: 'K',
	card2: '3',
	value: -14
},{
	card1: 'K',
	card2: '2',
	value: -14
},{
	card1: 'Q',
	card2: 'Q',
	value: 122
},{
	card1: 'Q',
	card2: 'J',
	value: 3
},{
	card1: 'Q',
	card2: 'T',
	value: -2
},{
	card1: 'Q',
	card2: '9',
	value: -3
},{
	card1: 'Q',
	card2: '8',
	value: -11
},{
	card1: 'Q',
	card2: '7',
	value: -12
},{
	card1: 'Q',
	card2: '6',
	value: -13
},{
	card1: 'Q',
	card2: '5',
	value: -13
},{
	card1: 'Q',
	card2: '4',
	value: -13
},{
	card1: 'Q',
	card2: '3',
	value: -13
},{
	card1: 'Q',
	card2: '2',
	value: -13
},{
	card1: 'J',
	card2: 'J',
	value: 86
},{
	card1: 'J',
	card2: 'T',
	value: -3
},{
	card1: 'J',
	card2: '9',
	value: -9
},{
	card1: 'J',
	card2: '8',
	value: -10
},{
	card1: 'J',
	card2: '7',
	value: -12
},{
	card1: 'J',
	card2: '6',
	value: -12
},{
	card1: 'J',
	card2: '5',
	value: -13
},{
	card1: 'J',
	card2: '4',
	value: -13
},{
	card1: 'J',
	card2: '3',
	value: -13
},{
	card1: 'J',
	card2: '2',
	value: -13
},{
	card1: 'T',
	card2: 'T',
	value: 58
},{
	card1: 'T',
	card2: '9',
	value: -7
},{
	card1: 'T',
	card2: '8',
	value: -10
},{
	card1: 'T',
	card2: '7',
	value: -10
},{
	card1: 'T',
	card2: '6',
	value: -11
},{
	card1: 'T',
	card2: '5',
	value: -12
},{
	card1: 'T',
	card2: '4',
	value: -12
},{
	card1: 'T',
	card2: '3',
	value: -12
},{
	card1: 'T',
	card2: '2',
	value: -12
},{
	card1: '9',
	card2: '9',
	value: 38
},{
	card1: '9',
	card2: '8',
	value: -10
},{
	card1: '9',
	card2: '7',
	value: -10
},{
	card1: '9',
	card2: '6',
	value: -10
},{
	card1: '9',
	card2: '5',
	value: -12
},{
	card1: '9',
	card2: '4',
	value: -12
},{
	card1: '9',
	card2: '3',
	value: -12
},{
	card1: '9',
	card2: '2',
	value: -12
},{
	card1: '8',
	card2: '8',
	value: 25
},{
	card1: '8',
	card2: '7',
	value: -12
},{
	card1: '8',
	card2: '6',
	value: -11
},{
	card1: '8',
	card2: '5',
	value: -12
},{
	card1: '7',
	card2: '7',
	value: 16
},{
	card1: '6',
	card2: '6',
	value: 7
},{
	card1: '5',
	card2: '5',
	value: -2
}
,{
	card1: '4',
	card2: '4',
	value: -3
},{
	card1: '3',
	card2: '3',
	value: -7
},{
	card1: '2',
	card2: '2',
	value: -9
}];


//var sleep = require('sleep');
var Stats = require('fast-stats').Stats;
var http = require('http');
var request = require("request");

var gurl = "https://enova-no-limit-code-em.herokuapp.com/sandbox/players/b20a3f65-8a17-4af6-a224-f029b08bbf41";
var purl = "https://enova-no-limit-code-em.herokuapp.com/sandbox/players/b20a3f65-8a17-4af6-a224-f029b08bbf41/action";

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
	console.log('s');
	if(data.your_turn){
		var btn = getBetNum(data);
		if(btn > data.stack){
			btn = data.stack;
		}
		console.log(btn);
		if(btn >= 0){
			bet(btn,nop);
		}
		else{
			fold(nop);
		}

	}
	setTimeout(function(){getData(useData)}, 800);
}

var betScale = 2.0;



getBetNumh = function(data){
	var c1 = data.hand[0].substring(0,1);
	var c2 = data.hand[1].substring(0,1);
	for (var i = 0; i < dataSet.length; i++) {
		if((dataSet[i].card1 === c1 && dataSet[i].card1 === c2) || (dataSet[i].card1 === c2 && dataSet[i].card1 === c1)){
			return dataSet[i].value;
		}
	}
	return(0);
}

getBetNum = function(data){
	var arr = data.hand;
	var nval = 0.0;
	for (var i = 0; i < data.community_cards.length; i++) {
		arr.push(data.community_cards[i]);
	}
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length; j++) {
			var ndat = {hand: [arr[i], arr[j]]};
			nval += getBetNumh(ndat);
		}
	}
}

//setTimeout(continueExecution, 10000)

getData(useData);