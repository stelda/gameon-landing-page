/**
 * 4.0
 * form.js
 * This script handle the form validation
 */

/** 4.1 - DOM Elements **/

const form = document.querySelector("form");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const locations = document.querySelectorAll("input[name='location']");
const termsOfUse = document.querySelector("#checkbox1");

/**
 * 4.2 - Function that validates a name input
 * @param {string} name - The name to validate.
 * @returns {boolean} - True if the name is valid, false otherwise.
 */
function isValidName(name) {
    return regexName.test(name);
}

/**
 * 4.3 - Function that validates an email input
 * @param {string} email - The email to validate.
 * @returns {boolean} - True if the email is valid, false otherwise.
 */
function isValidEmail(email) {
    return regexEmail.test(email);
}

/**
 * 4.4 - Function that validates a birthdate input
 * @param {string} birthdate - The birthdate to validate.
 * @returns {boolean} - True if the birthdate is valid, false otherwise.
 */
function isValidBirthdate(birthdate) {
    if (!regexBirthdate.test(birthdate)) {
        return false;
    }
    const [day, month, year] = birthdate.split('/').map(Number);
    // for February, check if the year is a leap year
    if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            if (day > 29) {
                return false;
            }
        } else {
            if (day > 28) {
                return false;
            }
        }
    }
    // for months with 30 days
    else {
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (day > daysInMonth[month - 1]) {
            return false;
        }
    }
    return true;
}

/**
 * 4.5 - Function that validates a number of tournaments
 * @param {string} quantity - quantity of tournaments to validate.
 * @returns {boolean} - True if the number of tournaments is valid, false otherwise.
 */
function isValidQuantity(quantity) {
    return regexNumberOfTournaments.test(quantity);
}

/**
 * 4.6 - Function that validates if any location is checked
 * @param {NodeList} locations - The list of location inputs.
 * @returns {boolean} - True if at least one location is checked, false otherwise.
 */
function isValidLocation(locations) {
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            return true;
        }
    }
    return false;
}

/**
 * 4.7 - Function that validates if the terms of use are checked
 * @param {boolean} termsOfUse - The terms of use checkbox.
 * @returns {boolean} - True if the terms of use checkbox is checked, false otherwise.
 */
function isValidTermsOfUse(termsOfUse) {
    return termsOfUse.checked;
}

/**
 * 4.8 - Updates the UI to show an error message.
 * @param {HTMLElement} element - The element whose parent will be updated.
 * @param {string} message - The error message.
 */
function showError(element, message) {
    element.parentElement.setAttribute('data-error-visible', 'true');
    element.parentElement.setAttribute('data-error', message);
}

/**
 * 4.9 - Updates the UI to remove an error message.
 * @param {HTMLElement} element - The element whose parent will be updated.
 */
function hideError(element) {
    element.parentElement.setAttribute('data-error-visible', 'false');
}

/**
 * 4.10 - Main validation function that uses the individual validation functions to check all inputs
 * @returns {boolean} - True if the entire form is valid, false otherwise.
 */
function validateForm() {
    let isValid = true;

    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const birthdateValue = birthdate.value;
    const quantityValue = quantity.value;

    // Validate first name
    if (!isValidName(firstNameValue)) {
        showError(firstName, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
        isValid = false;
    } else {
        hideError(firstName);
    }

    // Validate last name
    if (!isValidName(lastNameValue)) {
        showError(lastName, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
        isValid = false;
    } else {
        hideError(lastName);
    }

    // Validate email
    if (!isValidEmail(emailValue)) {
        showError(email, "Veuillez entrer votre adresse email.");
        isValid = false;
    } else {
        hideError(email);
    }

    // Validate birthdate
    if (!isValidBirthdate(birthdateValue)) {
        showError(birthdate, "Veuillez entrer une date de naissance valide.");
        isValid = false;
    } else {
        hideError(birthdate);
    }

    // Validate tournaments
    if (!isValidQuantity(quantityValue)) {
        showError(quantity, "Veuillez entrer un nombre entre 0 et 99.");
        isValid = false;
    } else {
        hideError(quantity);
    }

    // Validate location
    if (!isValidLocation(locations)) {
        showError(document.querySelector("#location1"), "Veuillez choisir une ville.");
        isValid = false;
    } else {
        hideError(document.querySelector("#location1"));
    }

    // Validate terms of use
    if (!isValidTermsOfUse(termsOfUse)) {
        showError(termsOfUse, "Veuillez accepter les conditions d'utilisation.");
        isValid = false;
    } else {
        hideError(termsOfUse);
    }
    return isValid;
}

/**
 * 4.11 - Event Handler : Handles the form submission event.
 * @param {Event} event - The submit event.
 */
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting
    const isFormValid = validateForm();
    if (isFormValid) {
        confirmation();
    }
}

/**
 * 4.12 - Event listener for form submission.
 */
form.addEventListener("submit", handleFormSubmit);
