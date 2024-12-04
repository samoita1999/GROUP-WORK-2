javascript
const scoreContainer = document.getElementById('score-container');

// Function to show the final score
function showScore() {
    questionContainerElement.classList.add('hide');
    scoreContainer.innerHTML = `
        <div class="score-content">
            <h2>Your score: ${score} / ${questions.length}</h2>
            <p>${score === questions.length ? 'Great job!' : score > questions.length / 2 ? 'Good effort!' : 'Keep practicing!'}</p>
        </div>
    `;
    scoreContainer.classList.remove('hide');
}

// Event listeners for buttons
nextButton.addEventListener('click', () => {
    currentQuestionIndex++; // Move to the next question index
    setNextQuestion(); // Load the next question
});

submitButton.addEventListener('click', selectAnswer);

// Start the quiz when the DOM content is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    startQuiz();
});