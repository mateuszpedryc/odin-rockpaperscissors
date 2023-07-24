let playerScore = 0;
let computerScore = 0;


const btnStart = document.querySelector('#btnStart');

btnStart.onclick = startGame;

function startGame() {
    //alert("You started a game");
    //Change game title
    const gameTitle = document.querySelector('#game-title');
    gameTitle.textContent = 'Let\`s play!';

    const title = document.querySelector('.title');
    title.setAttribute('class', 'title-top');

    const content = document.querySelector('.content');
    const button = document.querySelector('.button');

    //Creating elements for the scoreboard
    const score = document.createElement('div');
    score.classList.add('score');

    const playerScoreBox = document.createElement('div');
    const computerScoreBox = document.createElement('div');
    playerScoreBox.classList.add('player-score');
    computerScoreBox.classList.add('computer-score');

    const playerScoreValue = document.createElement('p');
    const computerScoreValue = document.createElement('p');
    const dash = document.createElement('div');
    playerScoreValue.textContent = '0';
    playerScoreValue.setAttribute('id', 'player-score');
    computerScoreValue.textContent = '0';
    computerScoreValue.setAttribute('id', 'computer-score');
    dash.textContent = '-';

    playerScoreBox.appendChild(playerScoreValue);
    computerScoreBox.appendChild(computerScoreValue);

    score.appendChild(playerScoreBox);
    score.appendChild(dash);
    score.appendChild(computerScoreBox);

    content.appendChild(score);
    content.insertBefore(score, button);

    //Create three buttons for player selection
    const buttonsBox = document.createElement('div');
    buttonsBox.classList.add('buttons-box');

    const buttonRock = document.createElement('button');
    const buttonPaper = document.createElement('button');
    const buttonScissors = document.createElement('button');

    buttonRock.classList.add('button-play');
    buttonPaper.classList.add('button-play');
    buttonScissors.classList.add('button-play');

    buttonRock.textContent = 'Rock';
    buttonPaper.textContent = 'Paper';
    buttonScissors.textContent = 'Scissors';



    buttonsBox.appendChild(buttonRock);
    buttonsBox.appendChild(buttonPaper);
    buttonsBox.appendChild(buttonScissors);

    content.appendChild(buttonsBox);
    content.insertBefore(buttonsBox, button);
};










//Function to generate computer choice:
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerNumber = Math.floor(Math.random() * choices.length);

    let computerChoice = choices[computerNumber];

    return computerChoice;
}

//Function to play single round:
function playRound(playerSelection, computerSelection) {
    let result = '';
    
    if (playerSelection === computerSelection) {
        result = 'It\'s a Tie!';
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            result = 'Computer wins!';
        }
        else {
            result = 'You won!';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            result = 'Computer wins!';
        }
        else {
            result = 'You won!';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            result = 'Computer wins!';
        }
        else {
            result = 'You won!';
        }
    }
    return result;
}

//Function to play playRound function 5 times, store scores and display a winner.
/*function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose : Rock, Paper or Scissors').toLowerCase();
        let computerSelection = getComputerChoice();

        let playResult = playRound(playerSelection, computerSelection);

        if (playResult === 'You won!') {
            playerScore++;
    
        }
        else if (playResult === 'Computer wins!') {
            computerScore++;
        }

        console.log("You chose " + playerSelection + '. Computer chose ' + computerSelection + '.');
        console.log(playResult);
        console.log('Player: ' + playerScore + '. Computer: ' + computerScore + '.');

    }
    if (playerScore > computerScore) {
        console.log('Congratulations! You won with computer!');
    }
    else if (playerScore < computerScore) {
        console.log('Better luck next time! You lost!');
    }
    else if (playerScore === computerScore) {
        console.log('Game ended as a tie.')
    }
}
*/

game();















