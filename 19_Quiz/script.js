
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


const questionQuiz = document.getElementById("questionQuiz");

let count = 0;

questionQuiz.innerText = quizQuestions[count].question;

function showQuestion(){
  
  
  const option = document.getElementById("option")


  option.innerHTML = "";

  
  const currentQuestion = quizQuestions[count];

  currentQuestion.option.forEach(function(e){

    const col = document.createElement("div");
    col.className = "col-6";

    const btn = document.createElement("button");
    btn.innerText = e;
    btn.className = "btn btn-outline-primary w-100 my-2";

    col.appendChild(btn);

    option.appendChild(col);

});


}

showQuestion();