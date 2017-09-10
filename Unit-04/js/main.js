// JavaScript Document
"use strict";

const MIN_INT = 1;//nothing for this assignment should be lower than 0
var numberOfMonths = 12;
var numberOfDays = 30;
var numberOfFortunes = 5;


//returns a random int with an upper limit passed in.
function randomNumber(_maxInt) {
    var _minInt = MIN_INT;
    _minInt = Math.ceil(_minInt);
    _maxInt = Math.floor(_maxInt);

    var num = Math.floor(Math.random() * (_maxInt - _minInt + 1)) + _minInt;

    return num;
}


function getRandomMonth() {
    var month;
    switch (randomNumber(numberOfMonths)) {
        case 1:
            month = 'January';
            break;

        case 2:
            month = 'February';
            break;
        case 3:
            month = 'March';
            break;
        case 4:
            month = 'April';
            break;
        case 5:
            month = 'May';
            break;
        case 6:
            month = 'June';
            break;
        case 7:
            month = 'July';
            break;
        case 8:
            month = 'August';
            break;
        case 9:
            month = 'September';
            break;
        case 10:
            month = 'October';
            break;
        case 11:
            month = 'November';
            break;
        case 12:
            month = 'December';
            break;
        default:
            month = 'January';
            break;

    }

    return month;
}


function getRandomDay() {

    return randomNumber(numberOfDays);
}

function getRandomFortune() {
    var fate;
    switch (randomNumber(numberOfFortunes)) {
        case 1:
            fate = 'You will find $100 dollars in your wallet.';
            break;
        case 2:
            fate = 'You will trip and fall.';
            break;
        case 3:
            fate = 'You will win an all expense paid trip to Chuck-E-Cheeses';
            break;
        case 4:
            fate = 'You will be the richest person in the world.';
            break;
        case 5:
            fate = 'You will eat the best dinner of your life.';
            break;
        default:
            fate = 'You will have a brilliant idea.';
            break;
    }

    return `On ${getRandomMonth()} ${getRandomDay()} ${fate}`;


}


function displayFortune() {
    document.getElementById('fortuneText').innerHTML = getRandomFortune();
}

//displays a random fortune on initial load/refresh
displayFortune();