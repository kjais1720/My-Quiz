var playersName;
const readline = require('readline-sync');
const questions = [
  {
    question:"Where do I live?",
    answer:"Darbhanga"
  },
  {
    question:"What is my favourite music genre?",
    answer:"pop"
  },
  {
    question:"Which is my favourite movie?",
    answer:"Phir Hera Pheri"
  }
]

playersName = readline.question('Who are you?');
playersName = playersName;
console.log(`Hey there ${playersName}! \n Welcome to 'DO YOU KNOW KRITURAJ'.`);
play();



var score;
var answer;
function askQuestion(quesNum){
      answer= readline.question(questions[quesNum].question);
        if (questions[quesNum].answer.toUpperCase() === answer.toUpperCase()){
              score+=1;
              console.log('Correct answer');
        } else{
            console.log("Wrong answer")
        }
        console.log(`Your score = ${score}`);
        console.log('------------------')
}

function play(){
  score=0;
  for (var i=0;i<3;i++){
      askQuestion(i);
  }
  console.log(`Yay! Your score is ${score}.\n Thank you for playing!`);
}

if(readline.keyInYN('Press "y" to play again, "q" to quit.')){
  play();
} else{
  console.log("goodbye!!");
}
  