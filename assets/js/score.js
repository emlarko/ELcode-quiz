var highscores = document.getElementById("highscores");
var clearScores = document.getElementById("clear");

window.onload = function() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));
        
    if (storedScores !== null) {
        scores = storedScores;
        renderScores();
    }
}

// The following function renders items in the score list as <li> elements
function renderScores() {

  highscores.innerHTML = "";

  // Render a new li for each score
  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];

    var li = document.createElement("li");
    li.textContent = score;
    li.setAttribute("data-index", i);

    highscores.appendChild(li);
  }
}

clearScores.addEventListener("click", function() {
    highscores.innerHTML = "";
    window.localStorage.clear();
})
