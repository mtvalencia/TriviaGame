/*
Need help with the page loading and changing pages(views) based on the game status.
The order goes 1. start 2. play 3. end.
I can get the start page(view) to display but I can't change it to play.
I have a start button on the html page with onlick to start playing the game but, nothing 
happens when I click the button. I need it to display the "play" div on the html.
*/

//global variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var gameStatus = "start";
console.log(gameStatus);

//Questions
var q1 = {
    question:"1.    Amityville is a city in Indiana.",
    answer: "false",
    noAnswer:true};

var q2 = {
    question:"2.    The Lost Boys movie was filmed in Santa Cruz, California.",
    answer:"true",
    noAnswer:true};

    
var q3 = {
    question:"3.    Jeffrey Dahmer was a vegetarian.",
    answer:"false",
    noAnswer:true};
    
var q4 = {
    question:"4.    Ted Bundy escaped from a jail in Colorado.",
    answer:"true",
    noAnswer:true};

var q5 = {
    question:"5.    Wes Craven directed the movie Poltergeist.",
    answer:"false",
    noAnswer:true};
    
var q6 = {
    question:"6.    The movie, Human Centipede, was based on a true story.",
    answer:"false",
    noAnswer:true};
        
var q7 = {
    question:"7.    You should never feed a Gremlin past midnight.",
    answer:"true",
    noAnswer:true};
        
var q8 = {
    question:"8.    The ring was originally a Japanese horror film.",
    answer:"true",
    noAnswer:true};
    
var q9 = {
    question:"9.    Jack the Ripper terrorized the city of Dublin, Ireland.",
    answer:"false",
    noAnswer:true};
            
var q10 = {
    question:"10.   Reagan, from the movie the Exorcist, was possessed by a demon in her Chutes and Ladders board game.",
    answer:"false",
    noAnswer:true};

//Display questions
    for ( j = 1; j < 11; j++) {
        var x = "q"+[j];
        var seeQuestions = document.getElementById(x).innerHTML = window[x].question;
    }

//Functions
function gamePages() {
    if (gameStatus === "start") {
        $("#play").hide();
        $("#end").hide();
    } else if (gameStatus === "play") {
        $("#start").hide();
        $("#end").hide();
        startTimer();
    } else if (gameStatus === "end") {
        $("#start").hide();
        $("#play").hide();
    }
}

function grade() {
    if (q1.answer === a1.value) {
        correctAnswers += 1;
    } else if (q1.answer !== a1.value && a1.value !== "") {
        incorrectAnswers += 1;
    } else {unanswered += 1;}    
    
    if (q2.answer === a2.value) {
        correctAnswers += 1;
    } else if (q2.answer !== a2.value && a2.value !== "") {
        incorrectAnswers += 1;
    } else {unanswered += 1;}

    if (q3.answer === a3.value) {
        correctAnswers += 1;
    } else if (q3.answer !== a3.value && a3.value !== "") {
        incorrectAnswers += 1;
    } else {unanswered += 1;}    
    
    if (q4.answer === a4.value) {
        correctAnswers += 1;
    } else if (q4.answer !== a4.value && a4.value !== "") {
        incorrectAnswers += 1;
    } else {unanswered += 1;}

    if (q5.answer === a5.value) {
        correctAnswers += 1;
    } else if (q5.answer !== a5.value && a5.value !== "") {
        incorrectAnswers += 1;
    } else {unanswered += 1;}    
    
    if (q6.answer === a6.value) {
        correctAnswers += 1;
    } else if (q6.answer !== a6.value && a6.value !== "") {
        incorrectAnswers += 1;
    } else {unanswered += 1;}

    if (q7.answer === a7.value) {
        correctAnswers += 1;
    } else if (q7.answer !== a7.value && a7.value !== "") {
        incorrectAnswers += 1;
    } else {unanswered += 1;}    
    
    if (q8.answer === a8.value) {
        correctAnswers += 1;
    } else if (q8.answer !== a8.value && a8.value !== "") {
        incorrectAnswers += 1;
    } else {unanswered += 1;}

    if (q9.answer === a9.value) {
        correctAnswers += 1;
    } else if (q9.answer !== a9.value && a9.value !== "") {
        incorrectAnswers += 1;
    } else {unanswered += 1;}    
    
    if (q10.answer === a10.value) {
        correctAnswers += 1;
    } else if (q10.answer !== a10.value && a10.value !== "") {
        incorrectAnswers += 1;
    } else {unanswered += 1;}

    document.getElementById("ca").innerHTML = "Correct Answers: " + correctAnswers;
    document.getElementById("ia").innerHTML = "Incorrect Answers: " + incorrectAnswers;
    document.getElementById("ua").innerHTML = "Unanswered: " + unanswered;
}    

function startTimer() {
    var timeLeft = 10;
    var gameTimer = setInterval(function(){
      document.getElementById("timer").innerHTML = "Time remaining: " + timeLeft;
      timeLeft -= 1;
      if(timeLeft <= -1){
        clearInterval(gameTimer);
        gameStatus = "end";
        grade();
        gamePages();
      }
    }, 1000);
}

window.onload = function loadGame() {
    if (gameStatus === "start") {
        $("#play").hide();
        $("#end").hide();
}
};