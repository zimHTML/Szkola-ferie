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
    choices: ["Prawda", "Falsz"],
    answer: 0
  },
  {
    question: "Ciepłe ubieranie się w zimne dni ochroni cię przed mrozem",
    choices: ["Prawda", "Falsz"],
    answer: 0
  },
  {
    question: "999 to numer do policji.",
    choices: ["Prawda","Falsz"],
    answer: 0
  },

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
    }
    currentQuestion++;
    if (currentQuestion === questions.length) {
      document.getElementById("quiz").innerHTML = "Congratulations! You got " + score + "/" + questions.length;
    } else {
      showQuestion();
      updateScore();
    }
  }
