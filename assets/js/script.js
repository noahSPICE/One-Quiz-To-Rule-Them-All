function startQuiz() {
    document.querySelector(".Start").style.display = 'none';
    document.getElementById("questionDiv1").style.display = 'block';
}

let startButton = document.getElementById("engageButton");
startButton.addEventListener('click', function (e) {
    e.preventDefault();
    startQuiz();
});

let secondsLeft = 75;
let score = 0;

function setTime() {
    // Sets interval in variable
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
        }

    }, 1000);
}

let correctAnswers = document.querySelectorAll('.correctAnswer');

function correctClickEvent() {
    score = score + 10000000;
    console.log(score);
}

correctAnswers.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        correctClickEvent();
    });
})

let wrongAnswers = document.querySelectorAll('.wrongAnswer');

function wrongClickEvent() {
    secondsLeft = secondsLeft - 10;
    console.log(secondsLeft);
}

wrongAnswers.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        wrongClickEvent();
    });
});

let question1Buttons = document.querySelectorAll('.question1Button');

function question1ClickEvent() {
    document.getElementById('questionDiv1').style.display = 'none';
    document.getElementById('questionDiv2').style.display = 'block';
    console.log('here');
}

question1Buttons.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        question1ClickEvent();
    });
});

let question2Buttons = document.querySelectorAll('.question2Button');

function question2ClickEvent() {
    document.getElementById('questionDiv2').style.display = 'none';
    document.getElementById('questionDiv3').style.display = 'block';
    console.log('here');
}

question2Buttons.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        question2ClickEvent();
    });
});

let question3Buttons = document.querySelectorAll('.question3Button');

function question3ClickEvent() {
    document.getElementById('questionDiv3').style.display = 'none';
    document.getElementById('questionDiv4').style.display = 'block';
    console.log('here');
}

question3Buttons.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        question3ClickEvent();
    });
});

let question4Buttons = document.querySelectorAll('.question4Button');

function question4ClickEvent() {
    document.getElementById('questionDiv4').style.display = 'none';
    document.getElementById('scoreBox').style.display = 'block';
    console.log('here');
}

question4Buttons.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        question4ClickEvent();
    });
});

