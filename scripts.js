// Future To do (after my 25 Dec 2023 DOM/UI update) is actually handle resetting 
// the game if the player wants to play again

// Setup event listeners on buttons
const rockButton = document.getElementById("rock");
console.log(rockButton);
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
let isPlaying = true;

// If a button is pressed, playRound is called, which then begins the game, and updates
// everything for the UI
function playRound(event) {
    const computer = getComputerChoice();
    const player = event.target.getAttribute('data-value');

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
    notPlaying();
    let gameOverText = document.getElementById("whoWon");
    gameOverText.textContent = `The ${winner} is the winner!`;
    setTimeout(() => {
        let playAnotherRound = prompt("You wish to play again? Y or N");
        if(playAnotherRound == 'y' ||
        playAnotherRound == 'yes') {
            isPlaying == true;
            updateScores();
            gameOverText.textContent = ``;
        }
        else {
            setTimeout(() => {
                alert("Thanks for playing!");
                updateScores();
                isPlaying = false;
            },3000);
        }
    },3000);
    
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

function notPlaying() {
    isPlaying = false;
    computerScore = 0
    playerScore = 0;
    tieScore = 0;
}


