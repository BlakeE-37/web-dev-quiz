// Retrieve all needed elements from the html
var startButton = document.getElementById('startButton')
var startScreen = document.getElementById('startScreen')
var quizScreen = document.getElementById('quiz')
var timerDisplay = document.getElementById('timer')

// timer initialization
quizTimeAmount = 51
function timer() {
    var quizTimer = setInterval(() => {
        quizTimeAmount--;
        timerDisplay.textContent = `Time Left: ${quizTimeAmount}`

        // timer stop logic
        if (quizTimeAmount <= 0) {
            clearInterval(quizTimer);
        }
    }, 1000)
}

// function to add html elements to display Q&As
function displayQuestion(question) {
    let questionEl;
}

// quiz questions
var questions = ['Which is an example of a data type?']
var i = 0;
function startQuiz() {
    displayQuestion(questions[i]);
    i++;
}

function initialize() {
    startScreen.setAttribute('style', 'display: none;');
    quizScreen.setAttribute('style', 'display: block;');
    startQuiz();
    timer();
}

startButton.addEventListener('click', initialize)