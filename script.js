let questionsData;
let currentQuestionIndex = 0;

async function fetchQuestions() {
  try {
    const response = await fetch('questions.json');
    questionsData = await response.json();
    loadQuestion();
  } catch (error) {
    console.error('Error fetching questions:', error);
  }
}

function loadQuestion() {
  const currentQuestion = questionsData.questions[currentQuestionIndex];
  document.getElementById('question-num-text').innerText = `Question ${currentQuestionIndex + 1} of ${questionsData.questions.length} to start`;
  document.getElementById('question-text').innerText = currentQuestion.questionName;
}

function nextQuestion() {
  if (currentQuestionIndex < questionsData.questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    alert("End of questions"); // Temporary
  }
}

fetchQuestions();
