console.log("hello there.")
//begin program

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);

let cardTwo = cards[1];
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("you found a match!") 
	}
	else {
		alert("Sorry, try again.")
	}
	}



console.log(cardOne);
console.log(cardTwo);
console.log("User flipped " + cardsInPlay)