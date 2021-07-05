//This is the initial game setup

//Create a function that randomizes the computer's selection.
function computerPlay(computerlist) {
    computerchoice = computerlist[Math.floor((Math.random()*computerlist.length))];
    return (computerchoice);

}
computerPlay(["ROCK","PAPER","SCISSORS"])
const computerSelection = computerchoice;
console.log(computerSelection)

//Use onscreen input to have the player choose.
var choice = window.prompt("Choose Rock, Paper, or Scissors!");
var playerSelector = choice.toUpperCase();

    if (playerSelector == "ROCK") {
        alert("You chose " + playerSelector);
    }
    else if (playerSelector == "PAPER") {
        alert("You chose " + playerSelector);   
    }
    else if (playerSelector == "SCISSORS") {
        alert("You chose " + playerSelector);
    }
    else {
        alert("You did not enter Rock, Paper, or Scissors. Please try again.")
    }
console.log(playerSelector)

//Compare both the computer's selection and the player's selection to test who is the winner.
for (var i = 0; i < 5; i++) {
    var computerScore = 0
    var playerScore = 0

    if (computerSelection == "ROCK" && playerSelector == "ROCK") {
        alert("Both players chose ROCK. It's a tie.")
        computerScore = computerScore + 0;
        playerScore = playerScore + 0;
    }
    else if (computerSelection == "PAPER" && playerSelector == "PAPER") {
        alert("Both players chose PAPER. It's a tie.")
        computerScore = computerScore + 0;
        playerScore = playerScore + 0;
    }
    else if (computerSelection == "SCISSORS" && playerSelector == "SCISSORS") {
        alert("Both players chose SCISSORS. It's a tie.")
        computerScore = computerScore + 0;
        playerScore = playerScore + 0;
    }
    else if (computerSelection == "ROCK" && playerSelector == "PAPER") {
        alert("Paper beats rock. Player wins.")
        computerScore = computerScore + 0;
        playerScore = playerScore + 1;
    }
    else if (computerSelection == "ROCK" && playerSelector == "SCISSORS") {
        alert("Rock beats scissors. Computer wins.")
        computerScore = computerScore + 1;
        playerScore = playerScore + 0;
    }
    else if (computerSelection == "PAPER" && playerSelector == "ROCK") {
        alert("Paper beats rock. Computer wins.")
        computerScore = computerScore + 1;
        playerScore = playerScore + 0;
    }
    else if (computerSelection == "PAPER" && playerSelector == "SCISSORS") {
        alert("Scissors beats paper. Player wins.")
        computerScore = computerScore + 0;
        playerScore = playerScore + 1;
    }
    else if (computerSelection == "SCISSORS" && playerSelector == "ROCK") {
        alert("Rock beats scissors. Player wins.")
        computerScore = computerScore + 0;
        playerScore = playerScore + 1;
    }
    else if (computerSelection == "SCISSORS" && playerSelector == "PAPER") {
        alert("Scissors beats paper. Computer wins.")
        computerScore = computerScore + 1;
        playerScore = playerScore + 0;
    }
    else {
        alert("This is an impossible outcome.")
    }
}
console.log(computerScore)
console.log(playerScore)