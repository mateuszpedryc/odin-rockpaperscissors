//player choose "rock", "paper", or "scissors".
//computer generates randomly one of the three options.
//compare player choice with computer and define winner. Show also what was generated by computer.
//store points for player and computer.
//repeat utill player or computer gets 5 points.
//announce the winner.

//Get player choice:
let getPlayerChoice = prompt('What is your choice?');

//Function to make player input same all the time -> 'Rock', 'Paper', or 'Scissors':
//function playerChoiceCapitalize(playerChoice) {
  //  return playerChoice.toLowerCase();
//}

//Function to generate computer choice:
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerNumber = Math.floor(Math.random() * choices.length);

    let computerChoice = choices[computerNumber];

    return computerChoice;
}

let playerSelection = getPlayerChoice.toLowerCase();
let computerSelection = getComputerChoice();

//Function to play single round:
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a Tie!';
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return 'Computer Wins!';
        }
        else {
            return 'Player Wins!';
        }
    }
    else if (playerSelection = 'paper') {
        if (computerSelection = 'scissors') {
            return 'Computer Wins!';
        }
        else {
            return 'Player Wins!';
        }
    }
    else if (playerSelection = 'scissors') {
        if (computerSelection = 'rock') {
            return 'Computer Wins!';
        }
        else {
            return 'Player Wins!';
        }
    }
}




console.log('You chose ' + playerSelection + ' and computer chose ' + computerSelection);
console.log(playRound(playerSelection,computerSelection));















