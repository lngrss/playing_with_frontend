function computerPlay() {
  const arr = ["PAPER", "ROCK", "SCISSORS"];
  return arr[Math.round(Math.random(.9)*10)%3];
}

function playRound(playerSelection) {
  const str = playerSelection.toUpperCase();
  const computerSelection = computerPlay();
  if (computerSelection == str ) {
    return 0; //tie
  }
  else if ((computerSelection == "PAPER" && str == "SCISSORS")
               || (computerSelection == "ROCK" && str == "PAPER")
               || (computerSelection == "SCISSORS" && str == "ROCK")) {
     return 1; //win
  }
  else {
    return 2; //loss
  };
}

function write(num) {
  const output = ["That's a tie. Why don't you try again!",
              "Congratulations! You won.",
              "Oh no, you lost!" ];
  return output[num];
}

function playGameButton() {
  const content = document.querySelector('#content');
  const selections = document.querySelectorAll('button');
  const p = document.createElement('p');
  content.appendChild(p);
  let score = 0;
  selections.forEach((selection) => {
    selection.addEventListener('click', (e) => {
      const round = playRound(selection.id);
      if (round == 1) { score++; }
      alert(write(round));
      p.textContent = "Your current score is: " + score.toString();
    });
  });
}

playGameButton();
