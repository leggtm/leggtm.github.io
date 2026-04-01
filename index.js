
const card = document.querySelector(".innerCard");
const body = document.querySelector("body");

card.addEventListener("click", function (e) {
    card.classList.toggle('isFlipped');
});