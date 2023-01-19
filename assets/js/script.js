
var start = document.querySelector("#start");
var timeEl = document.querySelector(".time");
var content = document.querySelector("#content");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4 = document.getElementById("4");
var score = document.getElementById("score");
var finalScore = document.getElementById("final-score");
var answer = document.querySelectorAll(".choice");
var answerPrint = document.getElementById("answer");
var submitBtn = document.getElementById("submit");
var initialsInput = document.getElementById("initials-text");


var secondsLeft = 60;

const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "1. strings",
        choice2: "2. booleans",
        choice3: "3. alerts",
        choice4: "3. numbers",
        correctAnswer: choice3
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choice1: "1. numbers and strings",
        choice2: "2. other arrays",
        choice3: "3. booleans",
        choice4: "4. all of the above",
        correctAnswer: choice
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        choice1: "1. quotes",
        choice2: "2. curly brackets",
        choice3: "3. parentheses",
        choice4: "4. square brackets",
        correctAnswer: choice3
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choice1: "1. commas",
        choice2: "2. curly brackets",
        choice3: "3. quotes",
        choice4: "4. parentheses",
        correctAnswer: choice3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "1. Javascript",
        choice2: "2. terminal/bash",
        choice3: "3. for loops",
        choice4: "4. console.log",
        correctAnswer: choice4
    }
]

var i = 0;
var scoreCount = 0
let q = questions[i];

function renderQuestions() {
    question.textContent = q.question;
    choice1.textContent = q.choice1;
    choice2.textContent = q.choice2;
    choice3.textContent = q.choice3;
    choice4.textContent = q.choice4;
}

let answerArr = Array.from(answer)

answerArr.forEach(answer => answer.addEventListener("click", checkAnswer));

function checkAnswer(event) {
    var correct = q.correctAnswer;
    console.log(correct);
    if (event.target == correct) {
        answerPrint.textContent = "correct";
        scoreCount = scoreCount + 10;
    } else {
        answerPrint.textContent = "incorrect";
        secondsLeft = secondsLeft - 10;
        timeEl.textContent = secondsLeft + " seconds left";   
        }
    i++;
    if (i >= questions.length) {
        endQuiz();
    }
    else {
        q = questions[i]
        setTimeout(renderQuestions, 200)
    }
};

var scores = [];

function storeScores() {
    localStorage.setItem("scores", JSON.stringify(scores));
};    

if (initialsInput !== "") 
    submitBtn.addEventListener("click", function(event) {
        location.href = "highscore.html";
        event.preventDefault();
        var scoreText = initialsInput.value + " " + scoreCount;
        scores.push(scoreText);
        storeScores();
    });

function endQuiz() {
    quiz.style.display = "none";
    score.style.display = "block";
    finalScore.textContent = "Your final score is " + scoreCount;
    clearInterval(timerInterval);
}

var timerInterval;

function setTime() {
    // Sets interval in variable
        timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";
        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            endQuiz();
        }

    }, 1000);
};

start.addEventListener("click", startQuiz);

function startQuiz() {

    renderQuestions();

    setTime();

    start.style.display = "none";
    content.style.display = "none";
    quiz.style.display = "block";

};
