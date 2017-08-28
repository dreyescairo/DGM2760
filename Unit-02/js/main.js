// JavaScript Document
"use strict";

function displayDocumentProperties(){
    var docTitle = document.title;
    var docLastModified = document.lastModified;
    var pageURL = window.location;
    
    document.getElementById("docTitle").innerHTML = "Page title: " + docTitle;
    document.getElementById("lastModified").innerHTML = "Page last modified: " + docLastModified;
    document.getElementById("pageURL").innerHTML = "Page URL " + pageURL;
}


function displayWindowSize(){
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowOffsetX = window.screenX;
    var windowOffsetY = window.screenY;

    var widthMessage = "My window is " + windowWidth + " pixels wide and " + windowHeight + " pixels high";

    document.getElementById("windowWidth").innerHTML = widthMessage;

document.getElementById("windowOffset").innerHTML = "Window offset left: " + windowOffsetX + "<br />Window offset top: " + windowOffsetY;

}

displayWindowSize();
displayDocumentProperties();
