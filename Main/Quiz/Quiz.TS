let score = 0;
let currentQuestion = 0;
const questions = [
  {
    question: "112 to uniwersalny narodowy numer alarmowy?",
    choices: ["Prawda", "Falsz"],
    answer: 1
  },
  {
    question: "W zimie słońce zachodzi szybciej przez co łatwiej o wypadek (np: samochodowy, na sankach)",
    choices: ["Rome", "Paris", "London", "Berlin"],
    answer: 0
  },
  {
    question: "What is the capital of Germany?",
    choices: ["Berlin", "Paris", "London", "Rome"],
    answer: 0
  },
  {
    question: "What is the capital of Spain?",
    choices: ["Madrid", "Paris", "London", "Berlin"],
    answer: 0
  },
  {
    question: "What is the capital of the United Kingdom?",
    choices: ["London", "Paris", "Berlin", "Rome"],
    answer: 0
  }
];

function updateScore() {
  document.getElementById("score").innerHTML = "Punkty:  " + score + "/" + questions.length;
}

function showQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("question").innerHTML = question.question;
  for (let i = 0; i < question.choices.length; i++) {
    document.getElementById("choice" + i).innerHTML = question.choices[i];
  }
}

function checkAnswer(choice) {
  let question = questions[currentQuestion];
  if (choice === question.answer) {
    score++;
    currentQuestion++;
  }
  if (currentQuestion === questions.length) {
    document.getElementById("quiz").innerHTML = "Quiz Completed! Final Score: " + score + "/" + questions.length;
  } else {
    showQuestion();
    updateScore();
  }
}