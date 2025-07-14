/*----- Cached Element References  -----*/
const enterBtn = document.getElementById("enterBtn");
const clickSound = document.getElementById("clickSound");

/*----------- Event Listeners ----------*/
// registers landing page button click
// on click, goes into gamePage.html
// click sound fires first, then setTimeout to go into the page
enterBtn.addEventListener("click", () => {
  clickSound.currentTime = 0;
  clickSound.play();
  setTimeout(() => {
    window.location.href = "../pages/gamePage.html";
  }, 300);
});
