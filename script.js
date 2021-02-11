"use strict";
let score = document.querySelectorAll(".score");
let currentNumber = document.querySelectorAll(".current-number");
let dice = document.querySelector("#dice");
let rollDiceBtn = document.querySelector("#roll-dice");
let holdBtn = document.querySelector("#hold");
let newGameBtn = document.querySelector("#new-game");
let selected = "rgba(255, 255, 255, 0.6)";
let unSelected = "rgba(255, 255, 255, 0.2)";
let currentPlayer = document.querySelector(".current-player");
let players = document.querySelectorAll(".player");
//
//
// TEST FUNCTIONS

function diceView(numberOnDice) {
  dice.style.visibility = "hidden";
  let dots = document.querySelectorAll(".dot");
  for (let i = 0; i < dots.length; i++) dots[i].style.visibility = "hidden";
  function showDots(array) {
    dice.style.visibility = "visible";
    for (let i = 0; i < array.length; i++)
      dots[array[i]].style.visibility = "visible";
  }
  switch (numberOnDice) {
    case 1:
      showDots([6]);
      break;
    case 2:
      showDots([0, 5]);
      break;
    case 3:
      showDots([2, 3, 6]);
      break;
    case 4:
      showDots([0, 2, 3, 5]);
      break;
    case 5:
      showDots([0, 2, 3, 5, 6]);
      break;
    case 6:
      showDots([0, 1, 2, 3, 4, 5]);
      break;
  }
}

let startGame = function () {
  score[0].textContent = 0;
  score[1].textContent = 0;
  currentNumber[0].textContent = 0;
  currentNumber[1].textContent = 0;
  dice.value = 0;
  diceView(0);
};

// start new game
newGameBtn.addEventListener("click", function () {
  startGame();
  let activePlayer = defineActivePlayer();
  activePlayer.style.backgroundColor = selected;
});
// roll the dice
function defineActivePlayer() {
  let turn = currentPlayer.textContent;
  let activePlayer = players[turn];
  return activePlayer;
}
function newActivePlayer() {
  Number(currentPlayer.textContent) !== 0
    ? (currentPlayer.textContent = 0)
    : (currentPlayer.textContent = 1);
  holdBtn.disabled = true;
  holdBtn.style = unSelected;
}

rollDiceBtn.addEventListener("click", function () {
  let activePlayer = defineActivePlayer();
  let number = Math.trunc(Math.random() * 6 + 1);
  console.log(number);
  dice.value = number;
  diceView(number);
  if (number != 1) {
    activePlayer.querySelector(".current-number").textContent =
      Number(activePlayer.querySelector(".current-number").textContent) +
      number;
    holdBtn.disabled = false;
    holdBtn.style = selected;
  } else {
    activePlayer.querySelector(".current-number").textContent = 0;
    newActivePlayer();
    activePlayer.style.backgroundColor = unSelected;
    players[currentPlayer.textContent].style.backgroundColor = selected;
  }
});

// hold
function youWin(winner) {
  winner.style.backgroundColor = "rgba(0, 255, 250, 0.6)";
  winner.style.color = "rgba(255, 255, 255)";
  rollDiceBtn.disabled = true;
  rollDiceBtn.style = unSelected;
  holdBtn.disabled = true;
  holdBtn.style = unSelected;
  document.querySelector(".winner").textContent = `${
    winner.querySelector(".name").textContent
  } wins!`;
}

holdBtn.addEventListener("click", function () {
  let activePlayer = defineActivePlayer();
  let currentScore = Number(
    activePlayer.querySelector(".current-number").textContent
  );
  let totalScore = Number(activePlayer.querySelector(".score").textContent);
  activePlayer.querySelector(".score").textContent = totalScore + currentScore;
  activePlayer.querySelector(".current-number").textContent = 0;
  console.log(activePlayer.querySelector(".score").textContent);
  if (Number(activePlayer.querySelector(".score").textContent) >= 100) {
    youWin(activePlayer);
  } else {
    newActivePlayer();
    activePlayer.style.backgroundColor = unSelected;
    players[currentPlayer.textContent].style.backgroundColor = selected;
  }
});
