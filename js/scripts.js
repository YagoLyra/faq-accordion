const q1 = document.querySelector(".question-1");
const answer1 = document.querySelector(".answer-1");
const q2 = document.querySelector(".question-2");
const answer2 = document.querySelector(".answer-2");
const q3 = document.querySelector(".question-3");
const answer3 = document.querySelector(".answer-3");
const q4 = document.querySelector(".question-4");
const answer4 = document.querySelector(".answer-4");

q1.addEventListener("click", function () {
  answer1.classList.toggle("hide");
});

q2.addEventListener("click", function () {
  answer2.classList.toggle("hide");
});

q3.addEventListener("click", function () {
  answer3.classList.toggle("hide");
});

q4.addEventListener("click", function () {
  answer4.classList.toggle("hide");
});
