//dom elements

const computerScore = document.querySelector('.computer__score');
const playerScore = document.querySelector('.player__score');
const tieCount = document.querySelector('.tie__count');
const resetButton = document.querySelector('.reset-button');

const score = {
  wins: 0,
  losses: 0,
  ties: 0
};

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'Bot wins';
    } else if (computerMove === 'scissors') {
      result = 'You win';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissors') {
      result = 'Bot wins';
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'Bot wins';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else if (computerMove === 'scissors') {
      result = 'Tie';
    }
  }

  if (result === 'You win') {
    score.wins++;
    playerScore.innerHTML = score.wins;
  } else if (result === 'Bot wins') {
    score.losses++;
    computerScore.innerHTML = score.losses;
  } else if (result === 'Tie') {
    score.ties++;
    tieCount.innerHTML = score.ties;
  }

}

function pickComputerMove() {
  let computerMove = '';

  const randomNumber = Math.random();

  if (randomNumber > 0 && randomNumber <= 1/3 ) {
    computerMove = 'rock';
  } else if (randomNumber > 1/3 && randomNumber <= 2/3 ) {
    computerMove = 'paper';
  } else if (randomNumber > 2/3 && randomNumber <= 1) {
    computerMove = 'scissors';
  }
  return computerMove;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  playerScore.innerHTML = score.wins;
  computerScore.innerHTML = score.losses;
  tieCount.innerHTML = score.ties;
}

resetButton.addEventListener('click', resetScore);