// JavaScript Document
"use strict";

const MIN_INT = 1;
const MAX_INT = 15;
var displayTries = document.getElementById('tries');
var displayFeedback = document.getElementById('feedback');
var displayAward = document.getElementById('Award');
var userInput = document.getElementById('numberInput');
var numTries = 0;
var computerNumber = 1;
var calculatedOnce = false;
var userWon = false;
var errorMessage = "Something went wrong. Please refresh the page and try again.";

function guess() {

    //if the user won, reset the game on next guess.
    if (userWon) {
        reset();
    }

    //continue the game regardless if the user won or not.
    numTries++;

    computerNumber = getRandomNumber(MIN_INT, MAX_INT);
    displayTries.innerHTML = numTries;
    displayFeedback.innerHTML = calculateGuess(userInput.value.trim());


}

function getRandomNumber(_MIN_INT, _MAX_INT) {

    //calculate a random number only if it has not been calculated already for the current game. Otherwise, jsut return the number it had already calculated.
    if (!calculatedOnce) {
        _MIN_INT = Math.ceil(_MIN_INT);
        _MAX_INT = Math.floor(_MAX_INT);
        computerNumber = Math.floor(Math.random() * (_MAX_INT - _MIN_INT + 1)) + _MIN_INT;
        calculatedOnce = true;
    }

    return computerNumber;
}

function calculateGuess(_userInput) {

    var guessResult = (_userInput > MAX_INT || _userInput < MIN_INT) ? 'Your guess is out of range! Please enter a value between 1-15.' : 
    (computerNumber < _userInput) ? 'Your guess was too high' :
        (computerNumber > _userInput) ? 'Your guess was too low' :
            (computerNumber == _userInput) ? 'You are correct! <br/> Enter a new guess to play again.' :
                (!(_userInput % 1 == 0)) ? 'Please enter a whole number between 1 and 15' : errorMessage;

    (computerNumber == _userInput) ?
        determineRibbon(numTries) : errorMessage;


    return guessResult;
}

function determineRibbon(_numTries) {

    //set the ribbon img paths on disk
    var blueRibbonSrc = './images/medalBlue.png';
    var redRibbonSrc = './images/medalRed.png';
    var yellowRibbonSrc = './images/medalYellow.png';

    //add the correct img source for the amount of guesses it took.
    (_numTries >= 1 && _numTries <= 3) ? displayAward.src = blueRibbonSrc :
        (_numTries >= 4 && _numTries <= 6) ? displayAward.src = redRibbonSrc :
            (_numTries >= 7) ? displayAward.src = yellowRibbonSrc : errorMessage;

    userWon = true;

}


//reset back to defaults if the player won and entered a new guess to play again.
function reset() {
    numTries = 0;
    calculatedOnce = false;
    displayAward.src = '';
    userWon = false;
}