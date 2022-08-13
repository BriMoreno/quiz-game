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
    numb: 1,
    question: "Which one of these is considered Machine Language.",
    answer: "Binary and Hexadecimal",
    options: [
      "Binary",
      "Beep Boop Beep",
      "Hypertext Markup Language (HTML)",
      "Python"
    ]
  },
    {
    numb: 2,
    question: "Which one of these is considered Assembly Language.",
    answer: "Advanced RISC Machine",
    options: [
      "Cascading Style Sheet (CSS)",
      "C++",
      "Advanced RISC Machine (ARM)",
      "Java"
    ]
  },
    {
    numb: 3,
    question: "What is the difference between Machine Language and High-Level Language.",
    answer: "Readablity: Machine language is ment for the machine and High-Level can be read by users then compiled into Machine language",
    options: [
      "They are used for different Operating Systems (OS).",
      "Readablity: Machine language is ment for the machine and High-Level can be read by users then compiled into Machine language",
      "There is None",
      "Umm next?"
    ]
  },
    {
    numb: 4,
    question: "What type of coding language is Python?",
    answer: "High-Level and Object-Orientated",
    options: [
      "High-Level and Object-Orientated",
      "A snake's favorite",
      "Machine",
      "Scripting"
    ]
  },
    {
    numb: 5,
    question: "What was the first programming language called?",
    answer: "FORTRAN",
    options: [
      "SQL",
      "BASIC",
      "FORTRAN",
      "Lisp"
    ]
  },
 
    {
     numb: 6,
     question: "Is Java and JavaScipt the same?",
     answer: "They are different coding languages.",
     options: [
       "They are the same.",
       "They are different coding languages.",
       "Let me ask my mom."
     ]
   },
];

