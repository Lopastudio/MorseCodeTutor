const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const optionAElement = document.getElementById('optionA-label');
const optionBElement = document.getElementById('optionB-label');
const optionCElement = document.getElementById('optionC-label');
const radioButtons = document.getElementsByName('option');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');

let currentQuestion = 0;
let score = 0;
let time = 60;
let timer;

function startTimer() {
  timer = setInterval(() => {
    time--;
    timeElement.innerHTML = `Time left: ${time}s`;

    if (time <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

function nextQuestion() {
  resetOptions();

  const question = questions[currentQuestion];
  questionElement.innerText = question.question;
  optionAElement.innerText = question.options[0];
  optionBElement.innerText = question.options[1];
  optionCElement.innerText = question.options[2];

  for (let i = 0; i < radioButtons.length; i++) {
    const radioButton = radioButtons[i];
    const label = document.getElementById(radioButton.getAttribute('id') + '-label');
    label.innerText = question.options[i];
    radioButton.value = question.options[i];
  }

  currentQuestion++;
  if (currentQuestion >= questions.length) {
    currentQuestion = 0;
  }
}

function resetOptions() {
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
}

function checkAnswer() {
  const question = questions[currentQuestion - 1];
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    if (selectedOption.value === question.answer) {
      score++;
      scoreElement.innerText = `Score: ${score}`;
      document.getElementById(`option${question.options.indexOf(question.answer) + 1}-label`).classList.add('correct');
    } else {
      document.getElementById(`option${question.options.indexOf(question.answer) + 1}-label`).classList.add('correct');
      document.getElementById(`option${question.options.indexOf(selectedOption.value) + 1}-label`).classList.add('incorrect');
    }
  } else {
    document.getElementById(`option${question.options.indexOf(question.answer) + 1}-label`).classList.add('correct');
  }
}

function endGame() {
  clearInterval(timer);
  quizContainer.innerHTML = `<h2>Your score is: ${score} out of ${questions.length}</h2>`;
}

startTimer();
nextQuestion();

submitButton.addEventListener('click', () => {
  if (currentQuestion === 0) {
    startTimer();
  }

  checkAnswer();

  setTimeout(() => {
    nextQuestion();
  }, 1000);
});
