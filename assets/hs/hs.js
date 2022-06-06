var playerTag = localStorage.getItem("playerTag")
var allScores = localStorage.getItem("Score")
const list = document.querySelector("#highscoresList")
let hsList;

allPlayerTags();


function allPlayerTags() {
    var highscoreStored = JSON.parse(localStorage.getItem("userHS"));
    highscoreStored.forEach(score => {
        hsList = list.appendChild(document.createElement('li'));
        hsList.textContent = score.userInitials+ ": " + score.timerCount;
    });
}
