/**
 * Regular expressions
 */

/* regex for first and last name
 * numbers not authorized
 * hyphen, space and apostrophe authorized
 * french characters authorized
 * minimum of 2 characters - maximum of 20 characters
 */
const regexName = /^[a-zA-ZÀ-ÿ' -]{2,40}$/;


/* regex for email
 * letters, numbers, dots, underscores, hypens authorized
 * @ is mandatory
 * letters, numbers, dots, hyphens authorized after the @
 * . is mandatory
 * minimum 2 letters authorized after the .
 * maximum 4 letters authorized after the .
 */
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
