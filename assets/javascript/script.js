//questions div
//list items of possible answers
var questionAnswerContainer =[
  {
    q: "What does NaN stand for?",
    possibleAnswers: ["A. No and no","B. Not a number","C. not a nose","D. not my child"],
    correct: "B. Not a Number"
  },
  {
    q: "What does NaN stand for?",
    possibleAnswers: ["A. no and no","B. Not a Number","C. not a nose","D. not my child"],
    correct: "Not a Number"
  },
  {
    q: "What does NaN stand for?",
    possibleAnswers: ["A. no and no","B. Not a Number","C. not a nose","D. not my child"],
    correct: "Not a Number"
  }
]

//gen variables
var myQuestion  = document.querySelector(".questionSec");
var newDiv = document.createElement("h2");
var Question1 = document.createElement("p");
var Question2 = document.createElement("p");
var Question3 = document.createElement("p");
var Question4 = document.createElement("p");
var startButton = document.getElementById("startButton");
var buttonContainer = document.querySelector("#buttonContainer");
console.log(myQuestion);
myQuestion.appendChild(newDiv);
myQuestion.appendChild(Question1)
myQuestion.appendChild(Question2)
myQuestion.appendChild(Question3)
myQuestion.appendChild(Question4)
// Time Element
var timeEl = document.getElementById("Timer");
// How many seconds the timer starts 
var timerCount = 30;
//questions left (referencing indexes)
var questionIndex = 0;
//feedback variable
var feedback;
var loseGame = false;
//score
//endgame div
//timer


function checkAnswer(e) {
  var element = e.target;
  if (element.className ==="paBtn") {
    console.log(element.dataset.answer)
  }
}

buttonContainer.addEventListener("click", checkAnswer)

// event listener for start button 
startButton.addEventListener("click", gameStart);
function gameStart() {
  console.log("startGame Function has started")
  startButton.setAttribute('style', 'display: none')
  timerStart();
  questionListner();
}

function timerStart() {
  console.log("timerStart function has started")
  timerInterval = setInterval(function(){
    timerCount --;
    timeEl.textContent = timerCount + " Seconds Left";
    // timerElement.innerHTML = timerCount;
    if(timerCount === 0){
      clearInterval(timerInterval);
      loseGame();
    }  },1000);
  }
  
  function questionListner() {
    console.log("Question listner function started")
    for (let i = 0; i < questionAnswerContainer.length; i++) {
      newDiv.textContent = questionAnswerContainer[i].q;
      console.log(newDiv)
      for (let y = 0; y < 4; y++) {
        Question1.textContent = questionAnswerContainer[i].possibleAnswers[y];
        y++;
        Question2.textContent = questionAnswerContainer[i].possibleAnswers[y];
        y++;
        Question3.textContent = questionAnswerContainer[i].possibleAnswers[y];
        y++;
        Question4.textContent = questionAnswerContainer[i].possibleAnswers[y];
      }
    }
  }
  
  function loseGame() {
    console.log("loseGame function has started")
    startButton.setAttribute('style' , 'display: block')
  }
  
  
  // reference for button
  // add event listener and function
  
  // on start button click startGame function
  //start game function
//hide intro start screen

//render first question to the screen, show multiple choice answers
//call funtion 


//timer starts timer = setInterval(function(),1000)
//time display

//rend question function
// change hidden value of questions div
// variable with an array of object
// var questions = [
  //     {
    //         title: "JS question",
    //         answerChoices: [1,2,3,4],
    //         correctAnswer: "answer"
    //     }
    // ]
    
    
    //reference index of question to display on screen
    //increment question index variable
    //grab html reference to header to attach question title to question[0].title append
    //grab html reference push question answers to an array loop through answers create list el or button and append to ul
    // add eventlistener to the answer choices/div that holds answer choices event.target matches the correct answer
    //function checkAnswer ()
    // variable selectedAnswer = event.target
    // if (selectedAnswer === question[0].correctAnswer)
    
    // provide correct feedback
    //Dom add in element 
    
    // else {
      //     //provide incorrect feedback
      //     //penalize time global time var and subtract time-= tiadad
      // check timer if statement
      // if time === 0, clearInterval then end quiz else keep running this function
      
      //end quiz function
      //hide question and display intial forms
      //display final score
      //eventListener intials and score to local storage setItem("key",value)
      //getItem JSON.parse
      //stores score in an array and stringify to put in local storage pass the most rcent to array and store again
      
      // Highscores page
      //pull scores from local storage div with ol make references to those in ol
      //order high scores from highest to lowest
      // need buttons for html for go back and clear local storage


      //   function questionListner() {
      //     for (var i = 0; i < printQuestionAnswers.length; i++) {
      //       console.log("printQuestionAnswers function has started")
      //       var question = questionsAnswer[i].q
      //       var questionEl =document.createElement("h2")
      //       questionEl.setAttribute("class", "question")
      //       questionEl.textContent = question;
      //       questionAnswerContainer.appendChild(questionEl);
            
      //     var pa1 = questionsAnswer[i].pa1
      //     var pa2 = questionsAnswer[i].pa2
      //     var pa3 = questionsAnswer[i].pa3
          
      //     var pa1El = document.createElement("button")
      //     pa1El.setAttribute("data-pa",pa1);
      //   }
      // }