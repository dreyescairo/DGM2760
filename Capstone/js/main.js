// JavaScript Document
"use strict";

var words = ["david", "hat", "bat", "computer", "work", "school"];
var chosenWord = "";
var wordLength = 0;
var underScoreArray = [];
var health = 0;

function initGame() {

    chosenWord = getRandomWord();
    wordLength = chosenWord.length;
    health = 6;

    console.log(chosenWord);

    for (var i = 0; i < wordLength; i++) {
        underScoreArray.push("_");
    }
    document.getElementById('letterPlaceholder').innerHTML = underScoreArray.join("  ");
    document.getElementById('health').innerHTML = health + " Health";
}


function getRandomWord() {

    return words[Math.floor(Math.random() * words.length)];
}



document.onkeyup = function (event) {
    //alert(event.key);
    checkUserInput(event.key);
}

function checkUserInput(letter) {

    //TweenLite.killTweensOf("#letterPlaceholder");
    var foundCharacter = false;
    var currentTile = document.getElementById(letter);
    var placeholder = document.getElementById('letterPlaceholder');
    placeholder.style.color = "black"; //reset the color back to default at the beginning of function call.

    letter = letter.toLowerCase();

    if (health > 0) {
        for (var i = 0; i < wordLength; i++) {
            if (letter === chosenWord.charAt(i)) {
                //alert("true");
                underScoreArray[i] = letter.toUpperCase();
                foundCharacter = true;
            }
        }

        if (!foundCharacter) {
            health--;
            TweenLite.from("#letterPlaceholder", 0.5, {
                color: "#9f1e1e",
                ease: Power2.easeInOut
            });
            TweenLite.from("#letterPlaceholder", 0.25, {
                marginLeft: "20px",
                ease: Bounce.easeOut
            });
            
            currentTile.className += " incorrect";
        } else {
            currentTile.className += " correct";

            TweenLite.from("#letterPlaceholder", 0.25, {
                color: "#369f1e",
                ease: Power2.easeInOut
            });
        }

    }
    document.getElementById('letterPlaceholder').innerHTML = underScoreArray.join("  ");
    document.getElementById('health').innerHTML = health + " Health";
    foundCharacter = false;

}

initGame();