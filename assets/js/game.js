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
    question: "Which one of these is considered Machine Language.",
    answer: "btn-a",
    optionA:"Binary",
    optionB:"Beep Boop Beep",
    optionC:"Hypertext Markup Language (HTML)",
    optionD:"Python"
  },
    {
    question: "Which one of these is considered Assembly Language.",
    answer: "btn-a",
    optionA:"Cascading Style Sheet (CSS)",
    optionB:"C++",
    optionC:"Advanced RISC Machine (ARM)",
    optionD:"Java"
    
  },
    {
    question: "What is the difference between Machine Language and High-Level Language.",
    answer: "btn-b",
    optionA:"They are used for different Operating Systems (OS).",
    optionB:"Readablity: Machine language is ment for the machine and High-Level can be read by users then compiled into Machine language",
    optionC:"There is None",
    optionD:"Umm next?"
    
  },
    {
    question: "What type of coding language is Python?",
    answer: "btn-a",
    optionA: "High-Level and Object-Orientated",
    optionB:"A snake's favorite",
    optionC:"Machine",
    optionD:"Scripting"
  },
    {
    question: "What was the first programming language called?",
    answer: "btn-c",
    optionA:"SQL",
    optionB:"BASIC",
    optionC:"FORTRAN",
    optionD:"Lisp"
  },
 
    {
     question: "Is Java and JavaScipt the same?",
     answer: "They are different coding languages.",
     optionA:"They are the same.",
     optionB:"They are different coding languages.",
     optionC:"Let me ask my mom."
     optionD:"can you repeat the question."
   },
];

