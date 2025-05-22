let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

//Get Element HTML

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const restartButton = document.getElementById("restartButton");

function checkGuess() {
  const userGuess = Number(guessInput.value);
  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = `Selamat anda menebak angka ${randomNumber} secara benar dari ${attempts} percobaan`;
    message.style.color = "#28a745";
    endGame();
  } else if (userGuess > randomNumber) {
    message.textContent = "angka terlalu tinggi!coba lagi.";
    message.style.color = "#dc3545";
  } else if (userGuess < randomNumber) {
    message.textContent = "angka terlalu rendah! coba lagi.";
    message.style.color = "#dc3545";
  }

  guessInput = "";
  guessInput.focus();
}

function endGame() {
  guessInput.disabled = true;
  guessButton.disabled = true;
  restartButton.style.display = "inline";
}

function resetGame() {
  attempts = 0;
  Math.floor(Math.random() * 100) + 1;
  guessInput.disabled = false;
  guessButton.disabled = false;
  message.textContent = "Good Luck! Start Guessing . . .";
  message.style.color = "#333333";
  restartButton.style.display = "none";
  guessInput.value = "";
  guessInput.focus();
}

guessButton.addEventListener("click", checkGuess);

restartButton.addEventListener("click", resetGame);

guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});
