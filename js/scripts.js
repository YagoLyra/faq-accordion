// Seleciona o elemento com a classe .question-1
const q1 = document.querySelector(".question-1");
const img1 = q1.querySelector("img"); // Seleciona a imagem dentro de .question-1

// Seleciona o elemento com a classe .answer-1
const answer1 = document.querySelector(".answer-1");

// Seleciona o elemento com a classe .question-2
const q2 = document.querySelector(".question-2");
const img2 = q2.querySelector("img"); // Seleciona a imagem dentro de .question-2

// Seleciona o elemento com a classe .answer-2
const answer2 = document.querySelector(".answer-2");

// Seleciona o elemento com a classe .question-3
const q3 = document.querySelector(".question-3");
const img3 = q3.querySelector("img"); // Seleciona a imagem dentro de .question-3

// Seleciona o elemento com a classe .answer-3
const answer3 = document.querySelector(".answer-3");

// Seleciona o elemento com a classe .question-4
const q4 = document.querySelector(".question-4");
const img4 = q4.querySelector("img"); // Seleciona a imagem dentro de .question-4

// Seleciona o elemento com a classe .answer-4
const answer4 = document.querySelector(".answer-4");

// Função para alternar a classe 'hide' e a imagem
function toggleAnswer(answer, img) {
  answer.classList.toggle("hide");
  if (answer.classList.contains("hide")) {
    img.src = "img/icon-plus.svg"; // Caminho para a imagem de ícone de mais
  } else {
    img.src = "img/icon-minus.svg"; // Caminho para a imagem de ícone de menos
  }
}

// Adiciona um evento de clique ao elemento q1
q1.addEventListener("click", function () {
  toggleAnswer(answer1, img1);
});

// Adiciona um evento de clique ao elemento q2
q2.addEventListener("click", function () {
  toggleAnswer(answer2, img2);
});

// Adiciona um evento de clique ao elemento q3
q3.addEventListener("click", function () {
  toggleAnswer(answer3, img3);
});

// Adiciona um evento de clique ao elemento q4
q4.addEventListener("click", function () {
  toggleAnswer(answer4, img4);
});
