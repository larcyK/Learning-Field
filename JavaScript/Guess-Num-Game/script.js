let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

guessField.focus();

function checkGuesss() {
    let userGuess = Number(guessField.value);
    if(guessCount == 1) {
        guesses.textContent = "前回の予想: ";
    }
    guesses.textContent += userGuess + " ";

    if(userGuess == randomNumber) {
        lastResult.textContent = "やったね！正解だよ！";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    } else if (guessCount == 10) {
        lastResult.textContent = "ありゃあ、ゲームオーバーだね...";
        setGameOver();
    } else {
        lastResult.textContent = "間違いだよ";
        lastResult.style.backgroundColor = "red";
        if(userGuess < randomNumber) {
            lowOrHi.textContent = "今の予想は小さすぎたね";
        } else if(userGuess > randomNumber) {
            lowOrHi.textContent = "今の予想は大きすぎたね";
        }
    }

    guessCount ++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuesss);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button")
    resetButton.textContent = "新しいゲームを始める";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resultParas p");
    for(const para of resetParas) {
        para.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}