/*-------------- Constants -------------*/

/*---------- Variables (state) ---------*/
// setup board
// shuffle cards
let gameBoard;
let turn;
let flippedCards;
let matchedPairs;
let cardOne;
let cardTwo;
let win;
let lose;


/*----- Cached Element References  -----*/
const messageElement = document.querySelector('#message');
const squareElements = document.querySelectorAll('.sqr');
const resetBtn = document.querySelector('#reset');

/*-------------- Functions -------------*/
// render game board
// function init() {
//     board = [
//         '', '', '', '',
//         '', '', '', '',
//         '', '', '', '',
//         '', '', '', '',
//     ]
// };

// function render() {

// };

function handleClick(event) {
    const squareElements = event.target.id;
    console.dir(squareElements);
    if 
};

function checkMatch() {

};

// shuffle cards

// check for a match

// update message

// check if all cards have been matched (you win!

// restart game

// add a timer

// if timer runs out, stop game, and display try again message

/*----------- Event Listeners ----------*/
// listen for card click, flip over when card has been clicked
squareElements.forEach((squareElement) => {
    squareElement.addEventListener('click', handleClick);
});

