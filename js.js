// Game options//

let gameOptions = ["rock","paper","scissors"];


const rock_btn=document.getElementById("rock");
const paper_btn=document.getElementById("paper");
const scissors_btn=document.getElementById("scissors");


rock_btn.addEventListener("click",()=>{
  const computerSelection = getComputerChoice();
  const playerSelection="rock";
  playRound(playerSelection,computerSelection);
  fightWinner(playerScore,computerScore,tieScore);
  
}
);
paper_btn.addEventListener("click",()=>{
  const computerSelection = getComputerChoice();
  const playerSelection="paper";
  playRound(playerSelection,computerSelection);
  fightWinner(playerScore,computerScore,tieScore);
}
);

scissors_btn.addEventListener("click",
()=>{
  const computerSelection = getComputerChoice();
  const playerSelection="scissors";
  playRound(playerSelection,computerSelection);
  fightWinner(playerScore,computerScore,tieScore);
}
);



// Computer's choose an option //

function getComputerChoice (){
  let computerSelection = gameOptions[Math.floor(Math.random()*gameOptions.length)];
  return computerSelection
}

let playerScore=0;
let computerScore=0;
let tieScore=0;
function checkWinner (player,computer){
  if (player==computer){
    tieScore++
    return "tie"
  }else if (player === "rock" && computer==="scissors" ||
  player === "paper" && computer==="rock" || 
  player === "scissors" && computer==="paper"){
    playerScore++
    return "player"
  }else{
    computerScore++
    return "computer"
  }
}  

// fight winner
function fightWinner (pScore,cScore,tScore){
  if(pScore===5){
    const FightW=document.querySelector(".winner").innerHTML=`<h1>you WIN, great job beating the computer</h1><button onclick="resetOutcome()">RESET GAME</button>`;
    resetScore();


  }if(cScore===5){
    const FightW=document.querySelector(".winner").innerHTML=`<h1>you couldn't beat computer, computer WINS. </h1><button onclick="resetOutcome()">RESET GAME</button>`;
    resetScore();
  
  }if(tScore===5){
    const FightW=document.querySelector(".winner").innerHTML=`<h1>It was a hard fight, NO WINNER this time </h1><button onclick="resetOutcome()">RESET GAME</button>`;
    resetScore();

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
    <img src="img/${computer}.png" alt="scissors">, <img src="img/${player}.png" alt="scissors">beats <img src="img/${computer}.png" alt="scissors">, Player WINS!!</h3>`;

  }else {
    const displayInfo = document.querySelector(".display").innerHTML= `<h2>This round:</h2>
    <h3>
    Player chose: <img src="img/${player}.png" alt="scissors">, Computer chose: <img src="img/${computer}.png" alt="scissors">, <img src="img/${computer}.png" alt="scissors"> beats <img src="img/${player}.png" alt="scissors">, computer WINS!!
    </h3>`;
  }  
  
}

function resetScore() {
  playerScore=0;
  computerScore=0;
  tieScore=0;
  };



function resetOutcome(){  
    const FightW=document.querySelector(".winner").innerHTML=``;
  }
  


