// Seleciona o elemento com a classe .question-1
const q1 = document.querySelector(".question-1");

// Seleciona o elemento com a classe .answer-1
const answer1 = document.querySelector(".answer-1");

// Seleciona o elemento com a classe .question-2
const q2 = document.querySelector(".question-2");

// Seleciona o elemento com a classe .answer-2
const answer2 = document.querySelector(".answer-2");

// Seleciona o elemento com a classe .question-3
const q3 = document.querySelector(".question-3");

// Seleciona o elemento com a classe .answer-3
const answer3 = document.querySelector(".answer-3");

// Seleciona o elemento com a classe .question-4
const q4 = document.querySelector(".question-4");

// Seleciona o elemento com a classe .answer-4
const answer4 = document.querySelector(".answer-4");

// Adiciona um evento de clique ao elemento q1
q1.addEventListener("click", function () {
  // Alterna a classe 'hide' no elemento answer1
  answer1.classList.toggle("hide");
});

// Adiciona um evento de clique ao elemento q2
q2.addEventListener("click", function () {
  // Alterna a classe 'hide' no elemento answer2
  answer2.classList.toggle("hide");
});

// Adiciona um evento de clique ao elemento q3
q3.addEventListener("click", function () {
  // Alterna a classe 'hide' no elemento answer3
  answer3.classList.toggle("hide");
});

// Adiciona um evento de clique ao elemento q4
q4.addEventListener("click", function () {
  // Alterna a classe 'hide' no elemento answer4
  answer4.classList.toggle("hide");
});
