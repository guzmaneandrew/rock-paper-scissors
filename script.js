function computerPlay() {
    let rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
   
    let max = Math.floor(rockPaperScissors.length - 1);
    let random = Math.floor(Math.random() * (max + 1));
    let randomSelection = rockPaperScissors[random];
    return randomSelection;
}

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

/* Capitalizes first letter of the player's selection to display in winning message */
function capitalize(selection) {
    let firstChar = selection[0].toUpperCase();
    let remainingString = selection.slice(1);
    return firstChar + remainingString;
}

const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));