/**
 * handle form validation
 */

/** DOM Elements **/

const form = document.querySelector("form");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const locations = document.querySelectorAll("input[name='location']");
const termsOfUse = document.querySelector("#checkbox1");


let isValid = true;

// validation function
function validate() {

    /** First Name Validation **/
    const firstNameValue = firstName.value;

    // check if the input value is empty
    if (firstNameValue === "") {
        // add an error message
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
        isValid = false;
    }
    // check if the input value is valid
    else if (regexName.test(firstNameValue) === false) {
        // add an error message
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.parentElement.setAttribute('data-error', 'Veuillez entrer un format valide.');
        isValid = false;
    }
    else {
        // remove the error message
        firstName.parentElement.setAttribute('data-error-visible', 'false');
    }

    /** Last Name Validation **/
    const lastNameValue = lastName.value;
    // check if the input value is empty
    if (lastNameValue === "") {
        // add an error message
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
        isValid = false;
    }
    // check if the input value is valid
    else if (regexName.test(lastNameValue) === false) {
        // add an error message
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.parentElement.setAttribute('data-error', 'Veuillez entrer un format valide.');
        isValid = false;
    }
    else {
        // remove the error message
        lastName.parentElement.setAttribute('data-error-visible', 'false');
    }

    /** Email Validation **/
    const email = document.querySelector("#email");
    const emailValue = email.value;
    // check if the input value is empty
    if (emailValue === "") {
        // add an error message
        email.parentElement.setAttribute('data-error-visible', 'true');
        email.parentElement.setAttribute('data-error', 'Veuillez entrer votre adresse email.');
        isValid = false;
    }
    // check if the input value is valid
    else if (regexEmail.test(emailValue) === false) {
        // add an error message
        email.parentElement.setAttribute('data-error-visible', 'true');
        email.parentElement.setAttribute('data-error', 'Veuillez entrer un format valide.');
        isValid = false;
    }
    else {
        // remove the error message
        email.parentElement.setAttribute('data-error-visible', 'false');

    }

    /** Birthdate Validation **/
    const birthdateValue = birthdate.value;
    // check if the input value is empty
    if (birthdateValue === "") {
        // add an error message
        birthdate.parentElement.setAttribute('data-error-visible', 'true');
        birthdate.parentElement.setAttribute('data-error', 'Veuillez entrer votre date de naissance.');
        isValid = false;

    }
    // check if the input value is valid
    else if (isValidBirthdate(birthdateValue) === false) {
        // add an error message
        birthdate.parentElement.setAttribute('data-error-visible', 'true');
        birthdate.parentElement.setAttribute('data-error', 'Veuillez entrer une date valide au format JJ/MM/AAAA.');
        isValid = false;
    }
    else {
        // remove the error message
        birthdate.parentElement.setAttribute('data-error-visible', 'false');
    }


    /** Number of tournaments Validation **/

    const quantityValue = quantity.value;
    // check if the input value is empty
    if (quantityValue === "" || regexTournaments.test(quantityValue) === false) {
        // add an error message
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        quantity.parentElement.setAttribute('data-error', 'Veuillez entrer un nombre entre 0 et 99.');
        isValid = false;
    }
    else {
        // remove the error message
        quantity.parentElement.setAttribute('data-error-visible', 'false');
    }


    /** Location Validation **/

    let locationChecked = false;
    let locationValue = "";
    // check if at least one location is checked
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            locationChecked = true;
            locationValue = locations[i].value;
            break;
        }
    }

    // check if the input value is empty
    if (locationChecked === false) {
        document.querySelector("#location1").parentElement.setAttribute('data-error-visible', 'true');
        document.querySelector("#location1").parentElement.setAttribute('data-error', 'Veuillez choisir une ville.');
        isValid = false;
    }
    else {
        // remove the error message
        document.querySelector("#location1").parentElement.setAttribute('data-error-visible', 'false');
    }

    /** Terms of use Validation **/

    if (termsOfUse.checked === false) {
        // add an error message
        termsOfUse.parentElement.setAttribute('data-error-visible', 'true');
        termsOfUse.parentElement.setAttribute('data-error', 'Veuillez accepter les conditions d\'utilisation.');
        isValid = false;
    }
    else {
        // remove the error message
        termsOfUse.parentElement.setAttribute('data-error-visible', 'false');
    }
}


/** Event **/

form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the form from submitting
    if (isValid === true) {
        alert ("Merci ! Votre réservation a été reçue.");
    }
});

