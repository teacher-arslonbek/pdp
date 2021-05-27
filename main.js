function randomNumber(a = 0, interval = 0) {
  let intervals = [a - interval, a + interval];
  return Math.floor(Math.random() * intervals[Math.floor(Math.random() * 2)]);
}

function randomOperation() {
  let operation = ["+", "-", "*"];
  return operation[Math.floor(Math.random() * operation.length)];
}

function randomAnswers(correctAnswer) {
  let answers = [correctAnswer];
  for (let i = 0; i < 3; i++) {
    answers.push(randomNumber(correctAnswer, 100));
  }
  return answers.sort(() => Math.random() - 0.5);
}
