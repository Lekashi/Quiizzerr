//questions div
//list items of possible answers
var questionsAnswer =[
  {
    q: "What does NaN stand for?",
    pa1: "no and no",
    pa2: "Not a Number",
    pa3: "not a nose",
    pa4: "not my child",
    correct: "Not a Number"
  },
  {
    q: "What does NaN stand for?",
    pa1: "no and no",
    pa2: "Not a Number",
    pa3: "not a nose",
    pa4: "not my child",
    correct: "Not a Number"
  },
  {
    q: "What does NaN stand for?",
    pa1: "no and no",
    pa2: "Not a Number",
    pa3: "not a nose",
    pa4: "not my child",
    correct: "Not a Number"
  }
]
//endgame div
//timer
var startButton = document.getElementById("startButton");

//gen variables
//score
//time 
var timeEl = document.getElementById("Timer");
//timer
var timerCount = 30.000;
//questions left (referencing indexes)
var questionIndex = 0;
//feedback variable
var feedback;
var loseGame = false;



// event listener for start button 
  startButton.addEventListener("click", printQuestionAnswers);
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
//     //penalize time global time var and subtract time-= time taken off
// }

// function startTimer 
// time --;
// re render time on screen

//warning close to zero

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
function printQuestionAnswers() {
  console.log("printQuestionAnswers function has started")

  
  timerInterval = setInterval(function(){
    timerCount --;
    timeEl.textContent = timerCount + " Seconds Left";
    // timerElement.innerHTML = timerCount;
    if(timerCount === 0){
    clearInterval(timerInterval);
    loseGame();
  }  },1000);

    for (var i = 0; i < printQuestionAnswers.length; i++) {
        var question = questionsAnswer[i].q
        var questionEl =document.createElement("h2")
        questionEl.setAttribute("class", "question")
        questionEl.textContent = question;
        questionAnswerContainer.appendChild(questionEl);

        var pa1 = questionsAnswer[i].pa1
        var pa2 = questionsAnswer[i].pa2
        var pa3 = questionsAnswer[i].pa3
        
        
        var pa1El = document.createElement("button")
        pa1El.setAttribute("data-pa",pa1);
      }
    }
    
    