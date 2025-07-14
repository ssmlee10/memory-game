/*----- Cached Element References  -----*/
const enterBtn = document.getElementById("enterBtn");

/*----------- Event Listeners ----------*/
console.log(enterBtn);
enterBtn.addEventListener("click", () => {
  console.log("hello");
  clickSound.currentTime = 0;
  clickSound.play;
  setTimeout(() => {
  }, 300);
});
