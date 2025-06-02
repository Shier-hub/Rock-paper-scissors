function getComputerChoice() {
    let computerchoice = Math.floor(Math.random()*3);
    if (computerchoice === 0) {
        return("rock")
    } else if (computerchoice === 1) {
        return("paper")
    } else {
        return("scissors")
    }
}
// console.log(getComputerChoice())

function getHumanChoice() {
    let humanchoice =prompt("choose between rock, paper and scissors")
    humanchoice = humanchoice.toLowerCase()
    if (humanchoice === "rock") {
        return("rock")
    } else if (humanchoice === "scissors") {
        return("scissors")
    } else if (humanchoice === "paper") {
        return("paper")
    } else {
        return("invalid option")
    }
}
// console.log(getHumanChoice())

let humanscore = 0;
let computerscore = 0;

function playRound() {
    const humanchoice = getHumanChoice();
    const computerchoice = getComputerChoice();
    if (humanchoice == "invalid option") {
        return "invalid option"
    }
    if (humanchoice === "rock" && computerchoice === "paper") {
        computerscore += 1
        return("You lose, paper beats rock")
    } else if (humanchoice === "paper" && computerchoice === "scissors") {
        computerscore += 1
        return("You lose, paper beats scissors")
    } else if (humanchoice === "scissors" && computerchoice === "rock") {
        computerscore += 1
        return("You lose, rock beats scissors")
    } else if (humanchoice === "rock" && computerchoice === "scissors") {
        humanscore += 1 // humanscore = humanscore + 1
        return("You win")
    } else if (humanchoice === "paper" && computerchoice === "rock") {
        humanscore += 1
        return("You win")
    } else if (humanchoice ==="scissors" && computerchoice === "paper") {
        humanscore += 1
        return("You win")
    } else if (humanchoice === computerchoice) {
        // console.log("this is called")
        return("It's a draw")
    }
    else {
        return "something wrong has happened"
    }
}

function playGame() {
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(humanscore,computerscore)
}

playGame()