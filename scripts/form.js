/**
 * handle form validation
 */

/** DOM Elements **/

const form = document.querySelector("form");

const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");


/** Regex **/
/* regex for first and last name
 * numbers not authorized
 * hyphen and apostrophe authorized
 * french characters authorized
 * minimum of 2 characters - maximum of 20 characters
 */

const regexName = /^[a-zA-ZÀ-ÿ]+(([-' ,][a-zA-ZÀ-ÿ ])?[a-zA-ZÀ-ÿ]*){2,20}$/;

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
}


/** Event **/
form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the form from submitting
    validate();
});

