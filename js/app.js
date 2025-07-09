/*-------------- Constants -------------*/

/*---------- Variables (state) ---------*/
// setup board
let gameBoard;
let turn;
let hasFlippedCard;
let matchedPairs = 0;
let firstCardClicked;
let secondCardClicked;
let tries = 0;
let triesLeft;
let win;
let lose;

/*----- Cached Element References  -----*/
const messageElement = document.querySelector('#messageElement');
const boardElements = document.querySelector('#board');
const cardElements = document.querySelectorAll('.card');
const resetBtn = document.querySelector('#reset');

/*-------------- Functions -------------*/
// initial board for reset
function init() {
    firstCardClicked = undefined;
    secondCardClicked = undefined;
    matchedPairs = 0;
    tries = 0;
    triesLeft = 100-tries;
}
init();

// register click values
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
    countTries(event);
};

// count number of tries
// updateMessage to show tries used, tries left
function countTries(event) {
    console.log(event.target.parentElement);
        tries = tries +1;
        triesLeft = 100 - tries;
        console.log(tries);
        console.log(triesLeft);
        updateMessage();
};

// check for a match
function checkMatch() {
    if (firstCardClicked === secondCardClicked) {
        console.log('match');
        matchedPairs = matchedPairs + 1;
        console.log(matchedPairs);
        resetAfterMatch();
        // add class to cards that match (save this for the end)
        // somehow do something with the class, can't be clicked on, so same pairs are not clicked again
        // cards flipped over, then won't be able to click again
    } else if (firstCardClicked != secondCardClicked) {
        console.log('not a match');
        resetAfterMatch();
    }
    console.log(firstCardClicked);
    console.log(secondCardClicked);
};

// after a match pair is found, reset to find another match
function resetAfterMatch() {
    firstCardClicked = undefined;
    secondCardClicked = undefined;
};

// udpateMessage showing how many pairs found thus far
function updateMessage() {
    if (tries => 0) {
        messageElement.textContent = `You have ${matchedPairs} matched pairs in ${tries} tries! Tries left: ${triesLeft}`
    } else if (matchedPairs = 8) {
        messageElement.textContent = `You found all 8 pairs! Thank you for contributing to the No Missing Socks Movement!`
    }
};

//winning function
function checkWin() {
    if (matchedPairs === 8) {
        win = true;
        console.log(win);
    }
}

// losing function


// shuffle cards


// restart game

// add a timer

// if timer runs out, stop game, and display try again message

/*----------- Event Listeners ----------*/
// listen for card click, flip over when card has been clicked
cardElements.forEach((cardElement) => {
    cardElement.addEventListener('click', handleClick);
});

resetBtn.addEventListener('click', init);

