// JavaScript Document
"use strict";

var fullDate = new Date();

var formattedDate = fullDate.getMonth() + '/' + fullDate.getDay() + '/' + fullDate.getFullYear();

var userName = prompt("Please enter your name");

var greeting = "Hello, " + userName + '!';

var companyName = "Comfy, Cozy Bed & Breakfast";
var slogan = "Comfy, and Cozy - There Is No Substitute.";

document.getElementById("greetingHeader").innerHTML = greeting;

document.getElementById("CompanyName").innerHTML = companyName;
document.getElementById("Slogan").innerHTML = slogan;

document.getElementById("dateTime").innerHTML = 'Current time and date is: ' + formattedDate;
