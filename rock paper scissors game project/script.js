let humanScore = 0;
let computerScore = 0;

// DOM references
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const winnerDiv = document.getElementById("winner");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice) {
  if (humanScore >= 5 || computerScore >= 5) return; // Don't play if game is over

  const computerChoice = getComputerChoice();
  const player = humanChoice.toLowerCase();
  let roundResult = "";

  if (player === computerChoice) {
    roundResult = `It's a tie! You both chose ${player}.`;
  } else if (
    (player === "rock" && computerChoice === "scissors") ||
    (player === "paper" && computerChoice === "rock") ||
    (player === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundResult = `You win! ${player} beats ${computerChoice}.`;
  } else {
    computerScore++;
    roundResult = `You lose! ${computerChoice} beats ${player}.`;
  }

  // Update the display
  resultDiv.textContent = roundResult;
  scoreDiv.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;

  // Check for winner
  if (humanScore === 5 || computerScore === 5) {
    const winnerText = humanScore === 5 ? "🎉 You won the game!" : "💀 You lost the game.";
    winnerDiv.textContent = winnerText;
  }
}

// Button event listeners
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));





