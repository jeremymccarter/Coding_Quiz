var timerElement =  document.getElementById("timer");
var startButton = document.getElementById("start");
var sec = 75;
var questions  = document.querySelector(".questions");
var hideQs = document.getElementById("hideQs")
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

}