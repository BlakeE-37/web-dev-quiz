// Retrieve all needed elements from the html
var startButton = document.getElementById('startButton')
var startScreen = document.getElementById('startScreen')
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

// quiz questions

// function to add html elements to display Q&As
function displayQuiz() {

}

function initialize() {
    startScreen.setAttribute('style', 'display: none;');
    displayQuiz();
    timer();
}

startButton.addEventListener('click', initialize)