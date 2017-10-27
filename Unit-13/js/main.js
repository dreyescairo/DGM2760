// JavaScript Document
/*jslint browser:true */
"use strict"


var hotelInfo;
var details;
var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();


xhr.onload = function() {
    if(xhr.status === 200) {
        hotelInfo = JSON.parse(xhr.responseText);
        display(0); //load the first room by default
        console.log(hotelInfo);

        //update nav button text with the names of the rooms from JSON
        var navButtons = document.querySelectorAll('nav button');
        for(var i = 0; i < navButtons.length; i++){
            navButtons[i]. innerHTML = hotelInfo[i].name;
        }
  
    } // end if
} // end function

function display(_hotel){

    document.getElementById('roomName').innerHTML = hotelInfo[_hotel].name;
    document.getElementById('desc').innerHTML = hotelInfo[_hotel].description;
    document.getElementById('photo').src = hotelInfo[_hotel].photo;


    document.getElementById('weekday').innerHTML = hotelInfo[_hotel].cost.weekday;
    document.getElementById('weekend').innerHTML = hotelInfo[_hotel].cost.weekend;
    
    var details = "";
    for(var i = 0; i < hotelInfo[_hotel].details.length; i++){
        details += `<p>${hotelInfo[_hotel].details[i]}</p>`;
    
    }

    document.getElementById('details').innerHTML = details;

}