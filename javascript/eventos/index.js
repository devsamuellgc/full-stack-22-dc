const btnBlue = document.getElementById("btnBlue");
const btnBlack = document.getElementById("btnBlack");
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const btnOpenModal = document.getElementById("openModal");
const modal = document.getElementById("modal");
const btnCloseModal = document.getElementById("closeModal");

function changeBgColorToBlue() {
  container1.classList.toggle("bgBlue");
}

function changeBgColorToBlack() {
  container2.classList.toggle("bgBlack");
}

function openModal() {
  // modal.style.display = 'flex';
  modal.classList.remove("hidden");
  modal.classList.add("show");
}

function closeModal() {
  // modal.style.display = 'none';
  modal.classList.remove("show");
  modal.classList.add("hidden");
}

modal.addEventListener("click", closeModal);
btnBlue.addEventListener("click", changeBgColorToBlue);
btnBlack.addEventListener("click", changeBgColorToBlack);
btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

/**
 * 2 inputs
 * 1 botão
 * 1 div para apresentar o resultado
 * pegar o valor dos inputs -> como receber o valor de um input no js
 * multiplicar os valores ao clicar no botão -> função
 * e apresentar os valores em uma div
 */
