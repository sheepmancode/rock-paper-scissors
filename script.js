//refernce to buttons
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");

//reference to score displays
let playerScoreDiv = document.querySelector(".player-score");
let compScoreDiv = document.querySelector(".comp-score");
let drawScoreDiv = document.querySelector(".draws");
let winnerAlert = document.querySelector(".winner-alert");
let humanChoiceDisplay = document.querySelector(".choice-display-human");
let compChoiceDisplay = document.querySelector(".choice-display-comp");
let resultDisplay = document.querySelector(".result");

// initialize variables
let humanScore = 0;
let computerScore = 0;
let draws = 0;

//get computer choice
function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
      break;
  }
}

//play one game
function playRound(humanChoice) {
  let computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    WinLose = null;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    WinLose = false;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    WinLose = true;
  } else if (humanChoice === "scissor" && computerChoice === "rock") {
    WinLose = false;
  } else if (humanChoice === "rock" && computerChoice === "scissor") {
    WinLose = true;
  } else if (humanChoice === "paper" && computerChoice === "scissor") {
    WinLose = false;
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    WinLose = true;
  } else {
    WinLose = false;
  }

  //compute scores after the game
  if (WinLose === true) {
    humanScore += 1;
    resultDisplay.textContent = `Result: Won`;
  } else if (WinLose === false) {
    computerScore += 1;
    resultDisplay.textContent = `Result: Lost`;
  } else {
    draws += 1;
    resultDisplay.textContent = `Result: Draw`;
  }

  //update score display
  playerScoreDiv.textContent = `Player Score: ${humanScore}`;
  compScoreDiv.textContent = `Comp Score: ${computerScore}`;
  drawScoreDiv.textContent = `Draws: ${draws}`;
  compChoiceDisplay.textContent = `Computer Choice: ${computerChoice}`;
  humanChoiceDisplay.textContent = `Your Choice: ${humanChoice}`;

  //tell the winner
  if (humanScore === 5) winnerAlert.textContent = `You Won!`;
  else if (computerScore === 5) winnerAlert.textContent = `You Lost!`;
  else if (draws === 5) winnerAlert.textContent = `It's a draw!`;

  //reset after 5 rounds
  if (humanScore === 5 || computerScore === 5 || draws === 5) {
    humanScore = 0;
    computerScore = 0;
    draws = 0;
  }
}

//event listeners for button click
rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorButton.addEventListener("click", () => playRound("scissor"));
