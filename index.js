const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const sissors = document.getElementById('sissors');

function user_pick (rock, paper, scissors) {
  rock.addEventListener('click', () => "rock");
  paper.addEventListener('click', () => "paper");
  sissors.addEventListener('click', () => "sissors");
}
let array = [1, 2, 3];
const randomValue = array[Math.floor(Math.random() * array.length)];

function computer_pick(_){
    if (_ == 1){
        return "rock"
    } else if (_ == 2 ){
        return "paper"
    } else if (_ == 3){
        return "sissors"
    }
}