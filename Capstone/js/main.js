// JavaScript Document
"use strict";

var words = ["david", "hat", "bat", "computer", "work", "school"];
var chosenWord = "";
var wordLength = 0;
var underScoreArray = [];
var enemyHealth = 0;
var playerHealth = 0;
var enemy = document.getElementById('enemy');

function initGame() {

    chosenWord = getRandomWord();
    wordLength = chosenWord.length;
    enemyHealth = wordLength;
    playerHealth = wordLength - 1;

    console.log(chosenWord);

    for (var i = 0; i < wordLength; i++) {
        underScoreArray.push("_");
    }
    document.getElementById('letterPlaceholder').innerHTML = underScoreArray.join("  ");
    document.getElementById('health').innerHTML = 'Enemy Health: ' + enemyHealth;

    document.getElementById('playerHealth').innerHTML = 'Your Health: ' + playerHealth;
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
    placeholder.style.color = "white"; //reset the color back to default at the beginning of function call.
    resetEnemyVisualDefault();


    letter = letter.toLowerCase();

    if (enemyHealth > 0 && playerHealth > 0) {

        for (var i = 0; i < wordLength; i++) {
            if (letter === chosenWord.charAt(i)) {
                //alert("true");
                underScoreArray[i] = letter.toUpperCase();
                foundCharacter = true;

                //subtract health in the loop because there may be two of the same letters in the word and health should be subtracted for each occurence.
                enemyHealth--;
               
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



            currentTile.className += " incorrect";

        }else{
            //if character was found, play all the animations relevant to the enemy being hurt.
            playHurtAnimation();
            currentTile.className += " correct";

            TweenLite.from("#letterPlaceholder", 0.25, {
                color: "#369f1e",
                ease: Power2.easeInOut
            });
        } 



        if(enemyHealth === 0 && playerHealth != 0){
            TweenLite.to(enemy, 1, {
                opacity: "0",
                ease: Power2.easeInOut
            });
            document.getElementById('messageContainer').innerHTML = "You Won!";
        }else if(enemyHealth != 0 && playerHealth === 0 ){
            document.getElementById('messageContainer').innerHTML = "You Lost!";
        }


    }

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

initGame();