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
