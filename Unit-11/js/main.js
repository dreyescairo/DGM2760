/*jslint browser:true */
"use strict";


function validateForm() {

    let fullName = document.forms.myForm.fullName.value;
    let phoneNumber = document.forms.myForm.phoneNumber.value;
    let creditCardNumber = document.forms.myForm.ccNumber.value;
    let listOfPaymentMethods = document.getElementsByName('payMethod');
    let selectedVehicle = document.forms.myForm.vehicle.selectedIndex;
    let requiredSections = ['fullName', 'phoneNumber', 'payMethod', 'ccNumber', 'vehicle'];

    resetFieldValidation(requiredSections);

    let status = true;
    if (fullName === '' || fullName === null) {
        status = changeClassToError('fullName');
    }

    phoneNumber = phoneNumber.replace(/-/g, '');

    if (phoneNumber.length < 10 || phoneNumber.length > 15) {
        status = changeClassToError('phoneNumber');
    }

    creditCardNumber = creditCardNumber.replace(/ /g, '');

    if (creditCardNumber.length != 15) {
        status = changeClassToError('ccNumber');
    }

    if (!determinePaymentMethod(listOfPaymentMethods)) {
        status = changeClassToError('payMethod');
    }

    if (selectedVehicle === 0) {
        status = changeClassToError('vehicle');
    }

    if (!status) {
        document.getElementById('formProblems').className = 'showErrorMsg';
    }

    return status; //if returns false, it will not redirect to the next page.
}

function changeClassToError(_className) {
    document.getElementById(_className).className = 'error';
    return false;
}

function determinePaymentMethod(_listOfPaymentMethods) {
    for (var i = 0; i < _listOfPaymentMethods.length; i++) {
        if (_listOfPaymentMethods[i].checked)
            return true;

    }

    return false;
}

function resetFieldValidation(_requiredSections) {
    document.getElementById('formProblems').className = 'hiddenErrorMsg';
    for (let i = 0; i < _requiredSections.length; i++) {
        document.getElementById(_requiredSections[i]).className = "normal";
    }

}