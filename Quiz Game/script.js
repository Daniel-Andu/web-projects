

const startScreen=document.getElementById("start-screen");
const quizScreen=document.getElementById("quiz-screen");
const resultScreen=document.getElementById("result-screen");
const startButton=document.getElementById("start-btn");
const restartButton=document.getElementById("restart-btn");
const questionText=document.getElementById("question-text");
const currentQuestionSpan=document.getElementById("current-question");
const totalQuestionsSpan=document.getElementById("total-questions");
const scoreSpan=document.getElementById("score");
const finalScoreSpan=document.getElementById("final-score");
const resultMessage=document.getElementById("result-message");
const progressBar=document.getElementById("progress");
const maxScoreSpan=document.getElementById("max-score");
const answersContainer=document.getElementById("answers-container");





const quizQuestions=[
    {
        question:"What is the capital of france?",
        answers:[
            {text:"A. London", correct:false},
            {text:"B. Berlin", correct:false},
            {text:"C. Paris", correct:true},
            {text:"D. Madrid", correct:false},
        ],
    },

    {
        question:"Which planet is the nearest from sun?",
        answers:[
            {text:"A. Venus", correct:false},
            {text:"B. Mercury", correct:true},
            {text:"C. Earth", correct:false},
            {text:"D. Jupiter", correct:false},
        ],
    },



    {
        question:"The instrument that measures heart beat is called?",
        answers:[
            {text:"A. Sthethescope", correct:true},
            {text:"B. Spagnomanometer", correct:false},
            {text:"C. Newton", correct:false},
            {text:"D. Heart meter", correct:false},
        ],
    },



    {
        question:"What is the longest river in the worled?",
        answers:[
            {text:"A. Amazon", correct:false},
            {text:"B. Tekeze", correct:false},
            {text:"C. Baro", correct:false},
            {text:"D. Nile", correct:true},
        ],
    },



    {
        question:"What is the chemical symbol for Iron?",
        answers:[
            {text:"A. Na", correct:false},
            {text:"B. Fe", correct:true},
            {text:"C. He", correct:false},
            {text:"D. All of the above", correct:false},
        ],
    },

];


let currentQuestionIndex=0;
let score=0;
let answerDisabled=false;

totalQuestionsSpan.textContent=quizQuestions.length;
maxScoreSpan.textContent=quizQuestions.length;


startButton.addEventListener("click", startQuiz)
 restartButton.addEventListener("click", restartQuiz)

function startQuiz(){

    currentQuestionIndex=0;
    score = 0;
    scoreSpan.textContent=0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion()

}

function showQuestion(){

    answerDisabled= false;
    const currentQuestion=quizQuestions[currentQuestionIndex]
    currentQuestionSpan.textContent=currentQuestionIndex+1

    const progressPercent=(currentQuestionIndex/quizQuestions.length)*100;
    progressBar.style.width=progressPercent + "%"

    questionText.textContent=currentQuestion.question

    answersContainer.innerHTML= "";

       currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button")

        button.textContent=answer.text
        button.classList.add("answer-btn")

        button.dataset.correct=answer.correct

        button.addEventListener("click", selectAnswer)
        answersContainer.appendChild(button)


    });

    
}

function selectAnswer(event){
    if(answerDisabled) return

    answerDisabled= true

    const selectedButton = event.target
    const isCorrect = selectedButton.dataset.correct === "true"

    Array.from(answersContainer.children).forEach((button=>{

        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        else if(button === selectedButton)
        {
        button.classList.add("incorrect");
        }
    }));

    if(isCorrect){
        score++;
        scoreSpan.textContent= score;
    }

    setTimeout(()=>{
        currentQuestionIndex++;

        if(currentQuestionIndex < quizQuestions.length){
            showQuestion()
        }
        else{
            showResults()
        }

    }, 1000 )
}

function showResults(){
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScoreSpan.textContent= score;
    const percentage=(score/quizQuestions.length) *100

    if(percentage === 100){

        resultMessage.textContent= " Perfect! you are a genius";


    }

   

     else if(percentage >= 80){

        resultMessage.textContent= " great job! you know your stuf";
        

    }

    else if(percentage >=60 ){

        resultMessage.textContent= " Good effort! Keep learning";
        

    }


    else if(percentage >=40){

        resultMessage.textContent= " Not bad! try again to improve";
        

    }

    else{

        resultMessage.textContent= " Keep studing you will get better";

        

    }

}

function restartQuiz(){
   resultScreen.classList.remove("active");
   startQuiz();
}