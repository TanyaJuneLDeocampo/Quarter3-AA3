const questions = [
    {
        question: "What is a common barrier to education in rural areas?",
        options: ["Lack of internet", "Long travel distances", "High cost of tuition", "All of the above"],
        correct: 3
    },
    {
        question: "Which factor can improve education access the most?",
        options: ["More private schools", "Better teacher training", "Fewer subjects", "Less school hours"],
        correct: 1
    },
    {
        question: "What is a major reason why students drop out of school?",
        options: ["Lack of interest", "Financial difficulties", "Too many subjects", "No strict rules"],
        correct: 1
    },
    {
        question: "What can communities do to help improve education?",
        options: ["Build more schools", "Provide free books & supplies", "Offer scholarships", "All of the above"],
        correct: 3
    },
    {
        question: "Why is early childhood education important?",
        options: ["Develops social skills", "Prepares kids for primary school", "Boosts learning abilities", "All of the above"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

const welcomeBox = document.getElementById("welcome-box");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreText = document.getElementById("score-text");

startButton.addEventListener("click", () => {
    welcomeBox.classList.add("hidden");
    quizBox.classList.remove("hidden");
    loadQuestion();
});

function loadQuestion() {
    let q = questions[currentQuestionIndex];
    questionText.textContent = q.question;
    optionsContainer.innerHTML = "";

    q.options.forEach((option, index) => {
        let btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(btn);
    });

    nextButton.style.display = "none";
}

function checkAnswer(selectedIndex) {
    let correctIndex = questions[currentQuestionIndex].correct;
    let buttons = optionsContainer.getElementsByTagName("button");

    if (selectedIndex === correctIndex) {
        buttons[selectedIndex].classList.add("correct");
        score++;
    } else {
        buttons[selectedIndex].classList.add("incorrect");
    }

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreText.textContent = `Your Score: ${score} / ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultBox.classList.add("hidden");
    quizBox.classList.remove("hidden");
    loadQuestion();
}
