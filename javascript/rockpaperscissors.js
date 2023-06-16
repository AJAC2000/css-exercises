const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playerChoice() {
    return prompt("Choose your weapon!")
}

function playRound(player, computer) {
    console.log('The computer chose ' + computer)
    if (player == computer) {
        console.log("Its a tie!");
    } else if 
    ((player == 'rock' && computer == 'scissors') ||
    (player == 'scissors' && computer == 'paper') ||
    (player == 'paper' && computer == 'rock'))
     {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}