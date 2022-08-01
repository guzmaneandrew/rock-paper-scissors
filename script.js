let btnContainer = document.querySelector('.btnContainer');
let results = document.querySelector('.results');

let userSelection;
let result;

let userScore = 0;
let computerScore = 0;

userScoreDisplay = document.querySelector('.userScore');
userScoreDisplay.textContent = userScore;
computerScoreDisplay = document.querySelector('.computerScore');
computerScoreDisplay.textContent = computerScore;

//Buttons and event listeners
let rock = document.createElement('button');
rock.textContent = 'Rock';
rock.addEventListener('click', event => {
    userSelection = event.target.innerText;
    result = playRound(userSelection, getComputerChoice());
    game(result);
});

let paper = document.createElement('button');
paper.textContent = 'Paper';
paper.addEventListener('click', event => {
    userSelection = event.target.innerText;
    result = playRound(userSelection, getComputerChoice());
    game(result);
});

let scissors = document.createElement('button');
scissors.textContent = 'Scissors';
scissors.addEventListener('click', event => {   
    userSelection = event.target.innerText;
    result = playRound(userSelection, getComputerChoice());
    game(result);
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
            results.textContent = `You lose! ${computerSelection} beats ${userSelection}`;
            return -1;
        } else if (
            (userSelection === 'Rock' && computerSelection === 'Scissors') || 
            (userSelection === 'Paper' && computerSelection === 'Rock') || 
            (userSelection === 'Scissors' && computerSelection === 'Paper')) {
            results.textContent = `You win! ${userSelection} beats ${computerSelection}`;
            return 1;
        } else if (
            (userSelection === 'Scissors' && computerSelection === 'Scissors') || 
            (userSelection === 'Rock' && computerSelection === 'Rock') || 
            (userSelection === 'Paper' && computerSelection === 'Paper')) {
            results.textContent = `Tie!`;
            return 0;
        }

}

/* 
* Function that keeps score and reports a winner.
* @params {number} number indicating whether the user earned or lost a point
* @returns {string} string indicating winner of the game
*/
function game(roundResult) {

    if(userScore < 5 && computerScore < 5) {
        if(roundResult === 1) {
            userScore++;
            userScoreDisplay.textContent = userScore;
        } else if(roundResult === -1) {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        }

        console.log(userScore, computerScore);

    }
    
    if(userScore >= 5) {
        results.textContent = 'You won the game!';
        results.style.color = 'green';

    } else if(computerScore >= 5) { 
        results.textContent = 'You lost the game!';
        results.style.color = 'red';
    }
}