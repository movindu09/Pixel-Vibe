// setting the questions and answers into  an array.
const questions = [
    {
        question: "Which sculptor is best known for his colossal Statue of Freedom?",
        answers: [
            { text: "Clark Mills", correct: false },
            { text: "Thomas Crawford", correct: true },  // marking the coreect as true and incorrect answers as false.
            { text: "Hiram Powers", correct: false },
            { text: "Montreal canadiens", correct: false },
        ]
    },
    {
        question: "Based on the discussion, A powerful , free online image editor is",
        answers: [
            { text: "Pic collage", correct: false },
            { text: "PIXRL", correct: false },
            { text: "DSLR", correct: false },
            { text: "PIXLR", correct: true },
        ]
    },
    {
        question: "Name the form of painting that depicts Christian sacred personages or events?",
        answers: [
            { text: "Graphics", correct: false },
            { text: "Icon", correct: true },
            { text: "Abstract art", correct: false },
            { text: "Tapestry", correct: false },
        ]
    },
    {
        question: "Which term describes the computer generated and/or manipulated?",
        answers: [
            { text: "Technology and Science", correct: false },
            { text: "Technology art based", correct: false },
            { text: "Technology and Digital art", correct: false },
            { text: "Technology based art", correct: true },
        ]
    },
    {
        question: "Which one of these is not a well-known Indian sculptor?",
        answers: [
            { text: "Henry Moore", correct: true },
            { text: "Krishna Reddy", correct: false },
            { text: "Kumaradeva", correct: false },
            { text: "Ramkinkar Baij", correct: false },
        ]
    },
    {
        question: "In which year was the German art society Nazarene founded?",
        answers: [
            { text: "1913", correct: false },
            { text: "1809", correct: true },
            { text: "1819", correct: false },
            { text: "1924", correct: false },
        ]
    },
    {
        question: "Which Egyptian art style did Amenhotep IV create?",
        answers: [
            { text: "Stuart style", correct: false },
            { text: "Proto-Corinthian style", correct: false },
            { text: "Severe style", correct: false },
            { text: "Amarna style", correct: true },
        ]
    },
    {
        question: "What was the subject of the earliest known paintings?",
        answers: [
            { text: "landscapes", correct: false },
            { text: "animals", correct: true },
            { text: "sports", correct: false },
            { text: "flowers", correct: false },
        ]
    },
    {
        question: "Which architect founded the Bauhaus school of design?",
        answers: [
            { text: "I.M. Pei", correct: false },
            { text: "Frank Gehry", correct: false },
            { text: "Walter Gropius", correct: true },
            { text: "Frank Lloyd Wright", correct: false },
        ]
    },
    {
        question: "Name the art group formed from the initials of the founders'' home cities?",
        answers: [
            { text: "De Stijl", correct: false },
            { text: "COBRA", correct: true },
            { text: "Section d''Or", correct: false },
            { text: "Puteaux group", correct: false },
        ]
    },
];
//Adding HTML varriables.
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer_btns");
const nextButton = document.getElementById("next_btn");
const timerElement = document.getElementById("timer");

let currentQuestionIndex = 0;  //Adding the varriable currentQuestionIndex to store the question index.
let score = 0;      //Adding the varriable score to store the score.
let timeLeft = 60;
let timerId;

//creating the function startQuiz to start the quizeApp
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 60;
    nextButton.innerHTML = "Next Question"  //changing the text of the nextButton to "Next".
    showQuestion();     
    startTimer();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];   //setting the variable CurrentQuestion to the index of the questions Array.
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;   //displaying the question with the question number.

    //displaying the answers from the questions.
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");    //asigning the button tag to a variable name button.
        button.innerHTML = answer.text;     
        button.classList.add("btn");        
        answerButtons.appendChild(button);      
        if(answer.correct){
            button.dataset.correct = answer.correct;       
        }
        button.addEventListener("click", selectAnswer);    
    });
}

//reffered from W3 Schools.
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);       //removing the previous answers
    }
}

//referd from W3 Schools.
function selectAnswer(e){
    const selectedBtn = e.target;       
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");   //if the selectedBtn dataset is true it will add the class name correct.
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")      //if the selectedBtn dataset is false it will add the class name incorrect.
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){      
            button.classList.add("correct");
        }
        button.disabled = true;     
    });
    nextButton.style.display = "block";     //displaying the next Question button.
}

function showScore() {
    resetState();
    clearInterval(timerId);
    let timeTaken = 60 - timeLeft;
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} in ${timeTaken} seconds!`;

    // Additional content after showing the score
    const additionalContent = document.createElement("p");
    additionalContent.innerHTML = "Congratulations on completing the quiz!";
    questionElement.appendChild(additionalContent);

    // Color changes based on performance
    const quizBox = document.querySelector(".box");
    if (score === questions.length) {
        quizBox.style.backgroundColor = "#2c8552"; // Green for full score
    } else if (score >= questions.length / 2) {
        quizBox.style.backgroundColor = "#e0a20c"; // Yellow for more than half score
    } else {
        quizBox.style.backgroundColor = "#B22222"; // Red for less than half score
    }

    nextButton.innerHTML = "Start Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})


/*------------Quiz Timer-------------------*/

//refered from Stackoverflow.
function startTimer(){
    timerId = setInterval(() => {
        timeLeft --;
        timerElement.innerHTML = `Time Left : ${timeLeft}`;
        if(timeLeft <= 0){
            clearInterval(timerId);
            showScore();
        }
    }, 1000);     
}

startQuiz();