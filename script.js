let playerScore = 0;
let computerScore = 0;


const btnStart = document.querySelector('#btnStart');

btnStart.onclick = startGame;

function startGame() {
    alert("You started a game");
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















