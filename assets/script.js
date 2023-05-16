// Retrieve all needed elements from the html doc
// div elements for each screen
var startScreen = document.getElementById('startScreen')
var quizScreen = document.getElementById('quiz')
var gameOverScreen = document.getElementById('gameOver')
// header elements
var highScoreButton = document.getElementById('highScoreButton')
var timerDisplay = document.getElementById('timer')
// quiz elements
var questionEl = document.getElementById('question')
var answerEl1 = document.getElementById('answer1')
var answerEl2 = document.getElementById('answer2')
var answerEl3 = document.getElementById('answer3')
var answerEl4 = document.getElementById('answer4')
var CorrectIncorrect = document.getElementById('rightOrWrong')
// Main Screen Button
var startButton = document.getElementById('startButton')
// Game Over screen elements
var scoreText = document.getElementById('scoreText')
var saveScoreButton = document.getElementById('saveScore')

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

// save score to local storage function
function saveScore() {
    return
}

// if the answer was right display it and go to next question
score = 0;
function correctAnswer() {
    CorrectIncorrect.textContent = 'Correct!'
    score = score + quizTimeAmount;
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
    quizScreen.setAttribute('style', 'display: none;');
    gameOverScreen.setAttribute('style', 'display: block;');
    scoreText.textContent = `Your Score is: ${score}`
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
        quizTimeAmount = 1;
        gameOver();
    }
}

function initialize() {
    startScreen.setAttribute('style', 'display: none;');
    quizScreen.setAttribute('style', 'display: block;');
    startQuiz();
    timer();
}

// static answering system but could change later
answerEl1.addEventListener('click', wrongAnswer);
answerEl2.addEventListener('click', correctAnswer);
answerEl3.addEventListener('click', wrongAnswer);
answerEl4.addEventListener('click', wrongAnswer);

// Save score button
saveScoreButton.addEventListener('click', saveScore)

startButton.addEventListener('click', initialize);