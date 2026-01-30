const choices = ["rock", "paper", "scissors"]

let humanScore = 0;
let computerScore = 0;
const TOTAL_ROUNDS = 5;

const rockHuman = document.querySelector(".human.rock")
const paperHuman = document.querySelector(".human.paper")
const scissorsHuman = document.querySelector(".human.scissors")
const handContainerHuman = document.querySelector(".hand-container.human")

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
  
}

function getComputerChoice(){
  return choices[Math.floor(Math.random() * 3)]
}

function highlightHand(element){
  element.classList.toggle("highlighted")
}

