/*-------------- Constants -------------*/

/*---------- Variables (state) ---------*/
// setup board
let gameBoard;
let turn;
let hasFlippedCard;
let matchedPairs;
let firstCardClicked;
let secondCardClicked;
let win;
let lose;


/*----- Cached Element References  -----*/
const messageElement = document.querySelector('#message');
const boardElements = document.querySelector('#board');
const cardElements = document.querySelectorAll('.card');
const resetBtn = document.querySelector('#reset');

/*-------------- Functions -------------*/
function handleClick(event) {
    const parentElement = event.target.parentElement;
    if (firstCardClicked === undefined) {
        firstCardClicked = parentElement.id;
    } else {
        secondCardClicked = parentElement.id;
    }
    console.log(firstCardClicked);
    console.log(secondCardClicked);
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
cardElements.forEach((cardElement) => {
    cardElement.addEventListener('click', handleClick);
});

