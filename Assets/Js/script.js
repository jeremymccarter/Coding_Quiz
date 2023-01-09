var timerElement =  document.getElementById("timer");
var startButton = document.getElementById("start");
var sec = 75;
var questions  = document.querySelector(".questions");
var hideQs = document.getElementById("hideQs");
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
var questionCounter = 0;
let availableQuestions;
var challenge = [{

    Q:"Commonly used data types DO NOT include:",
a1: "Numbers",
a2: "Strings",
a3: "Boolean",
a4: "Alerts",
answer: 3,

},
{

    Q:"The condition in an if/else statement is enclosed with:",
a1:"Parenthesis",
a2:"Curly Brackets",
a3:"Colon",
a4:"Smiley Face",
answer: 0,
},
{

    Q:"Arrays in JavaScript can be used to store:",
a1:"Numbers and Strings",
a2:"Other Arrays",
a3:"Booleans",
a4:"All of the Above",
answer: 3,

},
{

    Q:"String values must be enclosed with ____ when being assigned to variables.",
a1:"Curley Brackets",
a2:"Quotes",
a3:"Commas",
a4:"Parenthesis",
answer: 1,

},
{

    Q:"A very useful tool used during development and debugging for printing content to the debugger is:",
  a1: "for Loops",
  a2: "Terminal/bash",
  a3: "console.log",
  a4: "JavaScript",
  answer: 2
},
];

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5



function timer(){

    var timer = setInterval(function(){
       timerElement.innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

startButton.addEventListener("click", startGame );

function startGame(){
questions.style.display = "block";
timer();
hideQs.style.display = "none";
questionCounter = 0;
score = 0;
availableQuestions = [...questions]
getNewQuestion()
};

getNewQuestion = () => {
if(availableQuestions.lenght === 0 || questionCounter > MAX_QUESTIONS)
localStorage.setItem ("mostRecentScore", score)
return window.location.assign('/end.html')

questionCounter++

}


function wrongAnswer(){

};


function correctAnswer(){



};

function checkAnswer(){




};

challenge.forEach(Q => {

});

