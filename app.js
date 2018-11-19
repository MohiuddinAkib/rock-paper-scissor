let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById('user-score'),
  computerScoreSpan = document.getElementById('computer-score'),
  scoreBoardDiv = document.querySelector('.score-board'),
  resultH3 = document.querySelector('.result h3'),
  rockDiv = document.getElementById('r'),
  paperDiv = document.getElementById('p'),
  scissorDiv = document.getElementById('s');
const smallUserWord = '(user)'.fontsize(3).sup();
const smallCompWord = '(com)'.fontsize(3).sup();

document.addEventListener('DOMContentLoaded', main);
// Main function
function main() {
  rockDiv.addEventListener('click', function() {
    game('r');
  });

  paperDiv.addEventListener('click', function() {
    game('p');
  });

  scissorDiv.addEventListener('click', function() {
    game('s');
  });

  // Convert word
  function convertToWord(letter) {
    if (letter === 'r') return 'rock';
    else if (letter === 'p') return 'paper';
    return 'scissors';
  }

  // User wins
  function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    resultH3.innerHTML = `${convertToWord(
      userChoice
    )}${smallUserWord} beats ${convertToWord(
      computerChoice
    )}${smallCompWord}. You win`;
    document
      .getElementById(userChoice)
      .firstElementChild.classList.add('border-success');
    setTimeout(
      () =>
        document
          .getElementById(userChoice)
          .firstElementChild.classList.remove('border-success'),
      1000
    );
  }

  // User loses
  function lose(userChoice, computerChoice) {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    resultH3.innerHTML = `${convertToWord(
      computerChoice
    )}${smallCompWord} beats ${convertToWord(
      userChoice
    )}${smallUserWord}. You lose`;

    document
      .getElementById(userChoice)
      .firstElementChild.classList.add('border-danger');
    setTimeout(
      () =>
        document
          .getElementById(userChoice)
          .firstElementChild.classList.remove('border-danger'),
      1000
    );
  }

  // Match drwan
  function draw(userChoice, computerChoice) {
    resultH3.innerHTML = `${convertToWord(
      computerChoice
    )}${smallCompWord} equals ${convertToWord(
      userChoice
    )}${smallUserWord}. It's a draw`;

    document
      .getElementById(userChoice)
      .firstElementChild.classList.add('border-warning');
    setTimeout(
      () =>
        document
          .getElementById(userChoice)
          .firstElementChild.classList.remove('border-warning'),
      1000
    );
  }

  // Game is going here
  function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
      case 'rs':

      case 'sp':

      case 'pr':
        win(userChoice, computerChoice);
        break;

      case 'rp':

      case 'ps':

      case 'sr':
        lose(userChoice, computerChoice);
        break;

      default:
        draw(userChoice, computerChoice);
    }
  }

  // Get computer's choice
  function getComputerChoice() {
    const choices = ['r', 'p', 's'],
      randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
  }
}
