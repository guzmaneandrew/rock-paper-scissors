let btnContainer = document.querySelector('.btnContainer');
let results = document.querySelector('.results');

//Buttons for each selection
let rock = document.createElement('button');
let paper = document.createElement('button');
let scissors = document.createElement('button');

//Modify buttons
rock.textContent = 'Rock';
paper.textContent = 'Paper';
scissors.textContent = 'Scissors';

//Add buttons to the DOM
btnContainer.appendChild(rock);
btnContainer.appendChild(paper);
btnContainer.appendChild(scissors);

let userSelection;
let result;

//Button click event listeners
rock.addEventListener('click', event => {
    userSelection = event.target.innerText;
    result = playRound(userSelection, getComputerChoice());
});

paper.addEventListener('click', event => {
    userSelection = event.target.innerText;
    result = playRound(userSelection, getComputerChoice());
});

scissors.addEventListener('click', event => {   
    userSelection = event.target.innerText;
    result = playRound(userSelection, getComputerChoice());
});

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
* @return {number} number indicating whether user earned/lost/tied in a round
*/
function playRound(playerSelection, computerSelection) {    
    if ((playerSelection === 'Scissors' && computerSelection === 'Rock') || 
        (playerSelection === 'Rock' && computerSelection === 'Paper') || 
        (playerSelection === 'Paper' && computerSelection === 'Scissors')) {
            console.log(`YOU LOSE! Computer: ${computerSelection} | You: ${playerSelection}`);
            results.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            return -1;
        } else if (
            (playerSelection === 'Rock' && computerSelection === 'Scissors') || 
            (playerSelection === 'Paper' && computerSelection === 'Rock') || 
            (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
            console.log(`YOU WIN! Computer: ${computerSelection} | You: ${playerSelection}`);
            results.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            return 1;
        } else if (
            (playerSelection === 'Scissors' && computerSelection === 'Scissors') || 
            (playerSelection === 'Rock' && computerSelection === 'Rock') || 
            (playerSelection === 'Paper' && computerSelection === 'Paper')) {
            console.log(`TIE! Computer: ${computerSelection} | You: ${playerSelection}`);
            results.textContent = `Tie!`;
            return 0;
        }

}

/* 
* Function that plays a 5 round game, keeps score, and reports a winner at the end.
* @params none
* @returns {string} string indicating winner of the game
*/
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    // for(let i = 0; i < 5; i++) {
    //     let computerSelection = getComputerChoice();
    //     let result = playRound(userSelection, computerSelection);

    //     if(result === 1) {
    //         userScore++;
    //     } else if(result === -1) {
    //         computerScore++;
    //     }
    // }
    
    // if(userScore > computerScore) {
    //     return `You won the game!`;
    // } else if (userScore < computerScore) {
    //     return `You lost the game!`;
    // } else {
    //     return `No winners, it's a tie!`;
    // }
}

 game();