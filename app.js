let playerOneScore = 0;
let playerTwoScore = 0;

function addScore1() {
  playerOneScore += 1;
  saveScore1();
  win();
}


function multiAddScore1() {
  playerOneScore += 3;
  saveScore1();
  win();
}

function multiAddScore2() {
  playerTwoScore += 3;
  saveScore2();
}

function addScore2() {
  playerTwoScore += 1;
  saveScore2();
  win();
}

function reduceScore1() {
  if (playerOneScore > 0) {
    playerOneScore -= 1;
  } else {
    alert("Player One's Score is already 0!");
  }
  saveScore1();
}
function reduceScore2() {
  if (playerTwoScore > 0) {
    playerTwoScore -= 1;
  } else {
    alert("Player Two's Score is already 0!")
  }
  saveScore2();
}

function clearScore1() {
  playerOneScore = 0;
  saveScore1();
}

function clearScore2() {
  playerTwoScore = 0;
  saveScore2();
}

function win() {
  if (playerOneScore >= 21) {
    let card = document.getElementById('card-one')
    card.classList.add('win');
    alert('Winner: Player One!');

  } else if (playerTwoScore >= 21) {
    alert('Winner: Player Two!');
    let card = document.getElementById('card-two')
    card.classList.add('win');

  }
}


function saveScore1() {
  let score = document.getElementById('score1')
  score.innerText = playerOneScore.toString();
}

function saveScore2() {
  let score = document.getElementById('score2')
  score.innerText = playerTwoScore.toString();
}


