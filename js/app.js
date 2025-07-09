/*-------------- Constants -------------*/

/*---------- Variables (state) ---------*/
// setup board
let gameBoard;
let turn;
let hasFlippedCard;
let matchedPairs = 0;
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
        firstCardClicked = parentElement.className;
        console.log(firstCardClicked);
    } else {
        secondCardClicked = parentElement.className;
        console.log(firstCardClicked);
        console.log(secondCardClicked);
        checkMatch();
    }
    checkWin();
};

// check for a match
function checkMatch() {
    if (firstCardClicked === secondCardClicked) {
        console.log('match');
        matchedPairs = matchedPairs +1;
        console.log(matchedPairs);
        resetAfterMatch();
        // add class to cards that match
        // somehow do something with the class, can't be clicked on, so same pairs are not clicked again
        // cards flipped over, then won't be able to click again
    } else if (firstCardClicked != secondCardClicked)
     {
        console.log('not a match');
        resetAfterMatch();
    }
    console.log(firstCardClicked);
    console.log(secondCardClicked);
};
function resetAfterMatch() {
    firstCardClicked = undefined;
    secondCardClicked = undefined;
    };
// after match, then reset

function checkWin() {
    if (matchedPairs === 8) {
        console.log(win);
        win = true;
    }
}

// shuffle cards

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

