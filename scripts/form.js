/**
 * handle form validation
 */

/** DOM Elements **/

const form = document.querySelector("form");

const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");

// validation function
function validate() {

    /** First Name Validation **/
    const firstNameValue = firstName.value;
    // check if the input value is empty
    if (firstNameValue === "") {
        // add an error message
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
    }
    // check if the input value is valid
    else if (regexName.test(firstNameValue) === false) {
        // add an error message
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.parentElement.setAttribute('data-error', 'Veuillez entrer un format valide.');
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
    }
    // check if the input value is valid
    else if (regexName.test(lastNameValue) === false) {
        // add an error message
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.parentElement.setAttribute('data-error', 'Veuillez entrer un format valide.');
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
    }
    // check if the input value is valid
    else if (regexEmail.test(emailValue) === false) {
        // add an error message
        email.parentElement.setAttribute('data-error-visible', 'true');
        email.parentElement.setAttribute('data-error', 'Veuillez entrer un format valide.');
    }
    else {
        // remove the error message
        email.parentElement.setAttribute('data-error-visible', 'false');
    }



}


/** Event **/
form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the form from submitting
    validate();
});

