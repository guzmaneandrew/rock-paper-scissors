/* 
* Function that makes the computer play
* @return {string} random string from rockPaperScissors array
*/
function getComputerChoice() {
    let rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
   
    let max = Math.floor(rockPaperScissors.length - 1);
    let random = Math.floor(Math.random() * (max + 1));
    let randomSelection = rockPaperScissors[random];
    return randomSelection;
}

/* 
* Function to play a single round of Rock Paper Scissors
* @param {string} playerSelection selection made by the player
* @param {string} computerSelection value returned by computerPlay() function
* @return {string} string that declares the winner of the round
*/
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if ((playerSelection === 'scissors' && computerSelection === 'Rock') || 
        (playerSelection === 'rock' && computerSelection === 'Paper') || 
        (playerSelection === 'paper' && computerSelection === 'Scissors')) {
            //return `You lose! ${computerSelection} beats ${capitalize(playerSelection)}`;
            return -1;
        } else if (
            (playerSelection === 'rock' && computerSelection === 'Scissors') || 
            (playerSelection === 'paper' && computerSelection === 'Rock') || 
            (playerSelection === 'scissors' && computerSelection === 'Paper')) {
            //return `You win! ${capitalize(playerSelection)} beats ${computerSelection}`;
            return 1;
        } else if (
            (playerSelection === 'scissors' && computerSelection === 'Scissors') || 
            (playerSelection === 'rock' && computerSelection === 'Rock') || 
            (playerSelection === 'paper' && computerSelection === 'Paper')) {
            //return `Tie!`;
            return 0;
        }

}

/* 
* Function that plays a 5 round game, keeps score, and reports a winner at the end.
* @params none
* @returns {string} string indicating winner of the game
*/
function game() {
    let userScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        let userSelection = prompt("Rock, paper, or scissors?");
        let computerSelection = getComputerChoice();
        let result = playRound(userSelection, computerSelection);

        if(result === 1) {
            userScore++;
        } else if(result === -1) {
            computerScore++;
        }
    }
    
    if(userScore > computerScore) {
        return `You won the game!`;
    } else if (userScore < computerScore) {
        return `You lost the game!`;
    } else {
        return `No winners, it's a tie!`;
    }
}

/* 
* Function that capitalizes the first letter of the player's selection to display in winning message
* @params {string} selection made by the player
* @returns {string} string with the first letter capitalized
*/
function capitalize(selection) {
    let firstChar = selection[0].toUpperCase();
    let remainingString = selection.slice(1).toLowerCase();
    return firstChar + remainingString;
}

game();