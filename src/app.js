/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.getElementById("btnGenerate").addEventListener("click", () => {
  generateRandomCard();
});

window.onload = function() {
  generateRandomCard();
  //write your code here
  setInterval(() => {
    //Obtener Numero Aleatorio
    generateRandomCard();
  }, 2000);
};

function generateRandomCard() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indexNum = Math.floor(Math.random() * numbers.length);

  document.getElementById("number").innerHTML = numbers[indexNum];

  //Obtener Simbolo Aleatorio
  let option = Math.floor(Math.random() * 4) + 1;
  let symbol_number = "\u2660";
  switch (option) {
    case 1: // Corazon
      symbol_number = "\u2665";
      document.getElementById("upper").style.color = "red";
      document.getElementById("bottom").style.color = "red";
      document.getElementById("number").style.color = "red";
      break;
    case 2: // Hoja
      symbol_number = "\u2660";
      document.getElementById("upper").style.color = "black";
      document.getElementById("bottom").style.color = "black";
      document.getElementById("number").style.color = "black";
      break;
    case 3: // Trebol
      symbol_number = "\u2663";
      document.getElementById("upper").style.color = "black";
      document.getElementById("bottom").style.color = "black";
      document.getElementById("number").style.color = "black";
      break;
    case 4: // Diamante
      symbol_number = "\u2666";
      document.getElementById("upper").style.color = "red";
      document.getElementById("bottom").style.color = "red";
      document.getElementById("number").style.color = "red";
      break;
    default:
      break;
  }

  document.getElementById("upper").innerHTML = symbol_number;
  document.getElementById("bottom").innerHTML = symbol_number;
}
