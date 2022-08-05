//timer
var timeTracker;
var timer;
var interval;

//declare the questions
var questionPos= 0;

//starting score set
var score = 0;

// creating an array and passing the number, questions, options, and answers
var questions = [
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

//decide what question comes up
var currentQ = questions[questionPos];

//declaring interval and timeEl

var timeEl = document.querySelector(".timer");

//to start the quiz
function start() {
  var remove = document.querySelector("#quiz-box")
  var quizBox = document.querySelector("#quiz")
  console.log("start quiz");
  //hiding start scree
  remove.remove("hidden");
  //setting variable to start values
  questionPos = 0;
  playerScore = 0;
  timerTracker = 20;
  startTimer();
}

//the timer
function startTimer() {
  interval = setInterval(function(){
    inter
    timeTracker--;
    timeEl.textContent === timerTracker;
    //for when the timer ends
    if(timeTracker <= 0) {
      clearInterval(interval);
      endGame();
    }
  })
}