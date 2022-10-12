const questionsJSON = './questions.json';
const gameContainer = document.querySelector(".game-container");
const startBtn = document.querySelector(".start");
const rulesBtn = document.querySelector(".rules");
const rulesContainer = document.querySelector(".rules-container");
const rulesCloseBtn = document.querySelector(".rules-close");
const questionContainer = document.querySelector(".question-container");
const answersContainer = document.querySelector(".answers");
const nextQuestionBtn = document.querySelector(".next-question");
const secondGuessBtn = document.querySelector(".second-guess-button");
const fiftyFiftyBtn = document.querySelector(".fifty-fifty");
const gameStatusContainer = document.querySelector(".game-status-container");
const nextQuestionContainer = document.querySelector(
    ".next-question-container"
);
const pointsContainer = document.querySelector(".points-container");

let gameOn = false;
let timesToGuess = 1;
let correctAnswer;
let questionList;
let data;
let currentQuestion = {};
let questionsDifficulty;
let randomQuestionNum = 0;
let questionsAsked = [];
let points = 0;
let questionValues = [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000];

window.addEventListener("load", () => dataLoad());
function dataLoad(){
    fetch(questionsJSON).then(res => res.json()).then(d => data = d);
}
startBtn.addEventListener("click", () => {
    if (!gameOn) {
        resetPoints();
        rulesBtn.classList.add("hidden");
        secondGuessBtn.classList.remove("hidden");
        fiftyFiftyBtn.classList.remove("hidden");
        nextQuestionFunc();
        pointsContainer.classList.remove("hidden");
    } else {
        resetPoints();
        gameOver();
    }
});

function resetPoints(){
    points = 0;
    pointsContainer.innerHTML = `<p>Question ${points+1} / 15</p> <p>This question is worth $${questionValues[points]}</p>`;
}

nextQuestionBtn.addEventListener("click", () => nextQuestionFunc());

function nextQuestionFunc(){
    nextQuestionContainer.classList.add("hidden");
    gameOn = true;
    gameContainer.classList.remove("hidden");
    gameStatusContainer.classList.add("hidden");
    startBtn.textContent = "QUIT";
    startBtn.classList.add("quit");
    timesToGuess = 1;
    pointsContainer.innerHTML = `<p>Question ${points+1} / 15</p> <p>This question is worth $${questionValues[points]}</p>`;
    let answers = "";
    randomQuestionGenerator();
    correctAnswer = "";
    correctAnswer =
        data["games"][questionsDifficulty]["questions"][randomQuestionNum]["correct"];
    questionList =
        data["games"][questionsDifficulty]["questions"][randomQuestionNum]["content"];
    console.log(correctAnswer);
    questionList.forEach((item, index) => {
        answers += `<li id="${index}" class="answer">${item}</li>`;
    });
    questionContainer.textContent =
        data["games"][questionsDifficulty]["questions"][randomQuestionNum]["question"];
    answersContainer.innerHTML = answers;

}

function randomQuestionGenerator(){
    questionsDifficulty = generateQuestionsDifficulty();
    randomQuestionNum = randomNumHelperFunc(15);

    const questionAlreadyAsked = questionsAsked.findIndex(item => item[questionsDifficulty] === randomQuestionNum) === -1;

    if (questionAlreadyAsked) {
        currentQuestion[questionsDifficulty] = randomQuestionNum;
        questionsAsked.push(currentQuestion);
        currentQuestion = {};
    } else {
        randomQuestionGenerator();
    }
}

function generateQuestionsDifficulty(){
    if(points <= 4){
        return 0;
    }
    if(points <= 9){
        return 1;
    }
    return 2;
}

function randomNumHelperFunc(num) {
    return Math.floor(Math.random() * num);
}

answersContainer.addEventListener("click", e => {
    if (e.target.id == correctAnswer) {
        e.target.classList.add("hidden");
        correctAnswerFunc();
    } else {
        e.target.classList.add("hidden");
        timesToGuess -= 1;
        if (timesToGuess === 0) {
            gameOver();
        }
    }
});

function correctAnswerFunc(){
    points += 1;
    if (points < 15) {
        nextQuestionBtn.classList.remove("hidden");
        nextQuestionContainer.classList.remove("hidden");
        gameStatusContainer.classList.remove("hidden");
        gameContainer.classList.add("hidden");
        gameStatusContainer.textContent = "CORRECT";
        pointsContainer.innerHTML = `<p>Next question is worth $${questionValues[points]}</p>`;
    } else {
        startBtn.textContent = "Earn another million";
        gameStatusContainer.classList.remove("hidden");
        gameContainer.classList.add("hidden");
        gameStatusContainer.textContent =
            "CONGRATULATIONS! You've become a Millionaire!";
        pointsContainer.classList.add("hidden");
        gameOn = false;
    }
}

function gameOver(){
    gameOn = false;
    gameContainer.classList.add("hidden");
    startBtn.classList.remove("quit");
    gameStatusContainer.classList.remove("hidden");
    gameStatusContainer.textContent =
        (points < 5) ? `Game over. You earned nothing.` :
        (points < 10) ? "Game over. You earned $1000. Congratulations!" : `Game over. You earned $32000. Congratulations!`;
    startBtn.textContent = "START";
    pointsContainer.classList.add("hidden");
    nextQuestionBtn.classList.add("hidden");
}

secondGuessBtn.addEventListener("click", () => {
    timesToGuess = 2;
    secondGuessBtn.classList.add("hidden");
});

fiftyFiftyBtn.addEventListener("click", () => {
    fiftyFiftyGenerator(correctAnswer);
    fiftyFiftyBtn.classList.add("hidden");
});

function fiftyFiftyGenerator(num){
    let randomFirst;
    let randomSecond;
    randomFirst = randomNumHelperFunc(4);
    while (randomFirst === num) {
        randomFirst = randomNumHelperFunc(4);
    }
    randomSecond = randomNumHelperFunc(4);
    while (randomSecond === randomFirst || randomSecond === num) {
        randomSecond = randomNumHelperFunc(4);
    }
    document.querySelector(`[id='${randomFirst}']`).style.visibility = "hidden";
    document.querySelector(`[id='${randomSecond}']`).style.visibility = "hidden";
}

rulesBtn.addEventListener("click", () => {
    startBtn.classList.add("hidden");
    rulesBtn.classList.add("hidden");
    rulesContainer.classList.remove("hidden");
    rulesCloseBtn.addEventListener("click", () => {
        startBtn.classList.remove("hidden");
        rulesBtn.classList.remove("hidden");
        rulesContainer.classList.add("hidden");
    })
})