console.log("--------WELCOME TO Marvel-QUIZ-----");
console.log("\n");
console.log("checkout How well you know marvel Universe ?");
console.log("if correct +10 else -5")
console.log("\n")
console.log("Lets start")



var readlineSync = require('readline-sync');

var highScore = [
  {
    name: "Ankur",
    score: 60,
  },
  {
    name: "Saurabh",
    score: 55,
  },
]

var userName = readlineSync.question('May I have your name? ');
console.log('Hey😊 ' + userName + '!');
console.log("\n")
var score = 0;


var questionOne = "Which was the first film in the marvel cinematic universe? ";
var answerOne ="iron man";

var useranswer = readlineSync.question(questionOne);
console.log("you entered " + useranswer);
if (useranswer===answerOne) {
  console.log("you are right😊!");
  score = score +10;
  console.log("score is: " + score)
} else {
   console.log("you are wrong☹️");
   console.log("it's iron man")
  score = score -5;
  console.log("score is: " + score)
}

console.log("-------------------")

var questiontwo = "Who made caption america shield? ";
var answertwo ="howard stark";

var useranswer = readlineSync.question(questiontwo);
console.log("you entered " + useranswer);
if (useranswer===answertwo) {
  console.log("you are right😊!");
  score = score +10;
  console.log("score is: " + score)
} else {
   console.log("you are wrong☹️");
   console.log("it's howard stark")
  score = score -5;
  console.log("score is: " + score)
}

console.log("-------------------");


var questionthree = "iron man first AI assitance name? ";
var answerthree ="jarvis";
var useranswer = readlineSync.question(questionthree);
console.log("you entered " + useranswer);
if (useranswer===answerthree) {
  console.log("you are right😊!");
  score = score +10;
  console.log("score is: " + score)
} else {
   console.log("you are e wrong☹️");
   console.log("it's jarvis")
  score = score -5;
  console.log("score is: " + score)
}

console.log("-------------------")

var questionfour = "Avenger 1st movie villan? ";
var answerfour ="loki";
var useranswer = readlineSync.question(questionfour);
console.log("you entered " + useranswer);
if (useranswer===answerfour) {
  console.log("you are right😊!");
  score = score +10;
  console.log("score is: " + score)
} else {
   console.log("you are e wrong☹️");
   console.log("it's loki")
  score = score -5;
  console.log("score is: " + score)
}

console.log("-------------------")

var questionfive = "thor new wapon name? ";
var answerfive ="stormbreaker";
var useranswer = readlineSync.question(questionfive);
console.log("you entered " + useranswer);
if (useranswer===answerfive) {
  console.log("you are right😊!");
  score = score +10;
  console.log("score is: " + score)
} else {
   console.log("you are e wrong☹️");
   console.log("it's stormbreaker")
  score = score -5;
  console.log("score is: " + score)
}

console.log("-------------------")

var questionsix = "Caption America sheild made up of? ";
var answersix ="vibranium";
var useranswer = readlineSync.question(questionsix);
console.log("you entered " + useranswer);
if (useranswer===answersix) {
  console.log("you are right😊!");
  score = score +10;
  console.log("score is: " + score)
} else {
   console.log("you are e wrong☹️");
   console.log("it's vibranium")
  score = score -5;
  console.log("score is: " + score)
}

console.log("-------------------")

var questionseven = "Name of founder of marvel comics? ";
var answerseven ="stan lee";
var useranswer = readlineSync.question(questionseven);
console.log("you entered " + useranswer);
if (useranswer===answerseven) {
  console.log("you are right😊!");
  score = score +10;
  console.log("score is: " + score)
} else {
   console.log("you are e wrong☹️");
   console.log("it's stan lee")
  score = score -5;
  console.log("score is: " + score)
}
console.log("HURRAY! You SCORED: ", score);
console.log("\n")

highScore.map(score => console.log(score.name, ":", score.score))