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

var CorrectIncorrect = document.getElementById('rightOrWrong')

// timer initialization
quizTimeAmount = 51
function timer() {
    var quizTimer = setInterval(() => {
        quizTimeAmount--;
        timerDisplay.textContent = `Time Left: ${quizTimeAmount}`

        // timer stop logic
        if (quizTimeAmount <= 0) {
            clearInterval(quizTimer);
            gameOver();
        }
    }, 1000)
}

// if the answer was right display it and go to next question
function correctAnswer() {
    CorrectIncorrect.textContent = 'Correct!'
    startQuiz();
}

// if the answer was wrong display it, subtract time, and go to next question
function wrongAnswer() {
    CorrectIncorrect.textContent = 'Wrong!'
    quizTimeAmount = quizTimeAmount - 10;
    startQuiz();
}

// function to add html elements to display Q&As
function displayElement(element, text) {
    element.textContent = text;
}

//game over function to end the game
function gameOver() {
    CorrectIncorrect.textContent = 'Game Over!'
}

// quiz questions
var questions = ['Which is an example of a data type?', 'What programming language are websites usually coded in?'];
var correctAnswers = ['Boolean', 'HTML'];
var i = 0;
// if there are more questions keep going, if there are no more questions run game over function
function startQuiz() {
    if (i <= questions.length - 1) {
        displayElement(questionEl, questions[i]);
        displayElement(answerEl1, 'Chicken Tenders');
        displayElement(answerEl2, correctAnswers[i]);
        displayElement(answerEl3, 'Mitochondria');
        displayElement(answerEl4, 'Taco Bell');
        i++;
    } else {
        gameOver();
    }
}

function initialize() {
    startScreen.setAttribute('style', 'display: none;');
    quizScreen.setAttribute('style', 'display: block;');
    startQuiz();
    timer();
}

// static answering system but could change later (lines 46-49 atm)
answerEl1.addEventListener('click', wrongAnswer);
answerEl2.addEventListener('click', correctAnswer);
answerEl3.addEventListener('click', wrongAnswer);
answerEl4.addEventListener('click', wrongAnswer);

startButton.addEventListener('click', initialize);