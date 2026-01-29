const choices = ["rock", "paper", "scissors"]

let humanScore = 0;
let computerScore = 0;
const TOTAL_ROUNDS = 5;

const rockHuman = document.querySelector(".human.rock")
const paperHuman = document.querySelector(".human.paper")
const scissorsHuman = document.querySelector(".human.scissors")
const handContainerHuman = document.querySelector(".hand-container.human")

handContainerHuman.addEventListener("click", event => {
  if(event.element) return
  
  highlightHand(event.target)
  if(event.target === rockHuman) playRound("rock")
  else if(event.target === paperHuman) playRound("paper")
  else if(event.target === scissorsHuman) playRound("scissors")
})

function playRound(humanHand){
  
}

function getComputerChoice(){
  return choices[Math.floor(Math.random() * 3)]
}

function highlightHand(element){
  element.classList.toggle("highlighted")
}

