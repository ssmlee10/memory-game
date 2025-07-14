/*----- Cached Element References  -----*/
const enterBtn = document.getElementById("enterBtn");
const clickSound = document.getElementById("clickSound");

/*----------- Event Listeners ----------*/
console.log(enterBtn);
enterBtn.addEventListener("click", () => {
  clickSound.currentTime = 0;
  clickSound.play();
  setTimeout(() => {
    window.location.href = "../pages/gamePage.html";
  },300);
});
