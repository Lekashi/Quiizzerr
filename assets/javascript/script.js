// Time Variables
var timeEl = document.getElementById("Timer");
var timerCount = 60;
// Time function
function timerStart() {
  console.log("timerStart function has started")
  timerInterval = setInterval(function () {
    timerCount--;
    timeEl.textContent = timerCount + " Seconds Left";
    if (timerCount <= 0 || currentQuestionIndex >= questionAnswerContainer.length) {
      LoseGame();
      clearInterval(timerInterval);
    }
  }, 1000);
}


var startButton = document.getElementById("startButton");
var myQuestion = document.getElementById("questionContainer");
var currentQuestion = document.getElementById("currentQuestion");
var buttonContainer = document.querySelector("#buttonContainer");

startButton.addEventListener("click", gameStart);

let switchQuestions, currentQuestionIndex;

function gameStart() {
  timerCount = 60;
  console.log("startGame Function has started")
  startButton.setAttribute('style', 'display: none')
  switchQuestions = questionAnswerContainer.sort(() => Math.random() - .5)
  currentQuestionIndex = 0;
  timerStart();
  questionShow();
}

function questionShow() {
  currentQuestion.innerText = questionAnswerContainer[currentQuestionIndex].question;
  var answerButDisplay = document.getElementsByClassName('paBtn');
  console.log(answerButDisplay);
  for (i = 0; i < answerButDisplay.length; i++) {
    answerButDisplay[i].textContent = questionAnswerContainer[currentQuestionIndex].answers[i].text;
    answerButDisplay[i].setAttribute("data-correct", questionAnswerContainer[currentQuestionIndex].answers[i].correct);
    answerButDisplay[i].addEventListener("click", checkAnswer);
  }
}

function checkAnswer(e) {
  var checkAnswerCorrect = document.getElementById('checkAnswerCorrect')
  var checkAnswerIncorrect = document.getElementById('checkAnswerIncorrect')
  var checkAnswerTime = 2;
  var userChoice = e.target.dataset.correct;
  if (userChoice == "true") {
    console.log('yes')
    checkAnswerCorrect.setAttribute('style', 'display: block')
    checkAnswerInterval = setInterval(function () {
      checkAnswerTime--;
      if (checkAnswerTime <= 0) {
        checkAnswerCorrect.setAttribute('style', 'display: none')
        clearInterval(checkAnswerInterval);
        return;
      }
    }, 1000);

  } else {
    console.log("bad")
    timerCount -= 10;
    checkAnswerIncorrect.setAttribute('style', 'display: block')
    checkAnswerInterval = setInterval(function () {
      checkAnswerTime--;
      if (checkAnswerTime <= 0) {
        checkAnswerIncorrect.setAttribute('style', 'display: none')
        clearInterval(checkAnswerInterval);
        return;
      }
    }, 1000);
  }
  currentQuestionIndex++;

  if (currentQuestionIndex < questionAnswerContainer.length) {
    questionShow()
  } else {
    WinGame();
  }
}

function WinGame() {
  // var numChars = prompt("How many character ")
  var userInitials = prompt("Want to save your highscore, enter 3 characters");
  console.log(userInitials);
  // check the users input and confirm they put in a number between 8 and 128
  if (userInitials.length != 3) {
    alert("Too many characters or not enough characters. Please only type 3 characters!")
    return WinGame();
  }
  var highscore = {
    userInitials, timerCount
  }
  var highscoreStored = JSON.parse(localStorage.getItem("userHS"))||[];
  console.log(highscore);
  console.log(highscoreStored);
  var newHighscore = [
    ...highscoreStored, 
    highscore
  ]
  console.log(newHighscore)
  localStorage.setItem("userHS", JSON.stringify(newHighscore));
  alert("Highscore Saved!");
}

function LoseGame() {
  if (currentQuestionIndex >= questionAnswerContainer.length) {
    startButton.setAttribute('style', 'display: block');
  }
  else {
    alert("You lost. Press the start button to try again!");
    startButton.setAttribute('style', 'display: block');
  }
}

var questionAnswerContainer = [
  {
    question: "What native country is Brazil?",
    answers: [
      { text: "North American", correct: false },
      { text: "South American", correct: true },
      { text: "West American", correct: false },
      { text: "East American", correct: false }
    ]
  },
  {
    question: "What is the national language of Canada?",
    answers: [
      { text: "English", correct: false },
      { text: "French", correct: true },
      { text: "German", correct: false },
      { text: "Dutch", correct: false }
    ]
  },
  {
    question: "A la Crecy is a French dish made of what?",
    answers: [
      { text: "Apples", correct: false },
      { text: "Carrots", correct: true },
      { text: "Potatoes", correct: false },
      { text: "Tomatos", correct: false }
    ]
  },
  {
    question: "What does Nan stand for?",
    answers: [
      { text: "Neither a Number", correct: false },
      { text: "no and no", correct: false },
      { text: "Not a Nose", correct: false },
      { text: "Not a Number", correct: true }
    ]
  },
  {
    question: "Brazil is the biggest producer of?",
    answers: [
      { text: "Sugar", correct: false },
      { text: "coffee", correct: true },
      { text: "Salt", correct: false },
      { text: "Meat", correct: false }
    ]
  },
  {
    question: "Which country is infamously known as Arch Rival of Pakistan?",
    answers: [
      { text: "Kazakhstan", correct: false },
      { text: "America", correct: false },
      { text: "India", correct: true },
      { text: "Afghanistan", correct: false }
    ]
  },
]