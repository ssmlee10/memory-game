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
    console.log(event.target);
    console.log(event.target.parentElement);
    console.log(event.target.children);
    console.log(event.target.nextElementSibling);
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
    // if card is clicked, current image being displayed should have a class added of toggleImg, the other image should have the class of toggleImg removed. this will remove the image

    // event.target is the first element inside of the div individual card elements
    event.target.classList.add('toggleImg');
    // event.target.nextElementSibling is the next element that is in the same card container div, in this case the next sib is an image
    event.target.nextElementSibling.classList.remove('toggleImg');

    
    // toggling the first card in the first box
    // console.log(cardElements);
    // console.log(coverCard);
    // console.log(cloudSockOne);
    // coverCard.classList.add('toggleImg');
    // cloudSockOne.classList.remove('toggleImg')

    // if (containerOne.classList.contains('toggleImg')) {
    //     console.log("toggle image found");
    //     coverCard.classList.add('toggleImg');
    //     cloudSockOne.classList.remove('toggleImg');
    // }


    // if (event.target.children[0].classList.contains('toggleImg')) {
    //     console.log("toggle image found");
    //     event.target.children[0].classList.remove('toggleImg');
    // };
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