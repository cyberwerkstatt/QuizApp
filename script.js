let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1":"Robbie Williams",
        "answer_2":"Lady Gaga",
        "answer_3":"Tim Berners-Lee",
        "answer_4":"Justin Bieber",
        "right_answer": 3
    },  

    {
        "question": "Wofür steht eine div?",
        "answer_1":"Ein Bild",
        "answer_2":"Einen Link",
        "answer_3":"Einen Text",
        "answer_4":"Einen Container",
        "right_answer": 4   
    },

    {
        "question": "Wer hat Linux erfunden?",
        "answer_1":"Bill Gates",
        "answer_2":"James Cook",
        "answer_3":"Didi Mateschitz",
        "answer_4":"Linus Torvalds",
        "right_answer": 4   
    },

    {
        "question": "Was ist das Apple-Logo?",
        "answer_1":"Birne",
        "answer_2":"Banane",
        "answer_3":"Apfel",
        "answer_4":"Pommes",
        "right_answer": 3   
    },
    
];

let counter = 0;
let rightQuestions = 0;
let progress = questions.length;
let success = new Audio("./sounds/success.mp3");
let fail = new Audio("./sounds/fail.mp3");




function init(){
    document.getElementById("all-questions").innerHTML = questions.length;
    startQuiz(counter);
    document.getElementById("button").setAttribute("disabled","disabled")
}
 
function startQuiz(counter){

    if(counter >= questions.length){
        
        document.getElementById("endScreen").style = '';
        document.getElementById("container").style = 'display:none'
        document.getElementById("rightAnswers").innerHTML = rightQuestions;
        
    } else {
        
        document.getElementById("questions").innerHTML = `<h2>${questions[counter]["question"]}</h2>`;
        
        document.getElementById("answer_1").innerHTML = `<a class="card-body" href="#">${questions[counter]["answer_1"]}</a>`;
        document.getElementById("answer_2").innerHTML = `<a class="card-body" href="#">${questions[counter]["answer_2"]}</a>`;
        document.getElementById("answer_3").innerHTML = `<a class="card-body" href="#">${questions[counter]["answer_3"]}</a>`;
        document.getElementById("answer_4").innerHTML = `<a class="card-body" href="#">${questions[counter]["answer_4"]}</a>`;
    }
}

function answer(selection){
    let question = questions[counter];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question.right_answer}`;
    if (selectedQuestionNumber == question.right_answer){
        document.getElementById(selection).classList.add("bg-success");
    }else{
        document.getElementById(idOfRightAnswer).classList.add("bg-success");
        document.getElementById(selection).classList.add("bg-danger"); 
    }
    document.getElementById("button").removeAttribute("disabled")
    
    if (selection == idOfRightAnswer){
        rightQuestions ++;
        fail.play();
    } else {
        success.play();
    }
}

function nextQuestion() {
    counter += 1;
    
    document.getElementById("question-number").innerHTML = counter+1;
    startQuiz(counter);
    document.getElementById("button").setAttribute("disabled","disabled")
    document.getElementById(`answer_${questions[counter-1].right_answer}`).classList.remove("bg-success")
    resetButton()
    document.getElementById("progress-bar").style = `width: ${calculateProgress()}%;`;
    document.getElementById("progress-bar").innerHTML = calculateProgress()+`%`;
}

function resetButton(){
    for(let i = 1; i <=4; i++){
        document.getElementById(`answer_${i}`).classList.remove("bg-danger")
    }
}

function calculateProgress(){
    totalValue = questions.length
    partialValue = counter;
    return (100*partialValue) / totalValue;
}

function restartQuiz(){
    document.getElementById("container").style = '';
    document.getElementById("endScreen").style = 'display: none';
    counter = 0;
    rightQuestions = 0;
    progress = questions.length;
    init();
    document.getElementById("progress-bar").style = `width: 0%;`;
    document.getElementById("progress-bar").innerHTML = ``;
    document.getElementById("question-number").innerHTML = counter+1;
}
