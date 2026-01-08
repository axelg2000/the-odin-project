console.log("TEST")

// generate a random number between 0 and 1
// if number is between 0 and 0,33, rock
// if number is between 0,33 and 0,66, paper
// if number is between 0,66 and 0,99, scissors
// return choice



let humanScore = 0;
let computerScore = 0;
let scoretoWin = 5;
function getComputerChoice(){
    const value = Math.random()
    console.log(value)
    if (value<1/3){
        return "rock"

    } else if(1/3 < value && value <2/3){
        return "paper"

    }else{
        return "scissors"
    }
}   
function getHumanChoice(){
    const value = prompt("play!").toLowerCase();
    return value;
}

function playRound(computerChoice, humanChoice){
    console.log("human plays",humanChoice,"computer plays", computerChoice )
    if (computerChoice == humanChoice){
        return "draw"
    } else if(computerChoice == "scissors" && humanChoice=="rock"){
        humanScore +=1 ;
        return "Human wins";
    } else if(computerChoice == "rock" && humanChoice=="paper"){
        humanScore +=1 ;
        return "Human wins";
    } else if(computerChoice == "paper" && humanChoice=="scissors"){
        humanScore +=1 ;
        return "Human wins";
    }else{
        computerScore+=1;
        return "Computer wins";
    }
}

function playGame(){
    while(humanScore!=scoretoWin && computerScore !=scoretoWin){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice)
        console.log("human score:",humanScore, "computer score:", computerScore)
    }
    return humanScore>=scoretoWin || computerScore>=scoretoWin;


}





console.log(playGame());




// play game in 5 rounds
// create a new variabe : scoreToWin
// playgame starts with a loop while (scoreToWin not reach by anyone)
// playround()
