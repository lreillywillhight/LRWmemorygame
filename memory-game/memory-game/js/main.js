//cards game project for GA


/////VARIABLES/////

const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage : "images/queen-of-hearts.png"
	},	
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"		
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
const cardsInPlay = [];

/////FUNCTIONS/////

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("you found a match!")
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
}

function flipCard(cardId) {

	cardsInPlay.push(cards[cardId].rank);
	console.log("You flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit)
	console.log(cards[cardId].cardImage)	
	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
}

/////TESTS/////

flipCard(3);
flipCard(2);

