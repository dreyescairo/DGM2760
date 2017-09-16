"use strict";

var quiz = {
    questionStem: "Who is buried in Grants Tomb?",
    answerOne: "David",
    answerTwo: "Grant",
    answerThree: "Andrew",
    answerFour: "You",
    correctAnswer: 2,


    displayQuestion: function () {

        document.getElementById('stem').innerHTML = this.questionStem;

        document.getElementById('answer1').innerHTML = this.answerOne;

        document.getElementById('answer2').innerHTML = this.answerTwo;

        document.getElementById('answer3').innerHTML = this.answerThree;

        document.getElementById('answer4').innerHTML = this.answerFour;

    },

    grade(_answerID) {

        if (_answerID == this.correctAnswer) {
            document.getElementById("feedbackText").innerHTML = "<p class='true'>Correct!</p>";
        } else {
            document.getElementById("feedbackText").innerHTML = "<p class='false'>Incorrect</p>";
        }

    },
};


quiz.displayQuestion();

//handled selection by css instead.

// var selectedElement;
// function selectedAnswer(_element) {
//     if (selectedElement == null) {
//         selectedElement = _element;
//     }

//     document.getElementById(selectedElement).style.backgroundColor = "teal";

//     selectedElement = _element;

//     document.getElementById(selectedElement).style.backgroundColor = "orange";

// }



