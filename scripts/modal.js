/**
 * 2.0
 * modal.js
 * This script handles the opening and closing of the modal window
 */

/** 2.1 - Variables **/
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

const confirmationMessage = document.querySelector("#confirmationMessage");
const confirmationClose = document.querySelector("#confirmationClose");


/** 2.2 - Functions **/
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  confirmationMessage.style.display = "none";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  confirmationMessage.style.display = "none";
}

// confirmation message
function confirmation() {
  form.style.display = "none";
  confirmationMessage.style.display = "block";
}

// close confirmation message
function closeConfirmation() {
  modalbg.style.display = "none";
  confirmationMessage.style.display = "none";
  form.style.display = "block";
  // reset form
  form.reset();
}

/** 2.3 - Events **/
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeConfirmation);

// close confirmation message event
confirmationClose.addEventListener("click", closeConfirmation);


