var math = require('math');
var nums = require('nums');
var combinations = require('combinations-js');

var ROYALMULT = 1;
var STAIGHTFLUSHMULT =.7;
var FOURKINDMULT = .5;
var FULLHOUSEMULT =.4;
var FLUSHMULT = .3;
var STRAIGHTMULT = .3;
var THREEKINDMULT = .3;
var TWOPAIR = .2;
var ONEPAIR = .1;
var HighCard = 0;


function factorial(op) {
 // Lanczos Approximation of the Gamma Function
 // As described in Numerical Recipes in C (2nd ed. Cambridge University Press, 1992)
 var z = op + 1;
 var p = [1.000000000190015, 76.18009172947146, -86.50532032941677, 24.01409824083091, -1.231739572450155, 1.208650973866179E-3, -5.395239384953E-6];

 var d1 = Math.sqrt(2 * Math.PI) / z;
 var d2 = p[0];

 for (var i = 1; i <= 6; ++i)
  d2 += p[i] / (z + i);

 var d3 = Math.pow((z + 5.5), (z + 0.5));
 var d4 = Math.exp(-(z + 5.5));

 d = d1 * d2 * d3 * d4;

 return d;
}

var choose = function(x, y){
	s
}

//return num needed cards or -1
var findN = function(hand, communityCards, idealCards){
	var goodCards =  [];
	if(idealCards.contains(hand[0])) {
		goodCards.push(hand[0]);
	}
	if(idealCards.contains(hand[1])){
		goodCards.push(hand[1]);
	}
	//hand does not work with cards
	if(goodCards.size == 0){
		return -1;
	}
	for( var i = 0; i< communityCards.length; i++){
		if(idealCards.contains(communityCards[i])){
			goodCards.push(communityCards[i]);
		}
	}
	return idealCards.length - goodCards.length;
};


var calcOdds = function(n, numRemaining){
	if(n === 0){
		return 1;
	}
	var deckSize = 52-7+numRemaining;
	var fct = factorial(n);
	var chs = combinations(numRemaining, n);
	
	var szs = math.pow(deckSize,n);
	var val = fct*chs;
	var valfp = 0.0 + val + 0.0;
	valfp = valfp / szs;
	console.log(szs);
	console.log(val);
	return valfp;
};

console.log(calcOdds(3,5));


var royalFlushOdds = function(hand, communityCards, numRenaming){
	var odds;
	var acceptableHands = [['AH','KH','QH','JH','TH'],
							['AD','KD','QD','JD','TD'],
							['AC','KC','QC','JC','TC'],
							['AS','KS','QS','JS','TS']];
	for(var i = 0; i<acceptableHands.length; i++){
		var n = findN(hand, communityCards, acceptableHands[i]);
		if(i !== -1){
			odds += calcOdds(n, numRenaming)
		}
	}
	//props should return something if guaranteed
	return odds * ROYALMULT;
};

var straightFlushOdds = function (hand, communityCard, numRemaining) {
	//any straight with 5 cards for same suit
};


var fullHouseOdds = function(hand, communityCard, numRemaining){
	//3 of a kind and two of a kind
};


var flushOdds = function(hand, communityCard, numRemaining){
	//five cards same suit
};

var straightOdds = function(hand, communityCard, numRemaining){
	//five cards same suit
};

///four three two pair one pair