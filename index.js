const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const sissors = document.getElementById('sissors');

function user_pick (rock, paper, scissors) {
  rock.addEventListener('click', () => "rock");
  paper.addEventListener('click', () => "paper");
  sissors.addEventListener('click', () => "sissors");
}

user_pick(rock, paper, sissors);
