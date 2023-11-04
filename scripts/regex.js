/**
 * 3.0
 * regex.js
 * This script contains all the regular expressions used in the form validation
 */

/* 3.1 - regex for first and last name
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


/* regex for birthdate
 * format yyyy/mm/dd
 * only numbers authorized
 * calendar year between 1900 and 2021
 * leap year taken into account
 * month between 01 and 12
 * day between 01 and 31
 * 28 or 29 days in February
 * 30 days in April, June, September and November
 * 31 days in January, March, May, July, August, October and December
 */
const regexBirthdate= /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19\d\d|20[01]\d|2021)$/;


/* regex for number of tournaments
 * only numbers from 0 to 99 authorized
 */
const regexNumberOfTournaments = /^[0-9]{1,2}$/;


