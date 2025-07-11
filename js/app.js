/*-------------- Constants -------------*/

/*---------- Variables (state) ---------*/
// setup board
let gameBoard;
let turn;
let matchedPairs;
let firstCardClicked;
let secondCardClicked;
let firstCardClass;
let secondCardClass;
let tries = 0;
let triesLeft;
let win = false;
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
    triesLeft = 50 - tries;
    messageElement.textContent = "";
};
//     cardElements.forEach(card) => {
//         cardElements.children[0].classList.add('toggleImg');
//         cardElements.children[1].classList.remove('toggleImg');
//     }
// }

// register click values
function handleClick(event) {
    // lose function
    // end game if 8 pairs not found in 50 tries
    if (tries >= 50) {
        return;
    }
    // win, end game
    if (matchedPairs === 8) {
        return;
    }
    countTries();
    const parentElement = event.target.parentElement;
    if (firstCardClicked === undefined) {
        firstCardClicked = parentElement;
        console.log(firstCardClicked.getAttribute("class"));
        console.log(tries);
        firstCardClicked.children[0].classList.add('toggleImg');
        firstCardClicked.children[1].classList.remove('toggleImg');
    } else {
        secondCardClicked = parentElement;
        console.log(secondCardClicked.classList);
        secondCardClicked.children[0].classList.add('toggleImg');
        secondCardClicked.children[1].classList.remove('toggleImg');
        let firstCardClass = firstCardClicked.getAttribute("class");
        let secondCardClass = secondCardClicked.getAttribute("class");
        flipCardBack();
        checkWin();
        checkMatch();
        // setTimeout(() => {
        //     firstCardClicked.classList.remove('toggleImg');
        //     event.target.nextElementSibling.classList.add('toggleImg');
        // }, 1000);
    }
};

// count number of tries
// updateMessage to show tries used, tries left
function countTries() {
    tries = tries + 1;
    triesLeft = 50 - tries;
};

// check for a match
function checkMatch() {
    if (firstCardClicked.getAttribute("class") === secondCardClicked.getAttribute("class")) {
        console.log(firstCardClicked.getAttribute("class"));
        console.log(secondCardClicked.getAttribute("class"));
        matchedPairs = matchedPairs + 1;
        updateMessage();
        console.log('matched!');
        console.log(matchedPairs);
        // add class to cards that match (save this for the end)
        // somehow do something with the class, can't be clicked on, so same pairs are not clicked again
        // cards flipped over, then won't be able to click again
    }

    resetAfterMatch();
};

// if match is not found, flip back the cards that weren't a match
function flipCardBack() {
    if (firstCardClicked.getAttribute("class") != secondCardClicked.getAttribute("class")) {
        console.log(firstCardClicked.children[0]);
        console.log(secondCardClicked);
        const firstFront = firstCardClicked.children[0];
        const firstBack = firstCardClicked.children[1];
        const secondFront = secondCardClicked.children[0];
        const secondBack = secondCardClicked.children[1];
        // firstCardClicked.children[0].classList.remove('toggleImg');
        // firstCardClicked.children[1].classList.add('toggleImg');
        // secondCardClicked.children[0].classList.remove('toggleImg');
        // secondCardClicked.children[1].classList.add('toggleImg');
        // timeout doesn't manipulate DOM, need to declare variables & use variables
            setTimeout(() => {
            firstFront.classList.remove('toggleImg');
            firstBack.classList.add('toggleImg');
            secondFront.classList.remove('toggleImg');
            secondBack.classList.add('toggleImg');
        }, 1400);
    }
}

// after a match pair is found, reset to find another match
function resetAfterMatch() {
    firstCardClicked = undefined;
    secondCardClicked = undefined;
};

// udpateMessage showing how many pairs found thus far
function updateMessage() {
    if (tries >= 0) {
        messageElement.textContent = `You have ${matchedPairs} matched pairs after ${tries} tries! Tries left: ${triesLeft}`
    } else if (tries = 50) {
        messageElement.textContent = `Sorry you lost :( Hit reset and try again!)`
    }
    if (matchedPairs === 8) {
        messageElement.textContent = `You found all 8 pairs! Thank you for being our sock-matching hero!`
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

/*----------- Initaliaize Functions ----------*/
init();

// same as clicking page refresh
// assistance from Glenn
const reload = () => {
    window.location.reload();
}

/*----------- Event Listeners ----------*/
// listen for card click, flip over when card has been clicked
cardElements.forEach((cardElement) => {
    cardElement.addEventListener('click', handleClick);
});

resetBtn.addEventListener('click', reload);