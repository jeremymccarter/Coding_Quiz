var timerElement =  document.getElementById("timer");
var startButton = document.getElementById("start");
var sec = 30;
var questions  = document.querySelector(".questions");
var home = document.getElementById("home");
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
var questionCounter = 0;
let availableQuestions;
var questionIndex = 0
var timer
localStorage.setItem("scores","")
var questionArray = [{

    Q:"Commonly used data types DO NOT include:",
a1: "Numbers",
a2: "Strings",
a3: "Boolean",
a4: "Alerts",
answer: "Alerts",

},
{

    Q:"The condition in an if/else statement is enclosed with:",
a1:"Parenthesis",
a2:"Curly Brackets",
a3:"Colon",
a4:"Smiley Face",
answer: "Parenthesis",
},
{

    Q:"Arrays in JavaScript can be used to store:",
a1:"Numbers and Strings",
a2:"Other Arrays",
a3:"Booleans",
a4:"All of the Above",
answer: "All of the Above",

},
{

    Q:"String values must be enclosed with ____ when being assigned to variables.",
a1:"Curley Brackets",
a2:"Quotes",
a3:"Commas",
a4:"Parenthesis",
answer: "Quotes",

},
{

    Q:"A very useful tool used during development and debugging for printing content to the debugger is:",
  a1: "for Loops",
  a2: "Terminal/bash",
  a3: "console.log",
  a4: "JavaScript",
  answer: "console.log"
},
];

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5



function updateTime(){

    timer = setInterval(function(){
       timerElement.innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            //clearInterval(timer);
            endQuiz()
        }
    }, 1000);
}

startButton.addEventListener("click", startGame );

function startGame(){
questions.style.display = "block";
updateTime();
home.style.display = "none";
questionCounter = 0;
score = 0;
sec = 30;
document.getElementById("feedback").innerHTML=""
//availableQuestions = [...questionArray]
getNewQuestion()
};

getNewQuestion = () => {
if(questionCounter >= MAX_QUESTIONS)
endQuiz()
else{
   // questionCounter++;
    //progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    //progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100} %`;
    
    //questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = questionArray[questionCounter]
    document.getElementById("question").innerText = currentQuestion.Q
    
    document.getElementById("a1").textContent = currentQuestion.a1
    document.getElementById("a2").textContent = currentQuestion.a2
    document.getElementById("a3").textContent = currentQuestion.a3
    document.getElementById("a4").textContent = currentQuestion.a4    
}

};


//choices.forEach((choice))



function checkAnswer(){
var answer = this.textContent
var correct = questionArray[questionCounter].answer
if(answer == correct){
score++  
document.getElementById("feedback").innerHTML="Correct!"
}
else {
sec-=5
document.getElementById("feedback").innerHTML="Incorrect!"    
}
questionCounter++
getNewQuestion()
};

//challenge.forEach(Q => {

//});

function endQuiz(){
clearInterval(timer)
document.getElementById("finalScore").innerHTML="Your Score: " +score +"/" + MAX_QUESTIONS
document.getElementById("done").style.display="block"
document.querySelector(".questions").style.display="none"
document.getElementById("initials").value=""
}

function submit(){
var initials = document.getElementById("initials").value
var records = localStorage.getItem("scores")+"<br>"+ initials+" "+score
localStorage.setItem("scores", records)
document.getElementById("scores").innerHTML=records
document.getElementById("scoreboard").style.display="block"
document.querySelector("#done").style.display="none"


}
function restart(){
    document.getElementById("home").style.display="block"
    document.querySelector("#scoreboard").style.display="none"
//startGame()
}

function clear(){
    localStorage.setItem("scores", "")
    document.getElementById("scores").innerHTML=""

}
function highscores(){
    document.getElementById("scoreboard").style.display="block"
    document.querySelector("#home").style.display="none"
    document.querySelector(".questions").style.display="none"
    document.querySelector("#done").style.display="none"
clearInterval(timer)
}
document.getElementById("a1").addEventListener("click",checkAnswer)
document.getElementById("a2").addEventListener("click",checkAnswer)
document.getElementById("a3").addEventListener("click",checkAnswer)
document.getElementById("a4").addEventListener("click",checkAnswer)
document.getElementById("submit").addEventListener("click",submit)
document.getElementById("restart").addEventListener("click",restart)
document.getElementById("clear").addEventListener("click",clear)
document.getElementById("highscore-btn").addEventListener("click",highscores)
