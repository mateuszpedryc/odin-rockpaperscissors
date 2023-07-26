let playerScore = 0;
let computerScore = 0;
const btnStart = document.querySelector('#btnStart');
const buttons = document.getElementsByClassName('button-play').innerHTML;

btnStart.onclick = startGame;

document.addEventListener('click', gameSelectionListener);

function gameSelectionListener(event) {
    let element = event.target;
    console.log(event.target);

    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';

    if (element.id === ('rock')) {
        playRound(rock);
    }
    else if (element.id === ('paper')) {
        playRound(paper);
    }
    else if (element.id === ('scissors')) {
        playRound(scissors);
    }
}

//Function to create new view for the game:
function startGame() {

    //Change game title
    const gameTitle = document.querySelector('#game-title');
    gameTitle.textContent = 'Let\`s play!';

    const title = document.querySelector('.title');
    title.setAttribute('class', 'title-top');

    const content = document.querySelector('.content');
    const button = document.querySelector('.button');
    const roundResult = document.querySelector('.round-result');
    
    button.style.visibility = 'hidden';

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
    content.insertBefore(score, roundResult);

    //Create three buttons for player selection
    const buttonsBox = document.createElement('div');
    buttonsBox.classList.add('buttons-box');

    const buttonRock = document.createElement('button');
    const buttonPaper = document.createElement('button');
    const buttonScissors = document.createElement('button');

    buttonRock.classList.add('button-play');
    buttonRock.setAttribute('id', 'rock');
    buttonPaper.classList.add('button-play');
    buttonPaper.setAttribute('id', 'paper');
    buttonScissors.classList.add('button-play');
    buttonScissors.setAttribute('id', 'scissors');

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
function playRound(playerSelection) {
    let result = '';
    let computerSelection = getComputerChoice();
    let playerSelectionString = String(playerSelection);


    if (playerSelectionString === computerSelection) {
        result = 'You choose ' + playerSelectionString + ' and Computer choose ' + computerSelection + '. It\'s a Tie!';
        roundResultText(result);
    }
    else if (playerSelectionString === 'rock') {
        if (computerSelection === 'paper') {
            result = 'You choose rock. Computer choose paper. Point for Computer!';
            roundResultText(result);
            computerScore++;
            const currentComputerScore = document.getElementById('computer-score').innerHTML = computerScore;
            game(playerScore, computerScore);
        }
        else {
            result = 'You choose rock. Computer choose scissors. Point for you!';
            roundResultText(result);
            playerScore++;
            const currentPlayerScore = document.getElementById('player-score').innerHTML = playerScore;
            game(playerScore, computerScore);
        }
    }
    else if (playerSelectionString === 'paper') {
        if (computerSelection === 'scissors') {
            result = 'You choose paper. Computer choose scissors. Point for Computer!';
            roundResultText(result);
            computerScore++;
            const currentComputerScore = document.getElementById('computer-score').innerHTML = computerScore;
            game(playerScore, computerScore);
        }
        else {
            result = 'You choose paper. Computer choose rock. Point for you!';
            roundResultText(result);
            playerScore++;
            const currentPlayerScore = document.getElementById('player-score').innerHTML = playerScore;
            game(playerScore, computerScore);
        }
    }
    else if (playerSelectionString === 'scissors') {
        if (computerSelection === 'rock') {
            result = 'You choose scissors. Computer choose rock. Point for Computer!';
            roundResultText(result);
            computerScore++;
            const currentComputerScore = document.getElementById('computer-score').innerHTML = computerScore;
            game(playerScore, computerScore);
        }
        else {
            result = 'You choose scissors. Computer choose paper. Point for you!';
            roundResultText(result);
            playerScore++;
            const currentPlayerScore = document.getElementById('player-score').innerHTML = playerScore;
            game(playerScore, computerScore);
        }
    }
}

//Function to play playRound until score is 5 for player or computer:
function game(playerSelection) {

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            console.log('you win');
            roundResultText('You won! Congratulations!');
        }
        else if (computerScore > playerScore) {
            console.log('you lost');
            roundResultText('You lost... I\'m dissapointed');
        }

        HideElements();
    }
}

//Function to show text of round result:
function roundResultText (result) {
    console.log(result);

    const roundResult = document.querySelector('.round-result');
    roundResult.textContent = result;

}

//Function to hide elements after score reach 5 points and show Reset button:
function HideElements() {

    const button = document.querySelector('.button');
    button.style.visibility = 'visible';
    btnStart.textContent = 'Reset';
    
    const buttonsBox = document.querySelector('.buttons-box');
    buttonsBox.style.visibility = 'hidden';

    btnStart.onclick = ResetGame;
}

//Function to reset game to 0:
function ResetGame() {

    playerScore = 0;
    computerScore = 0;

    const playerScoreValue = document.querySelector('#player-score')
    const computerScoreValue = document.querySelector('#computer-score')
    playerScoreValue.textContent = '0';
    computerScoreValue.textContent = '0';

    const buttonsBox = document.querySelector('.buttons-box');
    buttonsBox.style.visibility = 'visible';

    const button = document.querySelector('.button');
    button.style.visibility = 'hidden';

    const roundResult = document.querySelector('.round-result');
    roundResult.textContent = '';
}










