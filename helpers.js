
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


var royalFlushOdds = function(hand, communityCards, numRemaining){
	var odds =0;
	var acceptableHands = [['AH','KH','QH','JH','TH'],
							['AD','KD','QD','JD','TD'],
							['AC','KC','QC','JC','TC'],
							['AS','KS','QS','JS','TS']];
	for(var i = 0; i<acceptableHands.length; i++){
		var n = findN(hand, communityCards, acceptableHands[i]);
		if(i !== -1){
			odds += calcOdds(n, numRemaining)
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

var straightOdds = function(hand, communityCards, numRemaining){
	//five cards same suit
	var suits = ['H','D','C', 'S'];
	var odds = 0;
	for(var i =0; i < suits.length; i++){
		var n = straightOddsN(hand, communityCards, suits[i]);
		if(i !== -1){
			odds += calcOdds(n, numRemaining)
		}
	}
	return odds * STRAIGHTMULT;
};


var straightOddsN = function(hand, communityCards, suit){
	var cardsOfSuit = [];
	if(hand[0].charAt(1) === suit) {
		cardsOfSuit.push(hand[0]);
	}
	if(hand[1].charAt(1) === suit){
		cardsOfSuit.push(hand[1]);
	}
	//hand does not work with cards
	if(cardsOfSuit.size == 0){
		return -1;
	}
	for( var i = 0; i< communityCards.length; i++){
		if(communityCards[i].charAt(1) === suit){
			cardsOfSuit.push(communityCards[i]);
		}
	}
	return 5 - cardsOfSuit.length;
};

///four three two pair one pair
var fourKind = function(hand, communityCards, numRemaining){
    var odds;
    var acceptableHands = [['AH','AD','AC','AS'],
                            ['KH','KD','KC','KS'],
                            ['QH','QD','QC','QS'],
                            ['JH','JD','JC','JS'],
                            ['TH','TD','TC','TS'],
                            ['9H','9D','9C','9S'],
                            ['8H','8D','8C','8S'],
                            ['7H','7D','7C','7S'],
                            ['6H','6D','6C','6S'],
                            ['5H','5D','5C','5S'],
                            ['4H','4D','4C','4S'],
                            ['3H','3D','3C','3S'],
                            ['2H','2D','2C','2S'],
                            ['1H','1D','1C','1S']];
    for (var i = 0; i<acceptableHands.length; i++) {
		var n = findN(hand, communityCards, acceptableHands[i]);
		if(i !== -1){
			odds += calcOdds(n, numRenaming)
        }
    }
    return odds*FOURKINDMULT;
}
