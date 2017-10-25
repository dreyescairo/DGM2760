/*jslint browser:true */
"use strict";

const DAYS_IN_YEAR = 365;
const REQUIRED_KW_MULTIPLIER = 1.25;
const REQUIRED_WATT_MULTIPLIER = 1000;

function addMonths(_elementName) {

    var annualKilowattUse = 0;
    var dailyKilowattUse = 0;
    var x = 0;

    var months = document.getElementById(_elementName).getElementsByTagName('input');

    for (var i = 0; i < months.length; i++) {
        x = Number(months[i].value);
        annualKilowattUse += x;
    }

    return annualKilowattUse / DAYS_IN_YEAR;

}

function sunHours() {

    var hours;
    var theZone = document.forms.solarForm.zone.selectedIndex;
    theZone += 1;

    switch (theZone) {
        case 1:
            hours = 6;
            break;
        case 2:
            hours = 5.5;
            break;
        case 3:
            hours = 5;
            break;
        case 4:
            hours = 4.5;
            break;
        case 5:
            hours = 4.2;
            break;
        case 6:
            hours = 3.5;
            break;
        default:
            hours = 0;

            break;


    }
    return hours;
}

function calculatePanel() {
    var userChoice = document.forms.solarForm.panel.selectedIndex;
    var panelOptions = document.forms.solarForm.panel.options;
    var power = panelOptions[userChoice].value;
    var name = panelOptions[userChoice].text;
    var x = [power, name];

    return x;
}

function calculateSolar() {
    var dailyKilowattUse = addMonths('mpc');

    var sunHoursPerDay = sunHours();

    var minKilowattsNeeds = dailyKilowattUse / sunHoursPerDay;

    var requiredKilowattNeeds = minKilowattsNeeds * REQUIRED_KW_MULTIPLIER;

    var requiredWattNeeds = requiredKilowattNeeds * REQUIRED_WATT_MULTIPLIER;

    var panelInfo = calculatePanel();
    var panelOutput = panelInfo[0];
    var panelName = panelInfo[1];

    var panelsNeeded = Math.ceil(requiredKilowattNeeds / panelOutput);

    var feedback = "";
    feedback += `<p>Based on your average daily use of <span>${Math.round(dailyKilowattUse)}</span> kWh, you will need to purchase <span>${panelsNeeded} ${panelName}</span> solar panels to offset 100% of your electric bill.</p>`;
    feedback += "<h2>Additional Details</h2>";
    feedback += `<p>Your average daily electricity consumption: <span>${Math.round(dailyKilowattUse)}</span> Kwh per day.</p>`;
    feedback += `<p>Average sunshine hours per day: <span>${sunHoursPerDay}</span> hours</p>`;
    feedback += `<p>Realistic watts needed per hour: <span>${Math.round(requiredKilowattNeeds)}</span> watts/hour.</p>`;
    feedback += `<p>The <span>${panelName}</span> panel you selected generates about <span>${panelOutput}</span> watts per hour.</p>`;

    document.getElementById('feedback').innerHTML = feedback;

}