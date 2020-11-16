let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// generate random number [0, 9]
const generateTarget = () => {

    return (Math.floor( Math.random() * 10 ));
}

// compare which guess is the closest to the target number. 
// human win: true
// computer win: false
const compareGuesses = (user, computer, target) => {

    // tie
    if(user === computer){
        return true;
    }

    const diffUser = Math.abs(user - target);
    const diffComputer = Math.abs(computer - target);

    if(diffUser < diffComputer){
        return true;
    }
    else{
        return false;
    }
}

// increase the user's score after each round. 
const updateScore = (winner) => {
    if(winner === 'human'){
        humanScore++;
    }
    else{
        computerScore++;
    }
}

// update the round number
const advanceRound = () => currentRoundNumber++;


