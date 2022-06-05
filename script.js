/* 
* Function that makes the computer play
* @return {string} random string from rockPaperScissors array
*/
function computerPlay() {
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
            return `You lose! ${computerSelection} beats ${capitalize(playerSelection)}`;
        } else if (
            (playerSelection === 'rock' && computerSelection === 'Scissors') || 
            (playerSelection === 'paper' && computerSelection === 'Rock') || 
            (playerSelection === 'scissors' && computerSelection === 'Paper')) {
            return `You win! ${capitalize(playerSelection)} beats ${computerSelection}`;
        } else {
            return `Tie!`;
        }

}

/* 
* Function that capitalizes the first letter of the player's selection to display in winning message
* @params {string} selection made by the player
* @returns {string} string with the first letter capitalized
*/
function capitalize(selection) {
    let firstChar = selection[0].toUpperCase();
    let remainingString = selection.slice(1);
    return firstChar + remainingString;
}

const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));