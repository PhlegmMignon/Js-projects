function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    
    if (computerSelection == 0) {
        computerSelection = 'rock';
    }
    else if (computerSelection == 1) {
        computerSelection = 'paper';
    }
    else if (computerSelection == 2) {
        computerSelection = 'scissors';
    }

    return computerSelection;
}

// function playerPlay () {


//     let playerSelection = prompt('Select rock, paper, or scissors')
//     playerSelection = playerSelection.toLowerCase();

//     while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
//         playerSelection = prompt('Select rock, paper, or scissors')
//         playerSelection = playerSelection.toLowerCase();
//     }

//     return playerSelection;
// }


function playRound (playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            console.log('Draw')
        }
        else if (computerSelection == 'paper') {
            console.log('Lose. Paper > Rock')
            return 0;
        }
        else if (computerSelection == 'scissors') {
            console.log('Win. Rock > scissors')
            return 1;
        }
    } 

    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log('Win. paper > rock')
            return 1;
        }
        else if (computerSelection == 'paper') {
            console.log('Draw')
        }
        else if (computerSelection == 'scissors') {
            console.log('Lose. scissors > paper')
            return 0;
        }
    } 

    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            console.log('Lose. Rock > scissors')
            return 0;
        }
        else if (computerSelection == 'paper') {
            console.log('Win. scissors > paper')
            return 1;
        }
        else if (computerSelection == 'scissors') {
            console.log('Draw')
        }
    } 
}




let computer = 0;
let player = 0;
let winner;

let playfx = (select) => {
    winner = playRound(select, computerPlay());
    if (winner == 1) {
        player++;
    }
    else if (winner == 0) {
        computer++;
    }
    if (player == 5 || computer == 5) {
        if (computer > player) {
            alert('Computer win', computer+'\-'+ player)
        }
        else if (player > computer) {
            alert('Player win', player + "\-" + computer)
        }
        computer = player = 0;
    }
}


let rockbtn = document.querySelector('.rockbtn').addEventListener
('click', () => playfx('rock'));

let paperbtn = document.querySelector('.paperbtn').addEventListener
('click', () => playfx('paper'))

let scissorsbtn = document.querySelector('.scissorsbtn').addEventListener
('click',  () => playfx('scissors'));
    