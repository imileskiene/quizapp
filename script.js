// import { quiz } from "./questions";

const questionElemen = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
const tryAgainButton = document.getElementById("again-btn");
const totalQuestions = document.querySelector(".total-questions")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  // calculateaQuestion = currentQuestionIndex++
  score = 0;
  tryAgainButton.style.display = "none"; 
  // nextButton.style.display = "none"; 
  showQuestion();
}

function showQuestion() {
  answerButtons.innerHTML = "";

  

  let currentQuestion = quiz[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElemen.innerHTML = questionNo + ". " + currentQuestion.question;
  totalQuestions.innerHTML = `Question ${questionNo} of ${quiz.length}`;

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    //arba button.className = "btn";
    button.classList.add("btn");
    answerButtons.appendChild(button);
    const correctAnswer = currentQuestion.answer;
    // console.log(correctAnswer);

    button.addEventListener("click", () => {
        disableButtons();

      if (option === correctAnswer) {
        button.style.background = "rgb(105, 237, 35)";
        score++;
      } else {
        button.style.background = "rgb(237, 35, 35)";
        
        ShowCorrectAnswer(currentQuestion.answer);
      }
      nextButton.style.display = "block";
    });
  });
}


function disableButtons() {
  const btnDisable = document.querySelectorAll("#answer-button .btn");
  btnDisable.forEach((btn) => {
    btn.disabled = true;
    btn.style.opacity = "0.6";
    btn.style.background = "none";
  });
}

function ShowCorrectAnswer(correctAnswer) {
  const checkButtons = document.querySelectorAll("#answer-button .btn");
  checkButtons.forEach((buttons) => {
    if (buttons.textContent === correctAnswer) {
      buttons.style.background = "rgb(105, 237, 35)";
    }
  });
}

//function to get the other question
nextButton.addEventListener("click", () =>{
    currentQuestionIndex++;
    if(currentQuestionIndex < quiz.length){
nextButton.style.display = "none";
showQuestion();
    }else{
        showResults();
    }
})

function showResults(){
    questionElemen.innerHTML = `Quiz Finished! Your score is ${score} out of ${quiz.length}.`;
  answerButtons.innerHTML = ""; 
  nextButton.style.display = "none"; 
  tryAgainButton.style.display = "block";
}

tryAgainButton.addEventListener("click", () =>{
    startQuiz();
})


startQuiz();
