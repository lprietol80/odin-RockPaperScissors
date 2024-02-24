// Game options//
let gameOptions = ["rock","paper","scissors"];


const rock_btn=document.getElementById("rock");
const paper_btn=document.getElementById("paper");
const scissors_btn=document.getElementById("scissors");
rock_btn.addEventListener("click",()=>{
  const computerSelection = getComputerChoice();
  const playerSelection="rock";
  playRound(playerSelection,computerSelection)
}
);
paper_btn.addEventListener("click",()=>{
  const computerSelection = getComputerChoice();
  const playerSelection="paper";
  playRound(playerSelection,computerSelection)
}
);

scissors_btn.addEventListener("click",
()=>{
  const computerSelection = getComputerChoice();
  const playerSelection="scissors";
  playRound(playerSelection,computerSelection)
}
);



// Computer's choose an option //

function getComputerChoice (){
  let computerSelection = gameOptions[Math.floor(Math.random()*gameOptions.length)];
  return computerSelection
}

function checkWinner (player,computer){
  if (player==computer){
    return "tie"
  }else if (player === "rock" && computer==="scissors" ||
  player === "paper" && computer==="rock" || 
  player === "scissors" && computer==="paper"){
    return "player"
  }else{
    return "computer"
  }
}  

//play round 
function playRound(player, computer) {
  let result = checkWinner (player,computer);
  if (result==="tie"){
    const displayInfo = document.querySelector(".display").innerHTML= `
    <h2>This round:</h2><h3>
    Player chose: <img src="img/${player}.png" alt="scissors">, Computer chose:
    <img src="img/${computer}.png" alt="scissors">, It is a TIE</h3>`;         
  }else if(result==="player"){
    const displayInfo = document.querySelector(".display").innerHTML= `<h2>This round:</h2> 
    <h3>Player chose: <img src="img/${player}.png" alt="scissors">, Computer chose: 
    <img src="img/${computer}.png" alt="scissors">, <img src="img/${player}.png" alt="scissors">beats <img src="img/${computer}.png" alt="scissors">, Player WINS!!</h3>`
  }else {
    const displayInfo = document.querySelector(".display").innerHTML= `<h2>This round:</h2>
    <h3>
    Player chose: <img src="img/${player}.png" alt="scissors">, Computer chose: <img src="img/${computer}.png" alt="scissors">, <img src="img/${computer}.png" alt="scissors"> beats <img src="img/${player}.png" alt="scissors">, computer WINS!!
    </h3>`
  }  
  
}


  