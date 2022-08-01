let container = document.querySelector('.container');
let btnContainer = document.querySelector('.btnContainer');
let results = document.querySelector('.results');
let winningAnnouncement = document.querySelector('.winner');

let userScore = 0;
let computerScore = 0;

userScoreDisplay = document.querySelector('.userScore');
userScoreDisplay.textContent = userScore;
computerScoreDisplay = document.querySelector('.computerScore');
computerScoreDisplay.textContent = computerScore;

let rock = document.createElement('button');
rock.textContent = 'Rock';
btnContainer.appendChild(rock);

let paper = document.createElement('button');
paper.textContent = 'Paper';
btnContainer.appendChild(paper);

let scissors = document.createElement('button');
scissors.textContent = 'Scissors';
btnContainer.appendChild(scissors);

let btns = document.querySelectorAll('button');

//Button event listeners
btns.forEach(btn => {
    btn.addEventListener('click', listener);
});

let userSelection;
let result;

function listener() {
    userSelection = event.target.innerText;
    result = playRound(userSelection, getComputerChoice());
    game(result);
}

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
            results.textContent = `You lost this round! ${computerSelection} beats ${userSelection}`;
            return -1;
        } else if (
            (userSelection === 'Rock' && computerSelection === 'Scissors') || 
            (userSelection === 'Paper' && computerSelection === 'Rock') || 
            (userSelection === 'Scissors' && computerSelection === 'Paper')) {
            results.textContent = `You won this round! ${userSelection} beats ${computerSelection}`;
            return 1;
        } else if (
            (userSelection === 'Scissors' && computerSelection === 'Scissors') || 
            (userSelection === 'Rock' && computerSelection === 'Rock') || 
            (userSelection === 'Paper' && computerSelection === 'Paper')) {
            results.textContent = `This round is a tie!`;
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

    }
    
    if(userScore >= 5) {
        annouceWinner('You won!', 'green');
        
    } else if(computerScore >= 5) { 
        annouceWinner('Computer won!', 'red')
    }

}

function annouceWinner(string, color) {
    //Display results for the last round of the game for 2 seconds
    setTimeout(() => {
        results.textContent = '';
    }, 2000);

    winningAnnouncement.textContent = string;
    winningAnnouncement.style.color = color;
    btns.forEach(btn => {
        btn.removeEventListener('click', listener)
    });

    let newGameBtn = document.createElement('button');
    newGameBtn.className = 'newGameBtn'
    newGameBtn.textContent = 'New Game';
    container.appendChild(newGameBtn);
    newGameBtn.addEventListener('click', () => {
        location.reload();
    });

}