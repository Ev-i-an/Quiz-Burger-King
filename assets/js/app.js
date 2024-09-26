// WHOPPER
const questions = [
    {
        question: "Quelle est la composition du Whooper ?",
        answers: [
            {text: "CB5-mayonnaise-salade-tomates x2//oignon x3-ketchup-cornichon x4- Patty W", correct: true},
            {text: "CB5-moutarde-salade-tomates x2//oignon x3-ketchup-cornichon x4- Patty B", correct: false},
            {text: "CB5-mayonnaise-salade//oignon x2-ketchup-cornichon x4- Patty W", correct: false},
            {text: "CB5-moutarde-salade-tomates x2//oignon x3-ketchup-cornichon x2- Patty 150", correct: false},
        ] 
    },
    {
        question: "Quelle est l'élément ne se trouvant pas dans le Whooper ?",
        answers: [
            {text: "rondelles de cornichon", correct: false},
            {text: "salade", correct: false},
            {text: "patty whopper", correct: false},
            {text: "fromage", correct: true},
        ] 
    },
    {
        question: "Quelle est l'élément se trouvant pas dans le Whooper ? II",
        answers: [
            {text: "rondelles de cornichon x4", correct: false},
            {text: "salade", correct: false},
            {text: "patty whopper", correct: false},
            {text: "rondelles de cornichon x2", correct: true},
        ] 
    },
    {
        question: "Quelle est l'élément se trouvant pas dans le Whooper ? III",
        answers: [
            {text: "rondelles de cornichon x4", correct: false},
            {text: "salade", correct: false},
            {text: "moutarde", correct: false},
            {text: "rondelles de cornichon x2", correct: true},
        ] 
    },
    {
        question: "Quel type de pain est utilisé pour le Whopper ?",
        answers: [
            {text: "CB5", correct: true},
            {text: "CB4", correct: false},
            {text: "CB3", correct: false},
            {text: "CB2", correct: false},
        ]
    },
    {
        question: "Combien de tranches de tomate sont dans le Whopper ?",
        answers: [
            {text: "2", correct: true},
            {text: "3", correct: false},
            {text: "1", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Combien de rondelles d'oignon sont dans le Whopper ?",
        answers: [
            {text: "3", correct: true},
            {text: "2", correct: false},
            {text: "4", correct: false},
            {text: "5", correct: false},
        ]
    },
    {
        question: "Quel condiment n'est pas inclus dans le Whopper ?",
        answers: [
            {text: "Moutarde", correct: true},
            {text: "Mayonnaise", correct: false},
            {text: "Ketchup", correct: false},
            {text: "Cornichon", correct: false},
        ]
    },
    {
        question: "Quels sont les ingrédients du Double Whopper Cheese ?",
        answers: [
            {text: "CB5-mayonnaise-salade-tomates x2//oignon x3-ketchup-cornichon x4-fromage x2- Patty W x2", correct: true},
            {text: "CB5-moutarde-salade-tomates x2//oignon x3-ketchup-cornichon x4-fromage x2- Patty B x2", correct: false},
            {text: "CB5-mayonnaise-salade//oignon x2-ketchup-cornichon x4-fromage x2- Patty W x2", correct: false},
            {text: "CB5-moutarde-salade-tomates x2//oignon x3-ketchup-cornichon x2-fromage x2- Patty 150 x2", correct: false},
        ]
    },
    {
        question: "Quel type de pain est utilisé pour le Double Whopper Cheese ?",
        answers: [
            {text: "CB5", correct: true},
            {text: "CB4", correct: false},
            {text: "CB3", correct: false},
            {text: "CB2", correct: false},
        ]
    },
    {
        question: "Combien de tranches de fromage sont dans le Double Whopper Cheese ?",
        answers: [
            {text: "2", correct: true},
            {text: "3", correct: false},
            {text: "1", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Combien de patties de bœuf sont dans le Double Whopper Cheese ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Quel condiment n'est pas inclus dans le Double Whopper Cheese ?",
        answers: [
            {text: "Moutarde", correct: true},
            {text: "Mayonnaise", correct: false},
            {text: "Ketchup", correct: false},
            {text: "Cornichon", correct: false},
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.datset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of {questions.length}!`;
    nextButton.innerHTML = "Rejouer ?";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        shwScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();

////////////////////WHOPPER FIN/////////////////////////////////////////
///////////////////// DOUBLE WHOPPER CHS /////////////////////////////////////

