const firstCard = document.querySelector(".card_first");
const secondCard = document.querySelector(".card_second");
const submitButton = document.querySelector(".btn_submit");
const numberButtons = document.querySelectorAll(".btn_numbers");
const ratingText = document.querySelector(".rating");

submitButton.addEventListener("click", function () {
  firstCard.classList.add("hidden");
  secondCard.classList.remove("hidden");
});

numberButtons.forEach(function (rating) {
  rating.addEventListener("click", function () {
    ratingText.innerHTML = rating.innerHTML;
  });
});
