var playersName;
const rl = require('readline-sync');


var highScores=[{
  name:"Krituraj",
  score:5
  },{
    name:"Satyam",
    score:4
  }];


const questions = [
  {
    question:"Where do I live?",
    answer:"Darbhang"
  },
  {
    question:"What is my favourite music genre?",
    answer:"pop"
  },
  {
    question:"Which is my favourite movie?",
    answer:"Phir Hera Pheri"
  },
  {
    question:"Who is my favourite superhero?",
    answer:"Shaktiman"
  },
  {
    question:"Who is my favourite singer?",
    answer:"Shreya Ghosal"
  }
]

playersName = rl.question('Who are you?');
console.log(`Hey there ${playersName}!\nWelcome to 'DO YOU KNOW KRITURAJ?'.`);
console.log("Game starts now. \n----------------")
play();



var score;
var answer;
function askQuestion(quesNum){
      answer= rl.question(questions[quesNum].question);
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
  for (var i=0;i<questions.length;i++){
      askQuestion(i);
  }
  console.log(`Yay! Your score is ${score}.\n Thank you for playing!`);
}

console.log("The current High scores are:")
for(const k of highScores){
  console.log(k.name+" "+k.score);
}

if(rl.keyInYN('Press "y" to play again, "q" to quit.')){
  play();
} else{
  console.log("goodbye!!");
}
  