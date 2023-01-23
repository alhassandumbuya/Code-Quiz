var startQuiz = document.querySelector("#start");
var startScreenContainerEl = document.querySelector("#start-screen");
var timerElement = document.querySelector(".timer");
let questionContainerEl = document.querySelector("#questions")
console.log(timerElement);
console.log(startQuiz);
var isWin = false;
var timer = 20; 




//A start game function created which will start the game, time and load up the questions 
function startGame() {
    setTime()
    questionContainerEl.classList.remove("hide")
    startScreenContainerEl.classList.add("hide")
    isWin = false
    
}


function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timer--;
      timerElement.textContent = timer;
  
      if(timer === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }






//event listener for the start button to lunch the game 
startQuiz.addEventListener("click", startGame);






















