let startQuizBtn = document.querySelector("#start");
let startScreenContainerEl = document.querySelector("#start-screen");
let timerElement = document.querySelector(".timer");
let questionContainerEl = document.querySelector("#questions");
let questionTitleEl = document.querySelector("#question-Title")
let answersBtnEl = document.querySelector("#options")
let shuffledQuestions, currentQuestionIndex //this variables are used to shuffle the questions arounf
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


  //This function allows the questions to pop up after clicking the start btn. 
function randomQuestion(questionTitle) {
    questionTitleEl.innerText = questionTitle.questionTitle

    questionTitle.answersBtn.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.choices) {
            button.dataset.choices = answer.choices
        }
        button.addEventListener('click', selectAnswer)
        answersBtnEl.appendChild(button)
    })
}




function selectAnswer(e) {
    let selectedAnswer = e.target
    let choices = selectedAnswer.dataset.correct
    setStatusClass(document.body, choices)
    Array.from(answersBtnEl.children).forEach(button => {
      setStatusClass(button, button.dataset.choices)})
    
}

function setStatusClass(element, choices) {
  clearStatusClass(element)
  if (choices) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}



//function options(choices) {
    
//};




//event listener for the start button to lunch the game 
startQuizBtn.addEventListener("click", startGame);






















