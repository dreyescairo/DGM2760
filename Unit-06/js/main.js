"use strict";

const MIN_INT = 0;

var nounText = document.getElementById("nounTextArea");
var adjectiveText = document.getElementById("adjectiveTextArea");
var verbText = document.getElementById("verbTextArea");

function randomNumber(_maxInt) {
    var _minInt = MIN_INT;
    _minInt = Math.ceil(_minInt);
    _maxInt = Math.floor(_maxInt);

    var num = Math.floor(Math.random() * (_maxInt - _minInt)) + _minInt;

    return num;
}


function setArrays() {
    let nounArray = regExSplit(nounText);
    let adjectiveArray = regExSplit(adjectiveText);
    let verbArray = regExSplit(verbText);

    tellStory(nounArray, adjectiveArray, verbArray);

}


function regExSplit(_textToSplit) {

    //first check if the textarea was empty or not
    if (!_textToSplit.value.trim()) {
        return null;
    }

    //split on new line or space or comma or comma space or comma newline
    return _textToSplit.value.toLowerCase().trim().split(/,|,\s+|,\n|\n|\s+/);
}

function tellStory(_nouns, _adjectives, _verbs) {

    if (_nouns == null || _adjectives == null || _verbs == null) {
        document.getElementById("arrayText").innerHTML = "<p>Something went wrong. Please fill in each textbox.</p>";
    } else if (_nouns.length < 3 || _adjectives.length < 3 || _verbs.length < 3) {
        document.getElementById("arrayText").innerHTML = "<p>Please give me all the required nouns, adjectives, and verbs.</p>";
    }
    else {
        document.getElementById("arrayText").innerHTML = `<p>This morning I was feeling <span>${_adjectives[randomNumber(_adjectives.length)]}</span>, so I decided to go for a run.</p>
                                                         <p>I put on my favorite <span>${_nouns[randomNumber(_nouns.length)]}</span>, but no workout routine is complete without your <span>${_adjectives[randomNumber(_adjectives.length)]}</span> <span>${_nouns[randomNumber(_nouns.length)]}</span>.</p>
                                                         <p>I left the house and started to <span>${_verbs[randomNumber(_verbs.length)]}</span> down the road. I quickly started to <span>${_verbs[randomNumber(_verbs.length)]}</span> which left me with a <span>${_adjectives[randomNumber(_adjectives.length)]}</span> <span>${_nouns[randomNumber(_nouns.length)]}</span>.</p>
                                                         <p>Oh well, I guess next time before I go running, I will <span>${_verbs[randomNumber(_verbs.length)]}</span> first.</p>`;
    }



}