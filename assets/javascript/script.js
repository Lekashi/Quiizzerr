
// Time Variables
var timeEl = document.getElementById("Timer");
var timerCount = 30;
// Time function
function timerStart() {
  console.log("timerStart function has started")
  timerInterval = setInterval(function(){
    timerCount --;
    timeEl.textContent = timerCount + " Seconds Left";
    if(timerCount <= 0 || currentQuestionIndex >= questionAnswerContainer.length){
      startButton.setAttribute('style', 'display: block')
      clearInterval(timerInterval);
    }  },1000);
  }

  
  var startButton = document.getElementById("startButton");
  var myQuestion  = document.getElementById("questionContainer");
  var currentQuestion = document.getElementById("currentQuestion");
  var buttonContainer = document.querySelector("#buttonContainer");

  startButton.addEventListener("click", gameStart);

  let switchQuestions, currentQuestionIndex;

  function gameStart() {
    timerCount = 30;
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
  for(i=0; i<answerButDisplay.length; i++){
      answerButDisplay[i].textContent = questionAnswerContainer[currentQuestionIndex].answers[i].text;
      answerButDisplay[i].setAttribute("data-correct", questionAnswerContainer[currentQuestionIndex].answers[i].correct)
      answerButDisplay[i].addEventListener("click", checkAnswer)
  }
}

function checkAnswer(e) {
  var checkAnswerCorrect = document.getElementById('checkAnswerCorrect')
  var checkAnswerIncorrect = document.getElementById('checkAnswerIncorrect')
  var checkAnswerTime = 2;
  var userChoice = e.target.dataset.correct;
  if(userChoice == "true"){
      console.log('yes')
      checkAnswerCorrect.setAttribute('style', 'display: block')
      checkAnswerInterval = setInterval(function(){
        checkAnswerTime --;
        if(checkAnswerTime <= 0){
          checkAnswerCorrect.setAttribute('style', 'display: none')
          clearInterval(checkAnswerInterval);
        }  },1000);

  }else {
      console.log("bad")
      timerCount -=10;
      checkAnswerIncorrect.setAttribute('style', 'display: block')
      checkAnswerInterval = setInterval(function(){
        checkAnswerTime --;
        if(checkAnswerTime <= 0){
          checkAnswerIncorrect.setAttribute('style', 'display: none')
          clearInterval(checkAnswerInterval);
        }  },1000);
  }
  currentQuestionIndex++;

  if(currentQuestionIndex<questionAnswerContainer.length) {
      questionShow()
  } 
}

        var questionAnswerContainer =[
          {
              question:"What native country is Brazil?",
                  answers: [
                      {text: "North American", correct:true},
                      {text: "South American", correct:false},
                      {text: "West American", correct:false},
                      {text: "East American", correct:false}
                  ]
              },
              {
                question:"What is the national language of Canada?",
                    answers: [
                        {text: "English", correct:false},
                        {text: "French", correct:false},
                        {text: "German", correct:false},
                        {text: "Dutch", correct:true}
                    ]
              },
              {
                question:"A la Crecy is a French dish made of what?",
                    answers: [
                        {text: "Apples", correct:false},
                        {text: "Carrots", correct:true},
                        {text: "Potatoes", correct:false},
                        {text: "Tomatos", correct:false}
                    ]
              },
              {
                  question:"What does Nan stand for?",
                      answers: [
                          {text: "Neither a Number", correct:false},
                          {text: "no and no", correct:false},
                          {text: "Not a Nose", correct:false},
                          {text: "Not a Number", correct:true}
                      ]
              },
              {
                  question:"Which core ingredient is important to cook a savory dish?",
                      answers: [
                          {text: "Sugar", correct:false},
                          {text: "Butter", correct:false},
                          {text: "Salt", correct:true},
                          {text: "Meat", correct:false}
                      ]
                  }
              ]
        
