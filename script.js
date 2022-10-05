let question1 = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1":"Robbie Williams",
        "answer_2":"Lady Gaga",
        "answer_3":"Tim Berners-Lee",
        "answer_4":"Justin Bieber",
        "right_answer": 3   
    }
];

let question2 = [
    {
        "question": "Wer xxxxx?",
        "answer_1":"Antwort1",
        "answer_2":"Antwort2",
        "answer_3":"Antwort3",
        "answer_4":"Antwort4",
        "right_answer": 4   
    }
];

function startQuiz(){
    document.getElementById("question").innerHTML = `<h2>${question1[0]["question"]}<h2>`;
    for(let i = 1; i <= 4; i++){
        document.getElementById("list-questions").innerHTML += `<a class="list-group-item href="#">${question1[0]["answer_"+i]}</a>` 
    }
}

function checkAnswer(){

}

function nextQuestion() {
    
}

