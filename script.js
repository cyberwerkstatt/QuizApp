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
        "question": "Wer xxxxx?",
        "answer_1":"Antwort1",
        "answer_2":"Antwort2",
        "answer_3":"Antwort3",
        "answer_4":"Antwort4",
        "right_answer": 4   
    },

    {
        "question": "Wer 3?",
        "answer_1":"Antwortx",
        "answer_2":"Antworty",
        "answer_3":"Antwortz",
        "answer_4":"Antwortu",
        "right_answer": 4   
    },

    {
        "question": "Wer x4?",
        "answer_1":"Antwort1",
        "answer_2":"Antwort2",
        "answer_3":"Antwort3",
        "answer_4":"Antwort4",
        "right_answer": 4   
    }
];

let counter = 0;


function init(){
    document.getElementById("all-questions").innerHTML = questions.length;
    startQuiz(counter);
}




 
function startQuiz(counter){
    document.getElementById("questions").innerHTML = `<h2>${questions[counter]["question"]}</h2>`;
    document.getElementById("answer_1").innerHTML = `<a class="card-body" href="#">${questions[counter]["answer_1"]}</a>`;
    document.getElementById("answer_2").innerHTML = `<a class="card-body" href="#">${questions[counter]["answer_2"]}</a>`;
    document.getElementById("answer_3").innerHTML = `<a class="card-body" href="#">${questions[counter]["answer_3"]}</a>`;
    document.getElementById("answer_4").innerHTML = `<a class="card-body" href="#">${questions[counter]["answer_4"]}</a>`;
    
}

function answer(selection){
    let question = questions[counter];
    let selectedQuestionNumber = selection.slice(-1);
    console.log(selection)

    if (selectedQuestionNumber == question.right_answer){
        document.getElementById(selection).classList.add("bg-success");
    }else{
        document.getElementById(selection).classList.add("bg-danger");
    }
}

function nextQuestion() {
    counter += 1;
    startQuiz(counter);
    if (counter > 3){
        counter = 0;
    }
}
