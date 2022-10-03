let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1":"Robbie Williams",
        "answer_2":"Lady Gaga",
        "answer_3":"Tim Berners-Lee",
        "answer_4":"Justin Bieber",
        "right_answer": 3   
    }
];

function startQuiz(){
    document.getElementById("question").innerHTML = `<h2>${questions[0]["question"]}<h2>`;
    for(let i = 1; i <= 4; i++){
        document.getElementById("list-questions").innerHTML += `<a class="list-group-item href="#">${questions[0]["answer_"+i]}</a>` 
    }
}

function checkAnswer(){
    
}

