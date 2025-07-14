/*-------------- Constants -------------*/

/*---------- Variables (state) ---------*/
let turn;
let matchedPairs;
let firstCardClicked;
let secondCardClicked;
let tries = 0;
let triesLeft;
let win = false;

/*----- Cached Element References  -----*/
const messageElement = document.querySelector("#messageElement");
const boardElements = document.querySelector("#board");
const cardElements = document.querySelectorAll(".card");
const resetBtn = document.querySelector("#reset");
const bubbleClick = document.getElementById("bubbleClick");

/*-------------- Functions -------------*/
// initial board
function init() {
  firstCardClicked = undefined;
  secondCardClicked = undefined;
  matchedPairs = 0;
  tries = 0;
  triesLeft = 50 - tries;
}

// registers click values
function handleClick(event) {
  // if the div is clicked, this makes it not apply the class of toggleImg and remove the
  if(event.target.tagName !== "IMG") {
    return;
  }
  countTries();
  // lose function
  // end the game if 8 pairs not found in 50 tries
  if (tries >= 50) {
    return;
  }
  // win function, end game
  if (matchedPairs === 8) {
    return;
  }
  const parentElement = event.target.parentElement;
  if (firstCardClicked === undefined) {
    firstCardClicked = parentElement;
    firstCardClicked.children[0].classList.add("toggleImg");
    firstCardClicked.children[1].classList.remove("toggleImg");
  } else {
    secondCardClicked = parentElement;
    secondCardClicked.children[0].classList.add("toggleImg");
    secondCardClicked.children[1].classList.remove("toggleImg");
    flipCardBack();
    checkWin();
    checkMatch();
  }
}

// count number of tries, count number of tries left
// updateMessage to show tries used, tries left
function countTries() {
  tries = tries + 1;
  triesLeft = 50 - tries;
  updateMessage();
}

// check for a match
function checkMatch() {
  if (
    firstCardClicked.getAttribute("class") ===
    secondCardClicked.getAttribute("class")
  ) {
    matchedPairs = matchedPairs + 1;
    updateMessage();
    // matched class makes cards unclickable after matched
    // sets opacity to 0.7 so there is a visual difference in matched pairs
    firstCardClicked.classList.add("matched");
    secondCardClicked.classList.add("matched");
  }
  resetAfterMatch();
}

// if match is not found, flip back the cards that weren't a match
function flipCardBack() {
  if (
    firstCardClicked.getAttribute("class") !=
    secondCardClicked.getAttribute("class")
  ) {
    const firstFront = firstCardClicked.children[0];
    const firstBack = firstCardClicked.children[1];
    const secondFront = secondCardClicked.children[0];
    const secondBack = secondCardClicked.children[1];
    setTimeout(() => {
      firstFront.classList.remove("toggleImg");
      firstBack.classList.add("toggleImg");
      secondFront.classList.remove("toggleImg");
      secondBack.classList.add("toggleImg");
    }, 1000);
  }
}

// after a match pair is found, reset to find another match
function resetAfterMatch() {
  firstCardClicked = undefined;
  secondCardClicked = undefined;
}

// udpateMessage showing how many pairs found thus far
// updateMessage at lose (tries = 50)
// updateMessage at win (matchedPairs = 8)
function updateMessage() {
  if (tries >= 50) {
    messageElement.textContent = `You matched ${matchedPairs} out of 8 sock pairs! :(\nHit reset and try again!`;
    return;
  } else if (tries >= 0) {
    messageElement.textContent = `You have ${matchedPairs} matched pairs in ${tries} moves!\nMoves left: ${triesLeft}`;
  }
  if (matchedPairs === 8) {
    messageElement.textContent = `Impressive! You found all 8 pairs in ${tries} moves!\nThank you for being our sock-matching hero!! #teamnomorelonelysocks`;
  }
}

//winning function
function checkWin() {
  if (matchedPairs === 8) {
    win = true;
  }
}

// /*----------- Set Initial Audio Volume ----------*/
// audio.volume = 0.35;

/*----------- Initialize Functions ----------*/
init();

// listen for card click, flip over when card has been clicked
cardElements.forEach((cardElement) => {
  cardElement.addEventListener("click", handleClick);
});

// plays bubbleClick once each card is clicked
cardElements.forEach((cardElement) => {
  cardElement.addEventListener("click", () => {
    bubbleClick.currentTime = 0;
    bubbleClick.play();
  });
});

// on click of resetBtn, plays clickSound and resets window with .3 sec delay
resetBtn.addEventListener("click", () => {
  clickSound.currentTime = 0;
  clickSound.play();
  setTimeout(() => {
    // this functions the same way as clicking page refresh
    window.location.reload();
  }, 300);
});
