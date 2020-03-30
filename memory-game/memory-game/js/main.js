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
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id');	
	console.log("You flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

var createBoard = function() {
	for (i = 0; i < cards.length; i++) {
		const cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('gameBoard').appendChild(cardElement);
	}
};


/////INVOKE/////
createBoard();
