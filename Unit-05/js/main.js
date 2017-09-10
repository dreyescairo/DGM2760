// JavaScript Document
"use strict";


var originalArray = ['Red', 'Blue', 'Green'];

var modifiedArray = originalArray.slice();

var ogArrayElement = document.getElementById('ogArray');

var errorMessage = 'The element you are looking for is undefined/null!';

ogArrayElement.innerHTML = (`<p>Original Array:</p> <p style='color:white;'>[${originalArray.toString()}]</p>`);


function addToStart() {
    resetArray();

    let arrayMessage = (modifiedArray == null) ? errorMessage : modifiedArray.slice();
    if (arrayMessage instanceof Array)//have to check if it's an array and not a string with the error. If it is array, modify it.
        arrayMessage.unshift("Apple").toString();

    document.getElementById('toStart').innerHTML = `<p>Added apple to start:</p> <p style='color:white;'>[${arrayMessage}]</p>`;

}

function addToEnd() {
    resetArray();


    let arrayMessage = (modifiedArray.toString().toLowerCase() == null) ? errorMessage : modifiedArray.slice();
    if (arrayMessage instanceof Array)
        arrayMessage.push('Apple');

    document.getElementById('toEnd').innerHTML = `<p>Added apple to end:</p> <p style='color:white;'>[${arrayMessage}]</p>`;


}

function removeFirst() {
    resetArray();

    let arrayMessage = (modifiedArray.toString().toLowerCase() == null) ? errorMessage : modifiedArray.slice();
    if (arrayMessage instanceof Array)
        arrayMessage.shift();

    document.getElementById('removeFirst').innerHTML = `<p>Removed first element:</p> <p style='color:white;'>[${arrayMessage}]</p>`;


}

function removeSecond() {
    resetArray();

    let arrayMessage = (modifiedArray.toString().toLowerCase() == null) ? errorMessage : modifiedArray.slice();
    if (arrayMessage instanceof Array)
        arrayMessage.splice(1, 1);

    document.getElementById('removeSecond').innerHTML = `<p>Removed second element:</p> <p style='color:white;'>[${arrayMessage}]</p>`;

}

function removeLast() {
    resetArray();
    let arrayMessage = (modifiedArray.toString().toLowerCase() == null) ? errorMessage : modifiedArray.slice();
    if (arrayMessage instanceof Array)
        arrayMessage.pop();

    document.getElementById('removeLast').innerHTML = `<p>Removed last Element:</p> <p style='color:white;'>[${arrayMessage}]</p>`;

}

function sortList() {
    resetArray();

    let arrayMessage = (modifiedArray.toString().toLowerCase() == null) ? errorMessage : modifiedArray.slice();
    if (arrayMessage instanceof Array)
        arrayMessage.sort();

    document.getElementById('sortList').innerHTML = `<p>Sorted Array:</p> <p style='color:white;'>[${arrayMessage}]</p>`;

}

function toLowercase() {
    resetArray();

    let arrayMessage = (modifiedArray.toString().toLowerCase() == null) ? errorMessage : modifiedArray.slice();
    if (arrayMessage instanceof Array)
        arrayMessage = arrayMessage.toString().toLowerCase();

    document.getElementById('listToLower').innerHTML = `<p>All elements lowercase:</p> <p style='color:white;'>[${arrayMessage}]</p>`;
}

function displayThird() {
    resetArray();

    let arrayMessage = (modifiedArray[2] == null) ? errorMessage : modifiedArray.slice();
    if (arrayMessage instanceof Array)
        arrayMessage = arrayMessage[2];

    document.getElementById('thirdElement').innerHTML = `<p>Display third element:</p> <p style='color:white;'>[${arrayMessage}]</p>`;
}

function displayFourth() {
    resetArray();

    let arrayMessage = (modifiedArray[3] == null) ? errorMessage : modifiedArray.slice();
    if (arrayMessage instanceof Array)
        arrayMessage = arrayMessage[3];

    document.getElementById('fourthElement').innerHTML = `<p>Display fourth element:</p> <p style='color:white;'>[${arrayMessage}]</p>`;

}



function resetArray() {
    modifiedArray.length = 0;
    modifiedArray = originalArray.slice();
}