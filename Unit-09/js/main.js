// JavaScript Document
/*jslint browser:true */
"use strict";


var myLocation = location.href;

function splitLocation(_myLocation) {

    _myLocation = _myLocation.split('#').pop();
    _myLocation = _myLocation.split('?').pop();
    console.log("This is my locaiton: " + _myLocation);
    return _myLocation;
}



var nodeList = document.querySelectorAll("ul#mainmenu li a");
var locationArrayOneSplitSlash = splitLocation(myLocation).slice().split('/');
locationArrayOneSplitSlash = locationArrayOneSplitSlash[locationArrayOneSplitSlash.length - 1];


function determineNodeToStyle(_myLocation) {

    if(_myLocation === ""){
        return;
    }
    console.log(nodeList.length);

    for (var i = 0; i < nodeList.length; i++) {
        // console.log('attribute ' + i + ' ' + nodeList[i].getAttribute('href'));

        var currentNode = splitLocation(nodeList[i].getAttribute('href'));

        if (currentNode === _myLocation) {

            console.log('Returned Node ' + splitLocation(nodeList[i].getAttribute('href')));

            nodeList[i].parentNode.className = "active";
            if (currentNode === "hammer.php" || currentNode === "drill.php") {
                var parentNode = nodeList[i].parentNode.parentNode.parentNode;
                parentNode.className = "parent";
            }

            // var locationToReturn = splitLocation(nodeList[i].getAttribute('href'));

            // return locationToReturn;
        } else {
            nodeList[i].parentNode.className = "";
        }
    }
    // console.log('No node match, returning _myLocation ' + _myLocation);
    // return  _myLocation;

}

determineNodeToStyle(locationArrayOneSplitSlash);
