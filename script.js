const choices = ["rock", "paper", "scissors"]

let humanScore = 0;
let computerScore = 0;
let currentRound = 1;
let totalRounds = 5;

const rockHuman = document.querySelector(".human.rock")
const paperHuman = document.querySelector(".human.paper")
const scissorsHuman = document.querySelector(".human.scissors")
const humanHands = [rockHuman, paperHuman, scissorsHuman]
const handContainerHuman = document.querySelector(".hand-container.human")

const statusIndicator = document.querySelector(".status-indicator")

const humanScoreIndicator = document.querySelector(".human .score-container > span")
const computerScoreIndicator = document.querySelector(".computer .score-container > span")

const rockComputer = document.querySelector(".computer.rock")
const paperComputer = document.querySelector(".computer.paper")
const scissorsComputer = document.querySelector(".computer.scissors")
const computerHands = [rockComputer, paperComputer, scissorsComputer]

const resetGameButton = document.querySelector("button.reset")
resetGameButton.addEventListener("click", resetGame)

handContainerHuman.addEventListener("click", event => {
  if(![...event.target.classList].includes("hand")) return
  
  highlightHand(event.target)
  if(event.target === rockHuman) playRound("rock")
  else if(event.target === paperHuman) playRound("paper")
  else if(event.target === scissorsHuman) playRound("scissors")
})

function getWinner(humanChoice, computerChoice){
  if((humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
  ) return "human"
  else if(humanChoice === computerChoice) return "tie"
  else return "computer"
}


function playRound(humanHand){
  disableHands()
  const computerChoice = getComputerChoice()
  
  if(computerChoice === "rock") highlightHand(rockComputer)
  else if (computerChoice === "paper") highlightHand(paperComputer)
  else highlightHand(scissorsComputer)

  const winner = getWinner(humanHand, computerChoice)

  if(winner === "human"){
    humanScore++
    statusIndicator.innerText = "🧑 Human Wins! 🎉"
  } else if(winner === "computer"){
    computerScore++
    statusIndicator.innerText = "🤖 Computer Wins! 🎉"
  } else statusIndicator.innerText = "It's a tie!"

  currentRound++
  updateScores()
  setTimeout(resetRound, 1500)
}
function updateScores(){
  humanScoreIndicator.innerText = String(humanScore).padStart(2, 0)
  computerScoreIndicator.innerText = String(computerScore).padStart(2, 0)
}

function resetRound(){
  enableHands()
  statusIndicator.innerText = `Round ${currentRound}`
}

function getComputerChoice(){
  return choices[Math.floor(Math.random() * 3)]
}

function highlightHand(element){
  element.classList.toggle("highlighted")
}

function disableHands(){
  humanHands.forEach(hand => {
    hand.style.pointerEvents = "none"
  })
}

function enableHands(){
  humanHands.forEach(hand => {
    hand.style.pointerEvents = "all"
    hand.classList.remove("highlighted")
  })

  computerHands.forEach(hand => {
    hand.classList.remove("highlighted")
  })
}