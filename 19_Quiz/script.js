
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

let userAnswer = [];

let time;

let timeSet = 30;


displayQuestion.innerText = quizQuestions[count].question;

function showQuestion(){
  
  option.innerHTML = "";


  Question.innerText = `Question ${count + 1}/${quizQuestions.length}`
  
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


    console.log(selectAnswer);

    nextBTN();
      
}

  
    option.appendChild(col);

    col.appendChild(button);

});
SetTime()
}

showQuestion();


function nextBTN(){
    const currentQuestion = quizQuestions[count];


  if(selectAnswer === quizQuestions[count].correct){
    score++; 
  }


 userAnswer.push({
    question: currentQuestion.question,
    selectAnswer: selectAnswer,
    correct: currentQuestion.correct
})

  if(count < quizQuestions.length - 1){
 count++;
    selectAnswer = null;
    showQuestion();
      }

  else{
    console.log(score)
  
  
ScoreResult();
  }
} 

function SetTime(){

  let timeA = document.getElementById("timeSector");

  clearInterval(time);

  timeSet = 30;

  timeA.innerText = `Time Set ${timeSet}`;

  time = setInterval(()=>{

    timeSet--;
    timeA.innerText = `Time Set ${timeSet}`;


    if(timeSet <= 0){

      userAnswer.push({
        question:quizQuestions[count].question,
        selectAnswer:null,
        correct:quizQuestions[count].correct,
        option:quizQuestions[count].option
      })
      nextBTN();
    }


  },1000)

}
SetTime();



function ScoreResult(){

  const result = document.getElementById("result");

  result.innerHTML = `
   <h4 class="text-center">🎉Total Score </h4>

  
 <h4 class="text-center">${score}/${quizQuestions.length}</h4>
 <br>
 <div class = "list">
 
 <h3 class = "text-center">Review Summary</h3>

 <ul class="list-group">
  ${userAnswer.map((answer,index)=>
    `

   <li class="list-group-item">

   <h5 class="text-center">Question No :- ${index + 1} ${answer.question}</h5>

   <br>

   <h6 class="text-center">Your Answer :- ${answer.selectAnswer !== null ? answer.selectAnswer:"not answered"}</h6>
   
   <br>


   <h6 class ="text-center">Correct Answer :-${answer.correct}</h6>
   
   </li>
    ` 
  )}
  


 </ul >


 </div>
 
 
 `
}



