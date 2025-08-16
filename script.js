const playerDisplay = document.getElementById("player-score");
const computerDisplay = document.getElementById("computer-score");
const resultDisplay = document.getElementById("resultDisplay");

const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function Game(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const getResult = (playerChoice, computerChoice) =>
        playerChoice === computerChoice ? "IT'S A TIE! 🙁" :
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper") ? "YOU WIN! 😁" : "YOU LOSE! 😭";

    const result = getResult(playerChoice, computerChoice);

    if (result === "YOU WIN! 😁") {
        playerScore++;
    } else if (result === "YOU LOSE! 😭") {
        computerScore++;
    }

    resultDisplay.textContent = result;
    playerDisplay.textContent = `PLAYER SCORE: ${playerScore}`;
    computerDisplay.textContent = `COMPUTER SCORE: ${computerScore}`;

    resultDisplay.style.background = result === "IT'S A TIE! 🙁" ? "blue" : result === "YOU WIN! 😁" ? "green" : "red";
    resultDisplay.style.border = "2px solid transparent";
    resultDisplay.style.color = "white";

    // Check for game over
    if (playerScore === 5) {
        setTimeout(() => {
            alert("🎉 You won the game! 🎉");
            resetGame();
        }, 500);
    } else if (computerScore === 5) {
        setTimeout(() => {
            alert("😢 Computer won the game! Try again.");
            resetGame();
        }, 500);
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerDisplay.textContent = `PLAYER SCORE: 0`;
    computerDisplay.textContent = `COMPUTER SCORE: 0`;
    resultDisplay.textContent = "Result";
    resultDisplay.style.background = "transparent";
}