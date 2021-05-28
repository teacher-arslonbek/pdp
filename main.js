// DOM elements
const orderNumber = document.querySelector(".order_number");
const timer = document.querySelector("#timer");
const numberOne = document.querySelector("#number_1");
const numberTwo = document.querySelector("#number_2");
const operationElement = document.querySelector("#operation");
const answersContent = document.querySelector(".answers_content");
const pointsContent = document.querySelector(".points_content");
// utils vars
let question = {
  number_one: 50,
  number_two: 20,
  operation: "*",
  correct_answer: 50,
  answers: [21, 50, 33, 44],
  answer_status: 0 /**
    0 => xato javob
    1 => togri javob
  */,
};
let questions = [];

// utils function
/**
 *
 * @param {*} a currect answer
 * @param {*} interval random answers interval points
 * @returns
 */
function randomNumber(a = 0, point = 10) {
  let intervals = [a - point, a + point];
  if (a === 0) intervals.splice(0, 1);
  return Math.floor(
    Math.random() * intervals[Math.floor(Math.random() * intervals.length)]
  );
}

function randomOperation() {
  let operations = ["+", "-", "*"];
  return operations[Math.floor(Math.random() * operations.length)];
}

function randomAnswers(correctAnswer) {
  let answers = [correctAnswer];
  for (let i = 0; i < 3; i++) {
    answers.push(randomNumber(correctAnswer, 100));
  }
  return answers.sort(() => Math.random() - 0.5);
}

function createQuestion() {
  const number_one = randomNumber();
  const number_two = randomNumber();
  const operation = randomOperation();
  const correct_answer = eval(`${number_one} ${operation} ${number_two}`);
  const answers = randomAnswers(correct_answer);
  question = {
    number_one,
    number_two,
    operation,
    correct_answer,
    answers,
    answer_status: 0,
  };
  questions.push(question);
}

function checkAnswer(selectedAnswer) {
  question.correct_answer === selectedAnswer && (question.answer_status = 1);
  renderPoints();
  nextQuestion();
}

function nextQuestion() {
  createQuestion();
  renderQuestion();
}

// DOM function
function startTest() {
  createQuestion();
  renderQuestion();
}

function renderQuestion() {
  const { number_one, number_two, operation, answers } = question;
  numberOne.innerHTML = number_one;
  numberTwo.innerHTML = number_two;
  operationElement.innerHTML = operation;
  orderNumber.innerHTML = questions.length;
  renderAnswers(answers);
}

function renderAnswers(answers = []) {
  const result = `<div class="row">
  <div class="answer_box" onclick="checkAnswer(${answers[0]})">
    <div class="answer_btn">A</div>
    <span class="answer_text">${answers[0]}</span>
  </div>
  <div class="answer_box" onclick="checkAnswer(${answers[1]})">
    <div class="answer_btn">B</div>
    <span class="answer_text">${answers[1]}</span>
  </div>
</div>

<div class="row">
  <div class="answer_box" onclick="checkAnswer(${answers[2]})">
    <div class="answer_btn">C</div>
    <span class="answer_text">${answers[2]}</span>
  </div>
  <div class="answer_box" onclick="checkAnswer(${answers[3]})">
    <div class="answer_btn">D</div>
    <span class="answer_text">${answers[3]}</span>
  </div>
</div>`;
  answersContent.innerHTML = result;
}

function renderPoints() {
  let result = ``;
  for (let { answer_status } of questions) {
    result += `<li class="pointer pointer-${
      answer_status ? "success" : "failed"
    }"></li>`;
  }
  pointsContent.innerHTML = result;
}

startTest();
