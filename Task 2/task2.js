// Task 10 - Compulsory task 2
// Javascript file for math.html file

// This function adds 2 numbers together and prints the answer to the page
function sum() {
    let number1 = Number(document.getElementById("num1").value);
    /* Uses "Number" method to convert string to number to be used in the calculation. I learned about the 
    Number method at the following website: https://www.w3schools.com/js/js_number_methods.asp */

    let number2 = Number(document.getElementById("num2").value);
    let sumAnswer = number1 + number2;
    document.getElementById("ansSum").innerHTML = sumAnswer; // Display answer to page
}

// This function subtracts 2 numbers and prints the answer to the page
function subtract() {
    let number7 = Number(document.getElementById("num7").value);
    let number8 = Number(document.getElementById("num8").value);
    let subtractAnswer = number7 - number8;
    document.getElementById("ansSubtract").innerHTML = subtractAnswer; // Display answer to page
}

// This function multiplies 2 numbers and prints the answer to the page
function multiply() {
    let number3 = Number(document.getElementById("num3").value);
    let number4 = Number(document.getElementById("num4").value);
    let multiplyAnswer = number3 * number4;
    document.getElementById("ansMultiply").innerHTML = multiplyAnswer; // Display answer to page
}

/* This function provides the modulus of 2 numbers (i.e. divides the numbers and outputs the remainder only),
then prints the answer to the page */

function mod() {
    let number5 = Number(document.getElementById("num5").value);
    let number6 = Number(document.getElementById("num6").value);
    let modAnswer = number5 % number6;
    document.getElementById("ansMod").innerHTML = modAnswer; // Display answer to page
}