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
    generateRandomCard();
  }, 10000);
};

function generateRandomCard() {
  //Obtener Numero Aleatorio
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

  //Insert Numero
  document.getElementById("number").innerHTML = numbers[indexNum];

  //Obenter Palo Aleatorio
  let palos = ["♥", "♠", "♣", "♦"];

  let indexPal = Math.floor(Math.random() * palos.length);

  document.getElementById("upper").innerHTML = palos[indexPal];
  document.getElementById("bottom").innerHTML = palos[indexPal];

  if (indexPal === 0 || indexPal === 3) {
    document.getElementById("upper").style.color = "red";
    document.getElementById("bottom").style.color = "red";
    document.getElementById("number").style.color = "red";
  } else {
    document.getElementById("upper").style.color = "black";
    document.getElementById("bottom").style.color = "black";
    document.getElementById("number").style.color = "black";
  }
}

document.getElementById("btnChange").addEventListener("click", () => {
  let hNew = document.getElementById("hInput").value;
  let wNew = document.getElementById("wInput").value;

  document.getElementById("card").style.height = hNew + "px";
  document.getElementById("card").style.width = wNew + "px";
});
