var questions = [
    {
        text:"The condition in an if / else statment is enclosed within_________?",
        choices:["Square bractes","Curly Brackets","Quotes","Parenthesis"],
        correct:"Parenthesis"
    },
   {
        text:"String values must be enclosed within ______ when being assigned to vatiables.",
        choices:["commas","curly brackets","quotes","parenthesis"],
        correct:"curly brackets"
    },
    {
        text: "What command in Terminal creats a new directory",
        choices:["mkdir", "ls", "pwd", "cd"],
        correct:"mkdir"
    },
    {
        text: "A very useful tool used during develpment and debuggin for printing content to the debugger is",
        choices: ["JavaScript", "Terminal/bash", "console log","for loops"],
        correct: "for loops"
    },
    {
        text: "In Terminal what does the command touch do?",
        choices: ["opens a new file", "prints working directory", "clear output", "creats a new file"],
        correct: "creats a new file"
    },
    ]

    var time=60

    var scoreList = JSON.parse(localStorage.getItem("scores")) || [];

    var score = 0
    var currentQuestion = 0
    document.querySelector("#score").innerHTML=score; 
    
    var text = document.querySelector("#question");
    var startButton = document.querySelector("#start")
    var intro = document.querySelector("#intro")
    var quizContent = document.querySelector("#quizContent")

startButton.addEventListener("click",function(event){
    intro.classList.add("hide");
    quizContent.classList.remove("hide");
    writeQuestion();
    setInterval(startTimer,1000)

})

function writeQuestion(){
    text.innerHTML=questions[currentQuestion].text;
    document.querySelector("#question1").innerHTML=questions[currentQuestion].choices[0]
    document.querySelector("#question2").innerHTML=questions[currentQuestion].choices[1]
    document.querySelector("#question3").innerHTML=questions[currentQuestion].choices[2]
    document.querySelector("#question4").innerHTML=questions[currentQuestion].choices[3]
    
}
document.querySelector("#question1").addEventListener("click",checkAnswer);
document.querySelector("#question2").addEventListener("click",checkAnswer);
document.querySelector("#question3").addEventListener("click",checkAnswer);
document.querySelector("#question4").addEventListener("click",checkAnswer);


function checkAnswer(event){
    if(event.target.innerHTML === questions[currentQuestion].correct){
        currentQuestion++;
        score++;
        document.querySelector("#score").innerHTML=score;
        writeQuestion();
    }
    else{
        currentQuestion++;
        writeQuestion();
    }
}


//write an if statement to end game


document.querySelector("#submit").classList.remove("hide");

document.querySelector("#submitUser").addEventListener("click",function(event){
    var name = document.querySelector("#username").value;
    var currentSession = {
        name:name,
        score:score
    }
    scoreList.push(currentSession);
    scoreList.sort(function(a,b){
        return b.score-a.score;
    });
    localStorage.setItem("scores",JSON.stringify(scoreList));
    refreshScores();
    
})
refreshScores();
if(time<=0 || currentQuestion>=questions.length){
    document.querySelector("#highscores").classList.remove("hide");
    clearInterval(startTimer);
    time=60;
};

function refreshScores(){
for (var i=0; i <scoreList.length; i++){
    document.querySelector("#scoreTable").innerHTML +=
    `<tr>
        <td>${scoreList[i].name}</td>
        <td>${scoreList[i].score}</td>
    </tr>`;
};}
console.log("scores:" + (score)/(username.length));

var startTimer = function(){
    time--;
}