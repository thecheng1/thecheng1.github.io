console.log ("card.js loaded");

var suits = ["Spade", "Diamond", "Clubs", "Heart"]
var value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

var fred = {
    name: 'fred',
    phone: '123456',
    email: 'fred@gmail.com'
};

//var suitIndex = 0;
//var valueIndex = 0;

//Hold our cards

var deck =[];

for (var i in fred) {
    console.log("fred = %s", i);
}

for (var i in value) {
    console.log("i = %s", i);
}

/*
for(var i in suits) {
    for (var j in value)
        deck.push({
        suit: suits[suitIndex],
        value: value[valueIndex]
        });
}

/*
for (var suitIndex = 0; suitIndex < suits.length; suitIndex +=1) {
    for (var valueIndex = 0; valueIndex < value.length; valueIndex += 1) {

    deck.push({
        suit: suits[suitIndex],
        value: value[valueIndex]
        });
    }
}

//Outer look - suits
while (suitIndex < suits.length) {
    for (var valueIndex = 0; valueIndex < value.length; valueIndex += 1) 
    /*
    while (valueIndex < value.length) {
        //console.log("suitIndex = " + suitIndex + ", valueIndex " + valueIndex +"")
        console.log("suitIndex = %d, valueIndex = %d", suitIndex, valueIndex)
        
        valueIndex += 1;
    }
    */
    suitIndex += 1;


console.log(deck);