//global variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var gameStatus = "Start";

//User answers
var ua1 = a1.value;
var ua2 = a2.value;
var ua3 = a3.value;
var ua4 = a4.value;
var ua5 = a5.value;
var ua6 = a6.value;
var ua7 = a7.value;
var ua8 = a8.value;
var ua9 = a9.value;
var ua10 = a10.value;



//Questions
var q1 = {
    question: "Amityville is a city in Indiana.",
    answer: "false",
    noAnswer: true
};

var q2 = {
    question: "The Lost Boys movie was filmed in Santa Cruz, California.",
    answer: "true",
    noAnswer: true
};


var q3 = {
    question: "Jeffrey Dahmer was a vegetarian.",
    answer: "false",
    noAnswer: true
};

var q4 = {
    question: "Ted Bundy escaped from a jail in Colorado.",
    answer: "true",
    noAnswer: true
};

var q5 = {
    question: "Wes Craven directed the movie Poltergeist.",
    answer: "false",
    noAnswer: true
};

var q6 = {
    question: "The movie, Human Centipede, was based on a true story.",
    answer: "false",
    noAnswer: true
};

var q7 = {
    question: "You should never feed a Gremlin past midnight.",
    answer: "true",
    noAnswer: true
};

var q8 = {
    question: "The ring was originally a Japanese horror film.",
    answer: "true",
    noAnswer: true
};

var q9 = {
    question: "Jack the Ripper terrorized the city of Dublin, Ireland.",
    answer: "false",
    noAnswer: true
};

var q10 = {
    question: "Reagan, from the movie the Exorcist, was possessed by a demon in her magic 8 ball.",
    answer: "false",
    noAnswer: true
};

// var quizQuestions = [
//     q1 = {
//         question:"Amityville is a city in Indiana.",
//         answer: "false",
//         noAnswer:true},

//     q2 = {
//         question:"The Lost Boys movie was filmed in Santa Cruz, California.",
//         answer:"true",
//         noAnswer:true},


//     q3 = {
//         question:"Jeffrey Dahmer was a vegetarian.",
//         answer:"false",
//         noAnswer:true},

//     q4 = {
//         question:"Ted Bundy escaped from a jail in Colorado.",
//         answer:"true",
//         noAnswer:true},

//     q5 = {
//         question:"Wes Craven directed the movie Poltergeist.",
//         answer:"false",
//         noAnswer:true},

//     q6 = {
//         question:"The movie, Human Centipede, was based on a true story.",
//         answer:"false",
//         noAnswer:true},

//     q7 = {
//         question:"You should never feed a Gremlin past midnight.",
//         answer:"true",
//         noAnswer:true},

//     q8 = {
//         question:"The ring was originally a Japanese horror film.",
//         answer:"true",
//         noAnswer:true},

//     q9 = {
//         question:"Jack the Ripper terrorized the city of Dublin, Ireland.",
//         answer:"false",
//         noAnswer:true},

//     q10 = {
//         question:"Reagan, from the movie the Exorcist, was possessed by a demon in her magic 8 ball.",
//         answer:"false",
//         noAnswer:true}
//     ];

//Display questions
// document.getElementById("q1").innerHTML = q1.question;
// document.getElementById("q2").innerHTML = q2.question;
// document.getElementById("q3").innerHTML = q3.question;
// document.getElementById("q4").innerHTML = q4.question;
// document.getElementById("q5").innerHTML = q5.question;
// document.getElementById("q6").innerHTML = q6.question;
// document.getElementById("q7").innerHTML = q7.question;
// document.getElementById("q8").innerHTML = q8.question;
// document.getElementById("q9").innerHTML = q9.question;
// document.getElementById("q10").innerHTML = q10.question;

//Need help here! I don't want to write out the display questions

for (j = 1; j < 11; j++) {
    var x = "q" + [j];
    console.log(x);
    var results = document.getElementById(x).innerHTML = window[x].question;
    console.log(results);
}

//Functions