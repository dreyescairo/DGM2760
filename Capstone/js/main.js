// JavaScript Document
"use strict";

var words;
var chosenWord = "";
var wordLength = 0;
var underScoreArray = [];
var guessedLetters = [];
var enemyHealth = 0;
var playerHealth = 0;
var enemy = document.getElementById('enemy');



var xhttp = new XMLHttpRequest();
xhttp.open("GET", "http://setgetgo.com/randomword/get.php", true);
xhttp.send();

xhttp.onload = function() {
  if (this.status == 200) {

    chosenWord = this.responseText.toUpperCase();

  }else{
    words = ["david", "hat", "bat", "computer", "work", "school"];
    chosenWord = getRandomWord();
  }
  initGame();
};


function initGame() {

    console.log(chosenWord);
    wordLength = chosenWord.length;
    enemyHealth = wordLength;
    playerHealth = wordLength + 4;

    

    //add the letter placeholders when we get the random word.
    for (var i = 0; i < wordLength; i++) {
        underScoreArray.push("_");
    }

    //add click events to all of the letter tiles on init.
    for (var i = 0; i < document.getElementsByClassName('tile').length; i++) {
        document.getElementsByClassName('tile')[i].addEventListener('click', function (event) {
            checkUserInput(this.id);
        });
    }

    document.getElementById('letterPlaceholder').innerHTML = underScoreArray.join("  ");
    document.getElementById('health').innerHTML = 'Enemy Health: ' + enemyHealth;
    document.getElementById('playerHealth').innerHTML = 'Your Health: ' + playerHealth;
}


function getRandomWord() {

    return words[Math.floor(Math.random() * words.length)].toUpperCase();
}



document.onkeyup = function (event) {
    //alert(event.key);
    checkUserInput(event.key);
}

function determineIfLetterWasUsedBefore(_letter) {
    return guessedLetters.indexOf(_letter) > -1;
}

function checkUserInput(letter) {

    resetEnemyVisualDefault();
    //TweenLite.killTweensOf("#letterPlaceholder");
    var foundCharacter = false;
    var currentTile = document.getElementById(letter);
    var placeholder = document.getElementById('letterPlaceholder');
    placeholder.style.color = "white"; //reset the color back to default at the beginning of function call.
    letter = letter.toUpperCase();
    var wasLetterUsed = determineIfLetterWasUsedBefore(letter);


    if (enemyHealth > 0 && playerHealth > 0) {

        //check if letter was already checked before and added to the list as a correct letter. if not, go ahead and hurt the enemy.
        if (!wasLetterUsed) {

            for (var i = 0; i < wordLength; i++) {

                if (letter === chosenWord.charAt(i)) {
                    //alert("true");
                    underScoreArray[i] = letter;

                    enemyHealth--;
                    foundCharacter = true;
                }
            }


            if (!foundCharacter) {

                playerHealth--;

                TweenLite.from("#letterPlaceholder", 0.5, {
                    color: "#9f1e1e",
                    ease: Power2.easeInOut
                });
                TweenLite.from("#letterPlaceholder", 0.25, {
                    marginLeft: "20px",
                    ease: Bounce.easeOut
                });

                TweenLite.from("body", 0.25, {
                    marginLeft: "20px",
                    ease: Bounce.easeOut
                });


                TweenLite.from("#playerHealth", 0.5, {
                    color: "#9f1e1e",
                    ease: Power2.easeInOut
                });

                currentTile.className += " incorrect";

            } else {

                TweenLite.from("#health", 0.5, {
                    color: "#9f1e1e",
                    ease: Power2.easeInOut
                });

                //if character was found, play all the animations relevant to the enemy being hurt.
                playHurtAnimation();
                currentTile.className += " correct";

                TweenLite.from("#letterPlaceholder", 0.25, {
                    color: "#369f1e",
                    ease: Power2.easeInOut
                });
            }

        }

    }


    if (enemyHealth === 0 && playerHealth != 0) {

        TweenLite.to(enemy, 1, {
            opacity: "0",
            ease: Power2.easeInOut
        });

        TweenLite.to(".messageTextContainer", 1, {
            opacity: "0.5",
            ease: Power2.easeInOut,
            delay: 0.5
        });

        TweenLite.to("#messageText", 1, {
            opacity: "1",
            ease: Power2.easeInOut,
            delay: 0.5
        });

        document.getElementById('messageText').innerHTML = "You Win";
        document.getElementById('messageText').style.color = "green";

    } else if (enemyHealth != 0 && playerHealth === 0) {

        TweenLite.to(".messageTextContainer", 1, {
            opacity: "0.5",
            ease: Power2.easeInOut,

        });

        TweenLite.to("#messageText", 1, {
            opacity: "1",
            ease: Power2.easeInOut,

        });

        document.getElementById('messageText').innerHTML = "You Died";
        document.getElementById('messageText').style.color = "red";
    }


    guessedLetters.push(letter);
    document.getElementById('letterPlaceholder').innerHTML = underScoreArray.join("  ");
    document.getElementById('health').innerHTML = 'Enemy Health: ' + enemyHealth;
    document.getElementById('playerHealth').innerHTML = 'Your Health: ' + playerHealth;
    foundCharacter = false;

}


function playHurtAnimation() {

    TweenLite.from(enemy, 0.25, {
        rotation: -90,
        transformOrigin: "5px, 5px"
    });
    TweenLite.from(enemy, 0.25, {
        css: {
            '-webkit-filter': 'hue-rotate(230deg)'
        }
    });

    TweenLite.from("#stageBackground", 0.25, {
        marginLeft: "20px",
        ease: Bounce.easeOut
    });
}

function resetEnemyVisualDefault() {

    enemy.style.webkitTransform = 'matrix(1, 0, 0, 1, 0, 0)';
    enemy.style.webkitFilter = 'none';
}


