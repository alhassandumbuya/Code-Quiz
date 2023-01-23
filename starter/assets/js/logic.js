let startQuizBtn = document.querySelector("#start");
let startScreenContainerEl = document.querySelector("#start-screen");
let timerElement = document.querySelector(".timer");
let questionContainerEl = document.querySelector("#questions");
let options = document.querySelector("#options")
let shuffledQuestions, currentQuestionIndex
let isWin = false;
let timer = 20; 




//A start game function created which will start the game, time and load up the questions 
function startGame() {
    setTime()
    questionContainerEl.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex= 0
    startScreenContainerEl.classList.add("hide")
    randomQuestion(shuffledQuestions[currentQuestionIndex])
    
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
// function questions() {
//     randomQuestion(shuffledQuestions[currentQuestionIndex])
// }

function randomQuestion(questionTitle) {
    questionContainerEl.innerText = questionTitle.questionTitle
}

//function options(choices) {
    
//};




//event listener for the start button to lunch the game 
startQuizBtn.addEventListener("click", startGame);






















