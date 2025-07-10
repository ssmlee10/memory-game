/*-------------- Constants -------------*/

/*---------- Variables (state) ---------*/
// setup board
let gameBoard;
let turn;
let matchedPairs;
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
// select the first container, then select the first img
const containerOne = document.querySelector('.cloudSock');
const coverCard = containerOne.querySelector('img');
const cloudSockOne = containerOne.querySelectorAll('img')[1];

/*-------------- Functions -------------*/
// initial board for reset
function init() {
    firstCardClicked = undefined;
    secondCardClicked = undefined;
    matchedPairs = 0;
    tries = 0;
    triesLeft = 50 - tries;
}
init();

// flip card on click
// const img = document.querySelectorAll('faceCard');

// cardElement.addEventListener('click', function() {
//     if (img.classList.contains('toggleImg')) {
//         img.classList.remove('toggleImg');
//     } else {
//         img.classList.add('toggleImg');
//     }

// })

// count number of tries
// updateMessage to show tries used, tries left
function countTries(event) {
    tries = tries + 1;
    triesLeft = 50 - tries;
    updateMessage();
};

// register click values
function handleClick(event) {
    if (tries >= 50) {
        return;
    }
    const parentElement = event.target.parentElement;
    if (firstCardClicked === undefined) {
        firstCardClicked = parentElement;
        console.log(firstCardClicked);
        firstCardClicked.children[0].classList.add('toggleImg');
        firstCardClicked.children[1].classList.remove('toggleImg');
    } else {
        secondCardClicked = parentElement;
        console.log(secondCardClicked);
        secondCardClicked.children[0].classList.add('toggleImg');
        secondCardClicked.children[1].classList.remove('toggleImg');
    // flipCardBack(event);
    // checkWin();
    countTries(event);
    // setTimeout(() => {
    //     firstCardClicked.classList.remove('toggleImg');
    //     event.target.nextElementSibling.classList.add('toggleImg');
    // }, 1000);
    }
    checkMatch();
};

// check for a match
function checkMatch() {
    if (firstCardClicked === secondCardClicked) {
        matchedPairs = matchedPairs + 1;
        console.log('matched!');
        console.log(matchedPairs);
        // add class to cards that match (save this for the end)
        // somehow do something with the class, can't be clicked on, so same pairs are not clicked again
        // cards flipped over, then won't be able to click again
    }
    //  else if (firstCardClicked != secondCardClicked) {
    //     // resetAfterMatch();
    // }
};

// if match is not found, flip back the cards that weren't a match
// function flipCardBack(event) {
//     if (firstCardClicked != secondCardClicked) {
//         console.log(event.target); // show
//         console.log(event.target.nextElementSibling); //hide
//     }
// }

// after a match pair is found, reset to find another match
function resetAfterMatch() {
    firstCardClicked = undefined;
    secondCardClicked = undefined;
};

// udpateMessage showing how many pairs found thus far
function updateMessage() {
    if (tries => 0) {
        messageElement.textContent = `You have ${matchedPairs} matched pairs after ${tries} tries! Tries left: ${triesLeft}`
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