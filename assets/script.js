// Retrieve all needed elements from the html
var startButton = document.getElementById('startButton')
var startScreen = document.getElementById('startScreen')
var quizScreen = document.getElementById('quiz')
var timerDisplay = document.getElementById('timer')

var questionEl = document.getElementById('question')
var answerEl1 = document.getElementById('answer1')
var answerEl2 = document.getElementById('answer2')
var answerEl3 = document.getElementById('answer3')
var answerEl4 = document.getElementById('answer4')

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
function displayElement(element, question) {
    element.textContent = question;
}

// quiz questions
var questions = ['Which is an example of a data type?'];
var correctAnswers = ['Boolean'];
var i = 0;
function startQuiz() {
    displayElement(questionEl, questions[i]);
    displayElement(answerEl1, correctAnswers[i]);
    displayElement(answerEl2, correctAnswers[i]);
    displayElement(answerEl3, correctAnswers[i]);
    displayElement(answerEl4, correctAnswers[i]);
    i++;
}

function initialize() {
    startScreen.setAttribute('style', 'display: none;');
    quizScreen.setAttribute('style', 'display: block;');
    startQuiz();
    timer();
}

startButton.addEventListener('click', initialize)