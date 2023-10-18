const menuBtn = document.querySelector("#hambtn");
const exitBtn = document.querySelector("#exitbtn");
const overlay = document.querySelector("#overlay");
menuBtn.addEventListener("click", (event) => {
  overlay.style.display = "flex";
});
exitBtn.addEventListener("click", (event) => {
  overlay.style.display = "none";
});
