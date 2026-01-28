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

// function getHumanChoice(){
  // const humanChoice = prompt("What's your choice?").toLowerCase()
  // console.log(`Human chose ${humanChoice}!`);
  // return humanChoice
// }

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



const humanHandContainer = document.querySelector(".human-hand")

function highlightHand(element){
  element.classList.toggle("highlighted")
}



humanHandContainer.addEventListener("click", event => {
  const target = event.target;
  
  if(!(target.classList[0] === "hand-button")) return

  highlightHand(target)
  
  const computerChoice = getComputerChoice()
  console.log(computerChoice);
  
  
  switch(target.id){
    case "human-scissors":
      const humanScissors = document.querySelector("#human-scissors")
      
      break
  }
})