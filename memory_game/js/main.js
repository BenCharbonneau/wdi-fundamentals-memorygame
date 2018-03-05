var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
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
var cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay.length === 2) {
		var card1=cardsInPlay[0];
		var card2=cardsInPlay[1];
		if (cards[card1].rank === cards[card2].rank) {
			alert("You found a match!");
			var score=document.getElementById("score").innerHTML;
			document.getElementById("score").innerHTML = parseInt(score) + 1;
			document.querySelector('img[data-id="'+card1+'"]').className = ".matched";
			document.querySelector('img[data-id="'+card2+'"]').className = ".matched";
		}
		else {
			alert("Sorry, try again.");
			flipUnmatched();
		}
		cardsInPlay = [];
	}
}
function flipCard() {
	var cardId = this.getAttribute("data-id")
	if (this.getAttribute("src") !== "images/back.png") {
		console.log("The card is already flipped.")
		return;
	}
	console.log("User flipped "+cards[cardId].rank);
	cardsInPlay.push(cardId);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute("src",cards[cardId].cardImage);
	checkForMatch();
}

function createBoard() {
	for (var i = 0;i<cards.length;i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src","images/back.png");
		cardElement.setAttribute("data-id",i);
		cardElement.addEventListener('click',flipCard);
		//cardElement.addEventListener('load',checkForMatch);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

function newGame() {
	for (var i = 0;i<cards.length;i++) {
		var cardarr = document.getElementsByTagName("img")[0];
		document.getElementById("game-board").removeChild(cardarr);
	}
	cards.push(cards.shift());
	cardsInPlay = [];
	createBoard();
}

function flipUnmatched() {
	for (var i = 0;i<cards.length;i++) {
		if (document.getElementsByTagName("img")[i].className !== ".matched") {
			document.getElementsByTagName("img")[i].setAttribute("src","images/back.png");
		}
	}
}

createBoard();

