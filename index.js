let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");


let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Frühere Vermutungen: ";
  }

  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Herzlichen Glückwunsch!!! Sie haben es richtig gemacht!";
    lastResult.style.backgroundColor = "gold";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!Spiel ist aus!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Falsch!";
    lastResult.style.backgroundColor = "red";
    if(userGuess < randomNumber) {
      lowOrHi.textContent = "Die letzte Vermutung war zu niedrig!" ;
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = "Die letzte Vermutung war zu hoch!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Neues Spiel starten";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
  resetButton.style.backgroundColor = "red";
  resetButton.style.width = "90px";
  resetButton.style.height = "90px";
  resetButton.style.borderRadius = "16px";
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for(let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
