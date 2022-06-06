var playerTag = localStorage.getItem("playerTag")
var allScores = localStorage.getItem("Score")
const list = document.querySelector("#highscoresList")
let hsList;

allPlayerTags();


function allPlayerTags() {
    var highscoreStored = localStorage.getItem("userHS");
    hsList = list.appendChild(document.createElement('ls'));
    hsList.textContent = highscoreStored;
}
