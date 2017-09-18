/*jslint browser:true */
"use strict";


//the purpose of this script is to copy the link attribute and text from the 
//nav bar and create new links in a UL at the bottom of the page where it is displayed for mobile users.

var anchors = document.querySelectorAll('ul#primaryNavigation li a');

var unorderedList = document.createElement('UL');
unorderedList.setAttribute('id', 'mobileLinks'); 
document.getElementById('smallNavArea').appendChild(unorderedList);

for (var i = 0; i < anchors.length; i++){
    
    var listItem = document.createElement('LI');
    var anchorItem = document.createElement('A');

    anchorItem.setAttribute('href', anchors[i].getAttribute('href'));
    anchorItem.innerHTML = anchors[i].text;
    listItem.appendChild(anchorItem);
    unorderedList.appendChild(listItem);

}

