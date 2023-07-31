//importing
import readlinesync from 'readline-sync';
// greetings 
console.log("Greetings! you have started the quiz on Goku!");
var uName = readlinesync.question("Enter your name to proceed: ");
var score = 0;

//questions
var questions = [{
    question: "1. What anime is Goku a part of (The first one)? ",
    answer: "dragon ball"
}, {
    question: "2. Which is Goku's first trabsformation? ",
    answer: "ozaru"
},{
    question: "3. What is Goku's race? ",
    answer: "saiyan"
}, {
    question: "4. Which Transformation did goku achieve against freeza on planet namek? ",
    answer: "super saiyan"  
}, {
    question: "What is the name of Goku's first son? ",
    answer: "gohan"
}, {
    question: "Who is his first daughter in law? ",
    answer: "videl"
}];

//function for commencing quiz
function play(question, answer) {
    var userAns = readlinesync.question("Your question is: " + question);
    if (userAns == answer) {
      console.log("You are correct!");
      score = score + 1;
    } else {
      console.log("Oops, you got this wrong :(");
      console.log("The correct answer is " + answer)
    }
    console.log("Your Score is: " + score);
  }
for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
}
console.log("Your final score is: " + score);
if (score<2) {
    console.log("You could've done better")
} else {
    console.log("Good Work")
}