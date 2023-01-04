var timerElement =  document.getElementById("timer");
var startButton = document.getElementById("start");
var questions  = document.querySelector(".questions");
var hideQs = document.getElementById("hideQs")
var challenge = [{
    
    Q:"What is an ordered list of chars?",
    A:[
"A1","A2","A3","A4"
    ]

},
{
    
    Q:"What is an ordered list of chars?",
    A:[
"A1","A2","A3","A4"
    ]

},
{
    
    Q:"What is an ordered list of chars?",
    A:[
"A1","A2","A3","A4"
    ]

},
{
    
    Q:"What is an ordered list of chars?",
    A:[
"A1","A2","A3","A4"
    ]

},
{
    
    Q:"What is an ordered list of chars?",
    A:[
"A1","A2","A3","A4"
    ]

},
{
    
    Q:"What is an ordered list of chars?",
    A:[
"A1","A2","A3","A4"
    ]

},

]
function timer(time){
    var sec = time;
    var timer = setInterval(function(){
       timerElement.innerHTML='00:'+sec;
        sec--;
        if (sec < 0) 
        {gameOver();
            clearInterval(timer);
        }
    }, 1000);
   
}

startButton.addEventListener("click", startGame );

function startGame(){
questions.style.display = "block";
timer();
hideQs.style.display = "none";

}


function wrongAnswer(){

}


function correctAnswer(){



}

function checkAnswer(){




}

challenge.forEach(Q => {
    
});