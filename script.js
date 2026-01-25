const choices = ["rock", "paper", "scissors"]

let humanScore = 0;
let computerScore = 0;
const TOTAL_ROUNDS = 5;

function getComputerChoice(){
  const randomNumber = Math.floor(Math.random() * 3);
  const choice = choices[randomNumber]
  console.log(`Computer chose ${choice}!`);
  return choice
}

function getHumanChoice(){
  const humanChoice = prompt("What's your choice?").toLowerCase()
  console.log(`Human chose ${humanChoice}!`);
  return humanChoice
}

function getRoundWinner(humanChoice, computerChoice){
  if(
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ){
    return "human"
  } else if (humanChoice === computerChoice){
    return "tie"
  } else return "computer"
}

function playRound(humanChoice, computerChoice){
  const winner = getRoundWinner(humanChoice, computerChoice)

  if(winner === "human") {
    humanScore += 1
    console.log("Human wins the round!");
  } else if (winner === "computer") {
    computerScore += 1
    console.log("Computer wins the round!");
  } else console.log("Round tie!");
}

function displayScoreAndRound(currentRound) {
  console.log(`Human score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
  console.log(`Round ${currentRound + 1} of ${TOTAL_ROUNDS}`);
}

function playGame(){
  for(let round = 0; round < TOTAL_ROUNDS; round++){
    displayScoreAndRound(round)
    playRound(getHumanChoice(), getComputerChoice())
  }
  if(humanScore > computerScore) console.log("Human wins!");
  else if (computerScore > humanScore) console.log("Computer wins!");
  else console.log("It's a tie!");
}
