
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

// If a button is pressed, playRound is called, which then begins the game, and updates
// everything for the UI
function playRound(event) {
    const computer = getComputerChoice();
    const playerObj = event.target;
    const player = playerObj.value

    // Handle who actually won. Then update score
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
                playerScore++;
            }
            break;
        default:
            break;
    }
    // Now run game(), which updates scores and calls gameOver() if one person has a score
    // over 5. This used to house the main game, but not so with the UI Dom changes.
    game();
}
// runs best of 5 game
function game() {
    updateScores();
    if(computerScore == 5){
        gameOver("Computer");
    }
    else if(playerScore == 5) {
        gameOver("Player");
    }

}

// if computer or player has a score of 5, output winner
function gameOver(winner) {
    let gameOverText = document.getElementById("whoWon");
    gameOverText.textContent = `The ${winner} is the winner!`;
}

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



