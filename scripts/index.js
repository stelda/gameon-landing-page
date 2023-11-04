/**
 * 1.0
 * index.js
 * This script add a class to the topnav element to make it responsive
 */

function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
