
// Setup event listeners on buttons
const rockButton = document.getElementById("rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);

const playerScoreOutput = document.querySelector("#playerScore");
const computerScoreOutput = document.querySelector("#computerScore");
const tieScoreOutput = document.querySelector("#tieScore");
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

// play game
// check if play again
/*
let playAgain = prompt("Play again? Y or N");
if(playAgain.toLowerCase() != "y" &&
    playAgain.toLowerCase() != "yes") {
    playGame = 1;
}
*/

// runs best of 5 game
function game() {
    console.log(`Score: ${playerScore} player wins, ${computerScore} computer wins`);
    updateScores();

    /*
    if(computerWins == 3) {
        console.log("The computer has won the game!");
        alert("The Computer has won!");
        break;
    }
    else if(playerWins == 3) {
        console.log("The player has won the game!");
        alert("The player has won!");
        break;
    }
    */
}

// get the player choice
/* ****** Done by buttons now 25 Dec 2023
function getPlayerChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    return choice.toLowerCase();
}
*/

// output html scores
function updateScores() {
    let scores = document.getElementsByTagName('span');
    let allScores = [playerScore, computerScore, tieScore];
    for(let i = 0; i < scores.length; i++) {
        scores[i].textContent = allScores[i];
    }
}

// get the computer choice
function getComputerChoice() {
    const choice = Math.floor(1 + (Math.random() * 3));
    switch(choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            break;
    }
}

// play a round and check the winner
function playRound(event) {
    const computer = getComputerChoice();
    const playerObj = event.target;
    const player = playerObj.value

    // r, p, s
    switch(player){
        case "rock":
            if(computer == "rock") {
                tieScore++;
            }
            else if (computer == "scissors") {
                playerScore++;
            }
            else {
                computerScore++;
            }
            break;
        case "paper":
            if(computer == "rock") {
                playerScore++;
            }
            else if (computer == "scissors") {
                computerScore++;
            }
            else {
                tieScore++;
            }
            break;
        case "scissors":
            if(computer == "rock") {
                computerScore++;
            }
            else if (computer == "scissors") {
                tieScore++;
            }
            else {
                playerWin++;
            }
            break;
        default:
            break;
    }
    // basically, when button pressed, play the round, and call game to output it all
    game();
}

