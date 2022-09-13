//creating variables to make html id's easier to access
var timer = document.getElementById("timer");
var home = document.getElementById("homePage");
var questions = document.getElementById("questions");
var startQuiz = document.getElementById("startBtn");
var quizBox = document.getElementById("quiz-box");
var endGame = document.getElementById("endGame");
var hsPage = document.getElementById("score-page");
var player = document.getElementById("player")
var initials = document.getElementById("initials");
var results = document.getElementById("results");
var hScore = document.getElementById("hScore");
var endScore = document.getElementById("endScore");
var scoreBox = document.getElementById("score-box");
var submit = document.getElementById("submit");
var moreBtns = document.getElementById("moreBtns");
var optA = document.getElementById("btn-a");
var optB = document.getElementById("btn-b");
var optC = document.getElementById("btn-c");
var optD = document.getElementById("btn-d");

// creating an array and passing the number, questions, options, and answers
var quiz = [
  {
    question: "How many Studio Ghibli movies are there?",
    optionA:"22",
    optionB:"16",
    optionC:"30",
    optionD:"8",
    answerEl: "btn-a",
  },
  {
    question: "What is Studio Ghibli most popular movie?",
    optionA:"Spirited Away",
    optionB:"Grave of the Fireflies",
    optionC:"Howl's Moving Castle",
    optionD:"Princess Mononoke",
    answerEl: "btn-a",
    
  },
  {
    question: "What was Studio Ghibli's first film",
    optionA:"My Neighbor Totoro",
    optionB:"Nausicaä of the Valley of the Wind",
    optionC:"Castle in the Sky",
    optionD:"Only Yesterday",
    answerEl: "btn-b",
  },
  {
    question: "What is Kiki's cat named in Kiki's Delivery Service?",
    optionA: "Jiji",
    optionB:"Gigi",
    optionC:"Bibi",
    optionD:"Didi",
    answerEl: "btn-a",
  },
  {
    question: "What does Ghibli mean?",
    optionA:"Fly to achieve your dreams",
    optionB:"Laughter from a child",
    optionC:"Hot air blowing from the Sahara desert",
    optionD:"There isn't a meaning",
    answerEl: "btn-c",
  },
 
  {
    question: "What fairy tale inspired Ponyo?",
    optionA:"The Great Sea Serpent by Hans Christian Andersen",
    optionB:"The Sea-Hare by the Brothers Grimm",
    optionC:"Let me ask my mom.",
    optionD:"The Little Sea Maid by Craigie Andersen",
    answerEl: "btn-d",
  },
];

//global variables
var lastQ = quiz.length;
var seconds = 60;
var timeInterval;
var score = 0;
var onTheMoney;
var currentQuestions = 0;

// function to loop questions through an array
function showQs() {
  endGame.style.display = "none";

  if (currentQuestions === lastQ) {
    return displayResults();
  }
  var cQuestion = quiz[currentQuestions];
  questions.innerHTML = "<p>" + cQuestion.question +"</p>";

  optA.innerHTML = cQuestion.optionA;
  optB.innerHTML = cQuestion.optionB;
  optC.innerHTML = cQuestion.optionC;
  optD.innerHTML = cQuestion.optionD;
}

//Quiz starts here
function begin() {
  endGame.style.display = "none";
  home.style.display = "none";

  showQs();
  timeInterval = setInterval(function () {
    seconds--;

    timer.textContent = "Seconds left: " +seconds;

    if(seconds === 0) {
      clearInterval(timeInterval);
      displayResults();
    }
  }, 1000);
  quizBox.style.display = "block";
}

function displayResults() {
  quizBox.style.display = "none";
  endGame.style.display = "flex";

  clearInterval(timeInterval);

  player.value = "";

  endScore.innerHTML = "You scored "+ score + "out of " + quiz.length;
}

submit.addEventListener("click", function leaderBoard(){
  if(player.value ==="") {

    alert("Your name cannot be blank.");
    return false;

  } else {
    var saveHS = JSON.parse(localStorage.getItem("saveHS")) || [];

    var currentPlayer = player.value.trim();

    var top = {
      name: currentPlayer,

      score: score,
    };
    endGame.style.display = "none";
    scoreBox.style.display = "flex";
    hsPage.style.display = "block";
    moreBtns.style.display = "flex";
    
    saveHS.push(top);
    localStorage.setItem("saveHS", JSON.stringify(saveHS));

    showLeaderBoard();
  }
});

function showLeaderBoard() {
  initials.innerHTML = "";
  hScore.innerHTML = "";

  var scores = JSON.parse(localStorage.getItem("saveHS")) || [];

  for (i = 0; i < scores.length; i++) {
    var players = document.createElement("li");
    var allScores = document.createElement("li");
  
    players.textContent = scores[i].name;
    allScores.textContent = scores[i].score;

    initials.appendChild(players);
    hScore.appendChild(allScores);
  }
}

function displayLB(){
  home.style.display = "none";
  endGame.style.display = "none";
  scoreBox.style.display = "flex";
  hsPage.style.display = "block";
  moreBtns.style.display = "flex";

  showLeaderBoard();
}

function clear() {
  window.localStorage.clear();
  initials.textContent = "";
  hScore.textContent = "";
}

function replay() {
scoreBox.style.display = "none";
endGame.style.display = "none";
home.style.display = "flex";

  seconds = 60;
  score = 0;
  currentQuestions = 0;
}

function getAnswers(answer) {
  right = quiz[currentQuestions].answerEl;

  if (answer === right && currentQuestions !== lastQ) {
    score++;
    alert("You're right!");
    currentQuestions++;

    showQs();
  } else if (answer !== right && currentQuestions !== lastQ) {
    alert("You're wrong");
    currentQuestions++;

    showQs();
  } else {
    displayResults();
  }
}

startQuiz.addEventListener("click", begin);
