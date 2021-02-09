"use strict";
let scorePlayer1 = document.querySelector(".score.left");
let scorePlayer2 = document.querySelector(".score.right");
let currentNumber1 = document.querySelector(".current.left .current-number");
let currentNumber2 = document.querySelector(".current.right .current-number");
let dice = document.querySelector("#dice");
//
//TEST
let testScore = document.querySelector(".test-score");
let testCurrent = document.querySelector(".test-current");
//
//
// TEST FUNCTIONS
//
//
//
function diceView(x) {
  switch (x) {
    case 0:
      dice.style.visibility = "hidden";
      document.querySelector("#dot1").style.visibility = "hidden";
      document.querySelector("#dot2").style.visibility = "hidden";
      document.querySelector("#dot3").style.visibility = "hidden";
      document.querySelector("#dot4").style.visibility = "hidden";
      document.querySelector("#dot5").style.visibility = "hidden";
      document.querySelector("#dot6").style.visibility = "hidden";
      document.querySelector("#dot7").style.visibility = "hidden";
      break;
    case 1:
      dice.style.visibility = "visible";
      document.querySelector("#dot1").style.visibility = "hidden";
      document.querySelector("#dot2").style.visibility = "hidden";
      document.querySelector("#dot3").style.visibility = "hidden";
      document.querySelector("#dot4").style.visibility = "hidden";
      document.querySelector("#dot5").style.visibility = "hidden";
      document.querySelector("#dot6").style.visibility = "hidden";
      document.querySelector("#dot7").style.visibility = "visible";
      break;
    case 2:
      dice.style.visibility = "visible";
      document.querySelector("#dot1").style.visibility = "visible";
      document.querySelector("#dot2").style.visibility = "hidden";
      document.querySelector("#dot3").style.visibility = "hidden";
      document.querySelector("#dot4").style.visibility = "hidden";
      document.querySelector("#dot5").style.visibility = "hidden";
      document.querySelector("#dot6").style.visibility = "visible";
      document.querySelector("#dot7").style.visibility = "hidden";
      break;
    case 3:
      dice.style.visibility = "visible";
      document.querySelector("#dot1").style.visibility = "hidden";
      document.querySelector("#dot2").style.visibility = "hidden";
      document.querySelector("#dot3").style.visibility = "visible";
      document.querySelector("#dot4").style.visibility = "visible";
      document.querySelector("#dot5").style.visibility = "hidden";
      document.querySelector("#dot6").style.visibility = "hidden";
      document.querySelector("#dot7").style.visibility = "visible";
      break;
    case 4:
      dice.style.visibility = "visible";
      document.querySelector("#dot1").style.visibility = "visible";
      document.querySelector("#dot2").style.visibility = "hidden";
      document.querySelector("#dot3").style.visibility = "visible";
      document.querySelector("#dot4").style.visibility = "visible";
      document.querySelector("#dot5").style.visibility = "hidden";
      document.querySelector("#dot6").style.visibility = "visible";
      document.querySelector("#dot7").style.visibility = "hidden";
      break;
    case 5:
      dice.style.visibility = "visible";
      document.querySelector("#dot1").style.visibility = "visible";
      document.querySelector("#dot2").style.visibility = "hidden";
      document.querySelector("#dot3").style.visibility = "visible";
      document.querySelector("#dot4").style.visibility = "visible";
      document.querySelector("#dot5").style.visibility = "hidden";
      document.querySelector("#dot6").style.visibility = "visible";
      document.querySelector("#dot7").style.visibility = "visible";
      break;
    case 6:
      dice.style.visibility = "visible";
      document.querySelector("#dot1").style.visibility = "visible";
      document.querySelector("#dot2").style.visibility = "visible";
      document.querySelector("#dot3").style.visibility = "visible";
      document.querySelector("#dot4").style.visibility = "visible";
      document.querySelector("#dot5").style.visibility = "visible";
      document.querySelector("#dot6").style.visibility = "visible";
      document.querySelector("#dot7").style.visibility = "hidden";
      break;
  }
}

document.querySelector("#test").addEventListener("click", function () {
  let number = Math.trunc(Math.random() * 6 + 1);
  console.log(number);
  diceView(number);
});

let test = function () {
  scorePlayer1.textContent = 23;
  scorePlayer2.textContent = 4;
  currentNumber1.textContent = 5;
  currentNumber2.textContent = 6;
};

document.querySelector("#test-data").addEventListener("click", test);

//
//
//
// THE GAME
//
//
//
let startGame = function () {
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentNumber1.textContent = 0;
  currentNumber2.textContent = 0;
  dice.value = 0;
  testScore.textContent = 0;
  testCurrent.textContent = 0;
};
startGame();
let rollDice = function () {
  return Math.trunc(Math.random() * 6 + 1);
};

// start new game
document.querySelector("#new-game").addEventListener("click", startGame);
// roll the dice
document.querySelector("#roll-dice").addEventListener("click", function () {
  let number = Math.trunc(Math.random() * 6 + 1);
  console.log(number);
  dice.value = number;
  if (number != 1) {
    testCurrent.textContent = Number(testCurrent.textContent) + number;
  } else {
    testCurrent.textContent = 0;
  }
});
// hold
document.querySelector("#hold").addEventListener("click", function () {
  let currentScore = Number(testCurrent.textContent);
  if (currentScore != 0) {
    testScore.textContent = Number(testScore.textContent) + currentScore;
  } else {
    testScore.textContent = 0;
  }
});
