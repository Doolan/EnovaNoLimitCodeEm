
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

};


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