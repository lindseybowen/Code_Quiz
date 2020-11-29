var questions = [
    {
        text:"who is the first american president?",
        choices:["george bush","george washington","some other dude","queen of england"],
        correct:"george washington"
    },
   {
        text:"who is the first black american president?",
        choices:["george bush","george washington","some other dude","barack obama"],
        correct:"barack obama"
    }]

    var scoreList = JSON.parse(localStorage.getItem("scores")) || [];

    var score = 0
    var currentQuestion = 0

    var text = document.querySelector("#question");
    //put shortcuts for other elements later
    var startButton = document.querySelector("#start")
    var intro = document.querySelector("#intro")
    var quizContent = document.querySelector("#quizContent")

startButton.addEventListener("click",function(event){
    intro.classList.add("hide");
    quizContent.classList.remove("hide");
    writeQuestion();

})

function writeQuestion(){
    text.innerHTML=questions[currentQuestion].text;
    document.querySelector("#question1").innerHTML=questions[currentQuestion].choices[0]
    document.querySelector("#question2").innerHTML=questions[currentQuestion].choices[1]
    document.querySelector("#question3").innerHTML=questions[currentQuestion].choices[2]
    document.querySelector("#question4").innerHTML=questions[currentQuestion].choices[3]
        //build out the questions being filled out like the text is above
}
document.querySelector("#question1").addEventListener("click",checkAnswer);
document.querySelector("#question2").addEventListener("click",checkAnswer);
document.querySelector("#question3").addEventListener("click",checkAnswer);
document.querySelector("#question4").addEventListener("click",checkAnswer);


function checkAnswer(event){
    if(event.target.innerHTML === questions[currentQuestion].correct){
        currentQuestion++;
        score++;
        writeQuestion();
    }
    else{
        currentQuestion++;
        writeQuestion();
    }
}

//write an if statement, that if the current question number is in excess of the actual number of questions you have, to show the high scores and end the game

document.querySelector("#highscores").classList.remove("hide");
document.querySelector("#submit").classList.remove("hide");

document.querySelector("#submitUser").addEventListener("click",function(event){
    var name = document.querySelector("#username").value;
    var currentSession = {
        name:name,
        score:score
    }
    scoreList.push(currentSession);
    localStorage.setItem("scores",JSON.stringify(scoreList));
    //get scores to write to table. hint: use a for loop
})