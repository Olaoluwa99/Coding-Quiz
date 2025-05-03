const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language",
    ],
    answer: 0,
  },
  {
    question: "What symbol is used to comment a single line in JavaScript?",
    options: ["//", "<!-- -->", "#", "/* */"],
    answer: 0,
  },
  {
    question: "Which keyword is used to define a variable in JavaScript?",
    options: ["var", "define", "int", "dim"],
    answer: 0,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Colorful Style Sheet",
      "Cascading Style Sheets",
      "Computer Style Sheet",
      "Creative Styling Syntax",
    ],
    answer: 1,
  },
  {
    question: "Which tag is used to insert a JavaScript file in HTML?",
    options: ["<js>", "<link>", "<script>", "<style>"],
    answer: 2,
  },
  {
    question: "How do you write 'Hello World' in an alert box in JavaScript?",
    options: [
      "msgBox('Hello World');",
      "alertBox('Hello World');",
      "alert('Hello World');",
      "msg('Hello World');",
    ],
    answer: 2,
  },
  {
    question:
      "Which operator is used for assignment in most programming languages?",
    options: ["==", "=", "===", "!="],
    answer: 1,
  },
  {
    question: "What is the result of 3 + '2' in JavaScript?",
    options: ["5", "6", "32", "undefined"],
    answer: 2,
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: 0,
  },
  {
    question: "Which of the following is used to style a webpage?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: 1,
  },
];

let currentQuestion = 0;
let score = 0;
let selectedIndex = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreContainer = document.getElementById("score-container");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  selectedIndex = null;

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className =
      "border border-gray-600 text-gray-100 px-4 py-2 rounded bg-gray-700 hover:bg-green-700 transition-colors";
    btn.onclick = () => {
      // Clear previous selection
      document.querySelectorAll("#options button").forEach((b) => {
        b.classList.remove(
          "bg-green-600",
          "ring-2",
          "ring-green-400",
          "font-semibold"
        );
      });

      // Highlight selected
      btn.classList.add(
        "bg-green-600",
        "ring-2",
        "ring-green-400",
        "font-semibold"
      );
      selectedIndex = index;
    };
    optionsEl.appendChild(btn);
  });
}

nextBtn.addEventListener("click", () => {
  if (selectedIndex === null) return alert("Please select an answer.");

  if (selectedIndex === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-container").classList.add("hidden");
    scoreContainer.classList.remove("hidden");
    scoreContainer.textContent = `You scored ${score} out of ${questions.length}.`;
  }
});

loadQuestion();
