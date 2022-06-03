function computerPlay() {
    let rockPaperScissors = ['rock', 'paper', 'scissors']
   
    let max = Math.floor(rockPaperScissors.length - 1)
    let random = Math.floor(Math.random() * (max + 1))
    let randomSelection = rockPaperScissors[random]
    return randomSelection
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    
    if ((playerSelection === 'scissors' && computerSelection === 'rock') || 
        (playerSelection === 'rock' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'scissors')) {
            return `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
        } else if (
            (playerSelection === 'rock' && computerSelection === 'scissors') || 
            (playerSelection === 'paper' && computerSelection === 'rock') || 
            (playerSelection === 'scissors' && computerSelection === 'paper')) {
            return `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
        } else if (playerSelection === computerSelection) {
            return `Tie!`
        }

}

function capitalize(selection) {
    let firstChar = selection[0].toUpperCase()
    let remainingString = selection.slice(1)
    return firstChar + remainingString
}

const playerSelection = "rock"
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))