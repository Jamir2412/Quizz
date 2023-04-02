//jamir.aj.2412@gmail.com
 
var quizData=[
    {
        question: "1. Which of the following framework is not related to Js ?",
        a: ".net",
        b: "flask",
        c: "react",
        d: "django",
        ans: "optionA" 

    },

    {
        question: "2. Which of the following is not a programming language ?",
        a: "HTML",
        b: "Python",
        c: "C++",
        d: "react",
        ans: "optionD" 
    },

    {
        question: "3. Which of the following is not a framework ?",
        a: "react",
        b: "javaScript",
        c: "angular",
        d: "django",
        ans: "optionB" 
    },

    {
        question: "4. CSS stands for ",
        a: "Central Secreteraite Services",
        b: "Cascading Style of Sheet",
        c: "Cascading Style State",
        d: "Cascading Style Sheet",
        ans: "optionB" 
    }
]

var quiz= document.getElementById("quiz");
var options= document.querySelectorAll(".answer");
var question= document.getElementById("question");
var a= document.getElementById("a");
var b= document.getElementById("b");
var c= document.getElementById("c");
var d= document.getElementById("d");
var submit= document.getElementById("submitbtn");
var scoreArea= document.getElementById("scoreArea");

let quesCount=0;
let score=0;

function loadQuestion()
{
    const questionAndoption=quizData[quesCount];

    question.innerHTML=questionAndoption.question;
    a.innerHTML=questionAndoption.a;
    b.innerHTML=questionAndoption.b;
    c.innerHTML=questionAndoption.c;
    d.innerHTML=questionAndoption.d;
}

loadQuestion();
function getCheckAnswer()
{
    for(var i=0; i<options.length; i++){
        if(options[i].checked)
        return (options[i].id);
    }
}
function deselectall()
{
    var checkedOptionID=getCheckAnswer();
    document.getElementById(checkedOptionID).checked= false;
}


function comparing(){
    const selectedoptionid= getCheckAnswer(); 
    if(selectedoptionid===quizData[quesCount].ans)
    score= score+1;
    
    if(quesCount<quizData.length){
        deselectall();
        quesCount++;
        if(quesCount===quizData.length){
            scoreArea.style.display="block";
            scoreArea.innerHTML += "<h3>You scored "+ score +" out of "+ quizData.length;
        }
        loadQuestion();        
    }    
}


function restart(){
    window.location.reload();
}