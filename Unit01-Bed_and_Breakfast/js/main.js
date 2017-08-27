// JavaScript Document
"use strict";

var fullDate = new Date().toDateString();

var userName = prompt("Please enter your name");

var greeting = "Hello, " + userName + '!';

var companyName = "Comfy, Cozy Bed & Breakfast";
var slogan = "No other substitute for comfort";

document.getElementById("greetingHeader").innerHTML = greeting;

document.getElementById("CompanyName").innerHTML = companyName;
document.getElementById("Slogan").innerHTML = slogan;

document.getElementById("dateTime").innerHTML = 'Current date is: ' + fullDate;
