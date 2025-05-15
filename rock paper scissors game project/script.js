function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
console.log(getComputerChoice());
function getHumanChoice() {
  // Prompt the user to make a choice
  let choice = prompt("Enter your choice (rock, paper, or scissors):");

  // Return the user's choice
  return choice;
}

// Test the function
console.log(getHumanChoice());
// Declare the score variables in the global scope
let humanScore = 0;
let computerScore = 0;

function playGame() {
  // Declare score variables inside the playGame function
  let humanScore = 0;
  let computerScore = 0;

  // Function to get the human player's choice
  function getHumanChoice() {
    return prompt("Enter your choice (rock, paper, or scissors):");
  }

  // Function to get the computer's choice
  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  // Function to play one round
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  // Play 5 rounds
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  // Final result
  console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("You lost the game!");
  } else {
    console.log("The game is a tie!");
  }
}

// Start the game
playGame();




