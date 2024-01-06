// Game options//
let gameOptions = ["rock","paper","scissors"];

// Computer's choose an option //
function getComputerChoice (){
  let computerChoice = gameOptions[Math.floor(Math.random()*gameOptions.length)];
  return computerChoice
}
const computerSelection = getComputerChoice();

// Player choose the option//


function playerChoice (){
  let validatedInput = false;
  while (validatedInput == false){
    const userInput = prompt("Please choose either rock,paper or scissors:");
    if(userInput== null){
      continue;
    }
    let userInputLower = userInput.toLowerCase();
    if (gameOptions.includes(userInputLower)){
      validatedInput=true;
      return userInputLower
    }
  }

}

// Check who wins//

function checkWinner (playerSelection,computerSelection){
 if (playerSelection==computerSelection){
   return "tie"
 }else if (playerSelection === "rock" && computerSelection==="scissors" ||
 playerSelection === "paper" && computerSelection==="rock" || 
 playerSelection === "scissor" && computerSelection==="paper"){
 return "player"
 }else{
   return "computer"
 }
}

//Play one round
function playRound(playerSelection, computerSelection) {
  let result = checkWinner (playerSelection,computerSelection);
  if (result==="tie"){
    return `Player chose: ${playerSelection}, Computer chose: ${computerSelection}, It is a TIE`;    
  }else if(result==="player"){
    return `Player chose: ${playerSelection}, Computer chose: ${computerSelection}, ${playerSelection} beats ${computerSelection}, Player WINS!!`
  }else {
    return `Computer chose: ${computerSelection}, Player chose: ${playerSelection}, ${computerSelection} beats ${playerSelection}, Computer WINS!!`
  }  
}
 
// play the game 

function game(){
  let playerScore = 0;
  let computerScore=0;
  for(let i=0;i<5;i++){
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    console.log("------------------")
    console.log(playRound(playerSelection, computerSelection))
    if(checkWinner (playerSelection,computerSelection)==="player"){
      playerScore++;
    }else if(checkWinner (playerSelection,computerSelection)==="computer"){
      computerScore++;    
    }
  }
  console.log("GAME OVER")
  if(playerScore>computerScore){
    console.log(`Player's score: ${playerScore}, Computer's score: ${computerScore},PLAYER IS THE WINNER`) 
  }else if(computerScore>playerScore){
    console.log(`Computer's score: ${computerScore},Player's score: ${playerScore}, COMPUTER IS THE WINNER`);
  }else{
    console.log(`Computer's score: ${computerScore},Player's score: ${playerScore},  IT IS A TIE`)
  }
}
  





game()
