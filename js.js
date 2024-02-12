
    
// Game options//

let gameOptions = ["rock","paper","scissors"];

const allBtns=document.querySelectorAll(".btn-options");

function  startGame (){  
  allBtns.forEach(btn => {
    btn.addEventListener("click",()=>{
      if(btn.id ){
        playRound(btn.id)
        
      }      
    })     
  })
};
startGame();

// Computer's choose an option //
function getComputerChoice (){
  let computerChoice = gameOptions[Math.floor(Math.random()*gameOptions.length)];
  return computerChoice
}


// Check who wins//

function checkWinner (choice1,choice2){  
 if (choice1==choice2){
   return "tie"
 }else if (choice1 === "rock" && choice2==="scissors" ||
 choice1 === "paper" && choice2==="rock" || 
 choice1 === "scissor" && choice2==="paper"){
 return "player"
 }else{
   return "computer"
 }
}

const winners =[];
const winner = checkWinner ();
winners.push(winner);
function checkWins(){
  const playerWinCount =winners.filter((item)=>item=="player").length ;
  const compuWinCount= winners.filter((item)=>item=="computer").length;
  return Math.max(playerWinCount ,compuWinCount)
}



//Play one round
function playRound(playerSelection) {
  const totalWins = checkWins();
  if (totalWins>=5){
    return "Game Over"
  }
  
  const computerSelection = getComputerChoice();  
  let result = checkWinner (playerSelection,computerSelection);
  if (result==="tie"){
    return document.querySelector(".result").innerHTML= `Player chose: ${playerSelection}, Computer chose: ${computerSelection}, It is a TIE`;    
  }else if(result==="player"){
    return document.querySelector(".result").innerHTML=`Player chose: ${playerSelection}, Computer chose: ${computerSelection}, ${playerSelection} beats ${computerSelection}, Player WINS!!`
  }else {
    return document.querySelector(".result").innerHTML=`Computer chose: ${computerSelection}, Player chose: ${playerSelection}, ${computerSelection} beats ${playerSelection}, Computer WINS!!`
  }    
}
 
//play the game 


/*

function game(playerSelection){
  let playerScore = 0;
  let computerScore=0;
  const computerSelection = getComputerChoice(); 

  for(let i=0;i<5;i++){
    console.log(i)
    if(checkWinner (playerSelection,computerSelection)==="player"){
      playerScore++;
    }else if(checkWinner (playerSelection,computerSelection)==="computer"){
      computerScore++;    
    }
  }
  if(playerScore>computerScore){
    document.querySelector(".result").innerHTML= `Player's score:${playerScore}, Computer's score: ${computerScore},PLAYER IS THE WINNER` 
  }else if(computerScore>playerScore){
    document.querySelector(".result").innerHTML=`Computer's score: ${computerScore},Player's score: ${playerScore}, COMPUTER IS THE WINNER`;
  }else{
    document.querySelector(".result").innerHTML=`Computer's score: ${computerScore},Player's score: ${playerScore},  IT IS A TIE`
  }
}
  
game()
*/