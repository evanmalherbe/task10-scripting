// Task 10 - Compulsory task 3
/* Declare variables for calculator functions */

let value = "";
let firstValue = "";
let secondValue = "";
let operatorValue = "";
let answer;

/* ----------------------------------------------- */

/* This function counts the number of times the button is clicked and displays the total number of clicks to the
    page. */

let totalClicks = 0; // Set variable to initial value of zero

function timesClicked() {
    ++totalClicks; // increment variable by 1
    document.getElementById("timesClicked").innerHTML = "You clicked the button " + totalClicks + " times.";

}

/* This function gets the Rand value the user enters and converts it to Dollars at the current exchange rate of 
0.069 Dollars to the Rand (as at 19 Oct 2021). It then rounds the result off to 2 decimal places before printing the
 result to the screen. 

I learned how to round off the result at the following site: 
https://www.w3schools.com/js/js_number_methods.asp */

function convertRandToDollar() {
    let rands = Number(document.getElementById("randInput").value);
    /* Use "Number" method to convert user entry from string to number type so it can be used in the calculation
    I learned about the Number method at the following website: https://www.w3schools.com/js/js_number_methods.asp */

    let dollarValue = rands * 0.069;
    document.getElementById("ansInDollars").innerHTML = "$ " + dollarValue.toFixed(2); // answer to 2 decimal places

}

/* This function gets the Rand value the user enters and converts it to Euro at the current exchange rate of 
0.059 Euro to the Rand (as at 19 Oct 2021). It then rounds the result off to 2 decimal places before printing the
 result to the screen. */

function convertRandToEuro() {
    let rands = Number(document.getElementById("randInput2").value);
    // Use "Number" method to convert user entry from string to number type so it can be used in the calculation

    let euroValue = rands * 0.059;
    document.getElementById("ansInEuro").innerHTML = "€ " + euroValue.toFixed(2); // answer to 2 decimal places

}

/* This function gets the Rand value the user enters and converts it to Pounds at the current exchange rate of 
0.050 Pounds to the Rand (as at 19 Oct 2021). It then rounds the result off to 2 decimal places before printing the 
result to the screen. */

function convertRandToPound() {
    let rands = Number(document.getElementById("randInput3").value);
    // Use "Number" method to convert user entry from string to number type so it can be used in the calculation

    let poundValue = rands * 0.050;
    document.getElementById("ansInPounds").innerHTML = "£ " + poundValue.toFixed(2); // answer to 2 decimal places

}

/* This function uses a for loop to create a dropdown list of options to select and adds it to the page when
the page loads. */
function createSelectForm() {
    let chooseParent = document.querySelector("select"); // Select the element to be modified
    let i;

    for (i = 1; i <= 25; i++) {
        let createOptionItem = document.createElement('option'); // Create "option" element
        createOptionItem.innerHTML = "Option " + i; // Insert option content: Option 1, Option 2 etc
        chooseParent.appendChild(createOptionItem); // Add option to parent element, "select"
    }
}

/* These are the functions for the calculator. It can do all 4 simple math operations, and you can use the answers
from previous calculations to start new calculations. */

/* This passes the number the user clicks on to the function as a parameter and displays the numbers in the 
results box. It uses an if statement to check if the user has already entered the first number for the calculation 
and also checks whether there is anything stored in the "answer" variable from a previous calculation and uses those
 if they exist. */

function displayEnteredNumbers(entry) {

    if (firstValue) { // If there is already a value entered in the firstValue variable, this will be true
        value = value + entry;
        document.getElementById("resultBox").innerHTML = `${firstValue} ${operatorValue} ${value}`;

    } else if (answer) {
        /* If there is already an answer stored in the "answer" variable from a previous calculation, this will be
         true */
        value = value + entry;
        document.getElementById("resultBox").innerHTML = `${answer} ${value}`;

    } else { // If no previous value or answer exists yet, simply display user input to the screen
        value = value + entry;
        document.getElementById("resultBox").innerHTML = value;
    }
}

/* This passes the operator sign that the user clicks on to the function as a parameter and stores it in a 
variable, to be used in the calculation later. It also uses an if statement to check if there is an answer 
stored in the "answer" variable from a previous calculation, so that it can display that number along with 
the operator sign to the screen. */

function storeOperatorType(type) {
    if (answer) {
        firstValue = answer;
        operatorValue = type;
        document.getElementById("resultBox").innerHTML = `${answer} ${operatorValue}`;

    } else {
        firstValue = value;
        operatorValue = type;
        document.getElementById("resultBox").innerHTML = `${value} ${operatorValue}`;
        value = "";

    }
}

/* This function calculates the answer to the entered sum by first checking what operator has been entered by the 
user, calculating the sum using the correct operator and then storing the resulting answer in a variable. This 
"answer" variable can then be used later, should the user wish to start a new calculation with the answer of the 
previous one. */

function calculateAns() {
    if (operatorValue == "+") {
        answer = ""; // Make sure answer variable is empty before calculation
        answer = Number(firstValue) + Number(value);
        document.getElementById("resultBox").innerHTML = answer; // Display answer to screen

        // Clear variables for next calculation
        value = "";
        firstValue = "";
        operatorValue = "";

    } else if (operatorValue == "-") {
        answer = ""; // Make sure answer variable is empty before calculation
        answer = Number(firstValue) - Number(value);
        document.getElementById("resultBox").innerHTML = answer; // Display answer to screen

        // Clear variables for next calculation
        value = "";
        firstValue = "";
        operatorValue = "";


    } else if (operatorValue == "x") {
        answer = ""; // Make sure answer variable is empty before calculation
        answer = Number(firstValue) * Number(value);
        document.getElementById("resultBox").innerHTML = answer; // Display answer to screen

        // Clear variables for next calculation
        value = "";
        firstValue = "";
        operatorValue = "";


    } else if (operatorValue == "÷") {
        answer = ""; // Make sure answer variable is empty before calculation
        answer = Number(firstValue) / Number(value);
        document.getElementById("resultBox").innerHTML = answer; // Display answer to screen

        // Clear variables for next calculation
        value = "";
        firstValue = "";
        operatorValue = "";

    }
}

/* This function clears the results box and all the variables so the user can start a brand new calculation. */
function clearResultBox() {
    value = "";
    firstValue = "";
    operatorValue = "";
    answer = "";
    document.getElementById("resultBox").innerHTML = ".";
}