function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice === 0) {
        return("rock")
    } else if (choice === 1) {
        return("paper")
    } else if (choice === 2) {
        return("scissors")
    }
}

function getHumanChoice() {
    let humanchoice =prompt("choose between rock, paper and scissors")
    return(humanchoice)
}
console.log(getHumanChoice())

let humanscore = 0;
let comuterscore = 0;

function playRound(humanchoice, computerchoice) {
    if (humanchoice === rock && computerchoice === paper) {
        return("You lose, paper beats rock")
    } else if (humanchoice === paper && computerchoice === scissors) {
        return("You lose, paper beats scissors")
    } else if (humanchoice === scissors && computerchoice === rock) {
        return("You lose, rock beats scissors")
    } else if (humanchoice === computerchoice) {
        return("It's a draw")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)