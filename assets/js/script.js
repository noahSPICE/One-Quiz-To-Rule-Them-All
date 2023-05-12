let timeEl = document.getElementById("timerDisplay");

function startQuiz() {
    secondsLeft = 75;
    score = 0;
    document.querySelector(".Start").style.display = 'none';
    document.getElementById("questionDiv1").style.display = 'block';
    timeEl.style.display = 'block';
    setTime();
}

let closeButton = document.getElementById("closeButton");
closeButton.addEventListener('click', function (e) {
    e.preventDefault();
    location.reload()
});

let tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener('click', function (e) {
    e.preventDefault();
    startQuiz();
    document.getElementById('leaderBoard').style.display = 'none';
});

let startButton = document.getElementById("engageButton");
startButton.addEventListener('click', function (e) {
    e.preventDefault();
    startQuiz();
});

let secondsLeft = 75;
let score = 0;

function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = 'Thou hast ' + secondsLeft + ' seconds remaining!';

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
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
    let scoreBox = document.getElementById('scoreBox');
    let scorePresentation = document.getElementById('scorePresentation');
    scorePresentation.textContent = 'Thy score is ' + score;
    scoreBox.style.display = 'block';
    timeEl.style.display = 'none';
    console.log('here');
}

question4Buttons.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        question4ClickEvent();
    });
});

let leaderboard = [];
function saveScore() {
    let name = document.getElementById('fullName').value;
    console.log(name + "::" + score);
    let newScore = {
        newName: name,
        newScore: score
    }
    leaderboard.push(newScore);
    console.log(leaderboard);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

function displayScores(scoreTable) {
    let scores = JSON.parse(localStorage.getItem('leaderboard'));
    let leaderboardHtml = "";
    for(i=0; i<scores.length; i++) {
        console.log('here')
        leaderboardHtml = leaderboardHtml + '<p>' + scores[i].newName + ' : ' + scores[i].newScore + '</p>';
        console.log(leaderboardHtml);
    }
    scoreTable.innerHTML = leaderboardHtml;
    
}

let saveScoreButton = document.getElementById('scribeButton');
saveScoreButton.addEventListener('click', function(e) {
    e.preventDefault();
    saveScore();
    let scoreTable = document.getElementById('scoreTable');
    displayScores(scoreTable);
    document.getElementById('leaderBoard').style.display = 'block';
    document.getElementById('scoreBox').style.display = 'none';
})
