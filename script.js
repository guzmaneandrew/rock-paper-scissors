let btnContainer = document.querySelector('.btnContainer');
let results = document.querySelector('.results');

let userSelection;
let result;

//Buttons and event listeners
let rock = document.createElement('button');
rock.textContent = 'Rock';
rock.addEventListener('click', event => {
    userSelection = event.target.innerText;
    result = playRound(userSelection, getComputerChoice());
});

let paper = document.createElement('button');
paper.textContent = 'Paper';
paper.addEventListener('click', event => {
    userSelection = event.target.innerText;
    result = playRound(userSelection, getComputerChoice());
});

let scissors = document.createElement('button');
scissors.textContent = 'Scissors';
scissors.addEventListener('click', event => {   
    userSelection = event.target.innerText;
    result = playRound(userSelection, getComputerChoice());
});

//Add buttons to the DOM
btnContainer.appendChild(rock);
btnContainer.appendChild(paper);
btnContainer.appendChild(scissors);

/* 
* Function that makes the computer play
* @return {string} random string from rockPaperScissors array
*/
function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];
   
    let max = Math.floor(options.length - 1);
    let random = Math.floor(Math.random() * (max + 1));
    let randomSelection = options[random];
    return randomSelection;
}

/* 
* Function to play a single round of Rock Paper Scissors
* @param {string} playerSelection selection made by the player
* @param {string} computerSelection value returned by computerPlay() function
* @return {number} number indicating whether user earned/lost/tied in a round
*/
function playRound(userSelection, computerSelection) {    
    if ((userSelection === 'Scissors' && computerSelection === 'Rock') || 
        (userSelection === 'Rock' && computerSelection === 'Paper') || 
        (userSelection === 'Paper' && computerSelection === 'Scissors')) {
            console.log(`YOU LOSE! C: ${computerSelection} | You: ${userSelection}`);
            results.textContent = `You lose! ${computerSelection} beats ${userSelection}`;
            return -1;
        } else if (
            (userSelection === 'Rock' && computerSelection === 'Scissors') || 
            (userSelection === 'Paper' && computerSelection === 'Rock') || 
            (userSelection === 'Scissors' && computerSelection === 'Paper')) {
            console.log(`YOU WIN! C: ${computerSelection} | You: ${userSelection}`);
            results.textContent = `You win! ${userSelection} beats ${computerSelection}`;
            return 1;
        } else if (
            (userSelection === 'Scissors' && computerSelection === 'Scissors') || 
            (userSelection === 'Rock' && computerSelection === 'Rock') || 
            (userSelection === 'Paper' && computerSelection === 'Paper')) {
            console.log(`TIE! C: ${computerSelection} | You: ${userSelection}`);
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
    let userScore = 0;
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