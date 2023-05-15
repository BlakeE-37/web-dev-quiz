var startButton = document.getElementById('startButton')
var startScreen = document.getElementById('startScreen')
var timerDisplay = document.getElementById('timer')

startButton.addEventListener('click', initialize)

function initialize() {
    timer();
    startScreen.setAttribute('style', 'display: none;')
}

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