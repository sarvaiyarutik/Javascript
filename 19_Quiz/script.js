
const quizQuestions = [
  {
    id: 1,
    question: "Which method adds an element to the end of an array?",
    option: ["push()", "pop()", "shift()", "unshift()"],
    correct: "push()"
  },
  {
    id: 2,
    question: "Which method removes the last element from an array?",
    option: ["push()", "pop()", "shift()", "slice()"],
    correct: "pop()"
  },
  {
    id: 3,
    question: "Which method creates a new array by changing each element?",
    option: ["filter()", "map()", "find()", "forEach()"],
    correct: "map()"
  },
  {
    id: 4,
    question: "Which method returns only elements that match a condition?",
    option: ["map()", "reduce()", "filter()", "findIndex()"],
    correct: "filter()"
  },
  {
    id: 5,
    question: "Which method returns the first matching element?",
    option: ["find()", "filter()", "map()", "some()"],
    correct: "find()"
  },
  {
    id: 6,
    question: "Which method is used to calculate a single value from an array?",
    option: ["map()", "reduce()", "forEach()", "find()"],
    correct: "reduce()"
  },
  {
    id: 7,
    question: "How do you access the name property of this object?",
    option: ["user.name", "user->name", "user[name]", "user::name"],
    correct: "user.name"
  },
  {
    id: 8,
    question: "Which method loops through every array element?",
    option: ["forEach()", "find()", "reduce()", "sort()"],
    correct: "forEach()"
  },
  {
    id: 9,
    question: "Which method finds the index of an element?",
    option: ["find()", "findIndex()", "index()", "search()"],
    correct: "findIndex()"
  },
  {
    id: 10,
    question: "Which keyword is used to create an object?",
    option: ["object", "new", "create", "make"],
    correct: "new"
  }
];


const displayQuestion = document.getElementById("displayQuestion");
const Question = document.getElementById("Question");
const timeSector = document.getElementById("timeSector");
const option = document.getElementById("option");

let count = 0;

let selectAnswer = 0;

let score = 0;

displayQuestion.innerText = quizQuestions[count].question;

function showQuestion(){
  
  option.innerHTML = "";


  Question.innerText = `Question${count + 1}/${quizQuestions.length}`
  
  const currentQuestion = quizQuestions[count];

  displayQuestion.innerText = currentQuestion.question;

  currentQuestion.option.forEach(function(e){

    let col = document.createElement("div");

    col.classList.add("col-md-6");

    let button = document.createElement("button");

    button.innerText = e;

    button.classList.add("btn","btn-outline-warning","option-btn")

    button.onclick = function(){
      selectAnswer = e;
      nextBTN();
    }
  
    option.appendChild(col);

    col.appendChild(button);

});
}

showQuestion();


function nextBTN(){

  const currentQuestion = quizQuestions[count];

  if(selectAnswer === currentQuestion.correct){

    score++;
   

  }
 count++;
  
  selectAnswer = null;

  if(count < quizQuestions.length){
    showQuestion();

  }else{
    option.innerHTML = "";
    questionQuiz.innerText = "Quiz Completed!";
    Question.innerText = ` Score : ${score}/${quizQuestions.length}`;
  }

}


