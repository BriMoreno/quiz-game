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

//Other variables that don't grab from HTML
var lastQ = quiz.length;
var seconds = 60;
var timeInterval;
var score = 0;
var onTheMoney;
var currentQuestions = 0;

// creating an array and passing the number, questions, options, and answers
var quiz = [
    {
    question: "How many Studio Ghibli movies are there?",
    answer: "btn-a",
    optionA:"22",
    optionB:"16",
    optionC:"30",
    optionD:"8"
  },
    {
    question: "What is Studio Ghibli most popular movie?",
    answer: "btn-a",
    optionA:"Spirited Away",
    optionB:"Grave of the Fireflies",
    optionC:"Howl's Moving Castle",
    optionD:"Princess Mononoke"
    
  },
    {
    question: "What was Studio Ghibli's first film",
    answer: "btn-b",
    optionA:"My Neighbor Totoro",
    optionB:"Nausicaä of the Valley of the Wind",
    optionC:"Castle in the Sky",
    optionD:"Only Yesterday"
    
  },
    {
    question: "What is Kiki's cat named in Kiki's Delivery Service?",
    answer: "btn-a",
    optionA: "Jiji",
    optionB:"Gigi",
    optionC:"Bibi",
    optionD:"Didi"
  },
    {
    question: "What does Ghibli mean?",
    answer: "btn-c",
    optionA:"Fly to achieve your dreams",
    optionB:"Laughter from a child",
    optionC:"Hot air blowing from the Sahara desert",
    optionD:"There isn't a meaning"
  },
 
    {
     question: "What fairy tale inspired Ponyo?",
     answer: "btn-d",
     optionA:"The Great Sea Serpent by Hans Christian Andersen",
     optionB:"The Sea-Hare by the Brothers Grimm",
     optionC:"Let me ask my mom.",
     optionD:"The Little Sea Maid by Craigie Andersen"
   },
];

