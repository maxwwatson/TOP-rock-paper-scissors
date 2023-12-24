/*
Description: A game for The Odin Project, playing rock paper scissors
against the computer

Pseudo Code: 
**played from the console

function getComputerChoice 
    returns R/P/S
function playRound(playerSelection, computerSelection)
    return winner result
    *case insensitive
    *account for ties with rematch
function game()      // best of 5 game that keeps score and reports winner or loser
    check playGame = true(while loop)
    let playerWins = 0
    let computerWins = 0
    for(let i = 0; i < 5; -++)
        get player input
        get computer input
        calc winner 
        if playerWin == 3
            player wins!
            play again?
            break
        else if computer win == 3
            computer wins! 
            play again?
            break
        play agains
    after 

    playerwins = 0;
    computerWins = 0;
*/

let playGame = 0
// if we are playing  game (start we playing) play a round of best of 5
while(playGame == 0)
{
    // play game
    game();
    // check if play again
    let playAgain = prompt("Play again? Y or N");
    if(playAgain.toLowerCase != "y" &&
       playAgain.toLowerCase != "yes") {
        break;
    }
}

// runs best of 5 game
function game() {
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++)
    {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        const winner = playRound(playerChoice, computerChoice);
        
        // check winner adjust score
        if (winner == "computer"){
            computerWins++;
            console.log("The computer won this round!");
        }
        else if (winner == "player"){
            playerWins++;
            console.log("The player has won this round!");
        }
        else {
            i--;
            console.log("It's a tie! Another round will be ran!");
        }
        // output score
        console.log(`Score: ${playerWins} player wins, ${computerWins} computer wins`);

        // see if game is over, if so break for loop
        if(computerWins == 3) {
            console.log("The computer has won the game!");
            break;
        }
        else if(playerWins == 3) {
            console.log("The player has won the game!");
            break;
        }

    }// end for game loop
}

// get the player choice
function getPlayerChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    return choice.toLowerCase();
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
function playRound(player, computer) {
    // r, p, s
    switch(player){
        case "rock":
            if(computer == "rock") {
                return "tie";
            }
        case "paper":
            //
        case "scissors":
        default:
            break;
    }
}

