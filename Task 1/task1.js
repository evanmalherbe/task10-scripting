// Compulsory task 1 - Functions for task1.html
//Declare variable for changeImg() function
let imageStatus = 0;

// ---------------------------------------------- 

function pageLoaded() {
    alert("This webpage has loaded!"); // Create alert to let user know web page has loaded
}

function changeTextSize() {
    document.getElementById("mainHeading").style.fontSize = "40px"; // Change font size of h1 heading to 40px
}

function changeFontStyle() {
    document.getElementById("para1").style.fontStyle = "italic"; // Change font style of paragraph to italic
}
/* Looked up what font styles there are and chose "italic" - https://www.w3schools.com/css/css_font_style.asp 
and https://www.w3schools.com/jsref/prop_style_fontstyle.asp */

function highlight() {
    document.getElementById("para1").style.backgroundColor = "yellow";
    /* Highlight paragraph text (i.e. change background color to yellow) */
}
/* Looked up how to highlight text, but ended up figuring out a simpler way myself (background-color). Looked at 
https://stackoverflow.com/questions/8644428/how-to-highlight-text-using-javascript and
https://medium.com/@codingdudecom/highlight-text-css-97331a5b71b5 */

function hide() {
    document.getElementById("milkImg").style.display = "none"; // Hide image
}
/* Looked up how to hide an image - https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp and
https://www.w3schools.com/css/css_display_visibility.asp */

/* This function changes the image when you click the button, then changes it back when you click again. 
It uses an if statement to check if the button has been clicked before (imageStatus variable would be 1, not 0).
If it hasn't been changed before, it changes image to "strawberry.jpg". If it has been changed, it changes it back
to "vegetables.jpg". The imagesStatus vartiable is also updated with each change to keep track of its status for 
the next button click. 
I didn't refer to any source for the imageStatus thing, I remembered it from high school when we learned 
to program a bit in Turbo Pascal*/
function changeImg() {
    if (imageStatus == 0) {
        document.getElementById("veggiesImg").src = "images/strawberry.jpg";
        document.getElementById("veggiesImg").id = "strawberryImg";
        imageStatus = 1; // change status of variable to show image has been changed
    } else {
        document.getElementById("strawberryImg").src = "images/vegetables.jpg";
        document.getElementById("strawberryImg").id = "veggiesImg";
        imageStatus = 0; // change status of variable to indicate image has been changed back to original img
    }
}

function changeImg2() {
    document.getElementById("strawberryImg").src = "images/vegetables.jpg"; // Change existing image to vegetables.jpg
}

function changeImgBack() {
    document.getElementById("strawberryImg").src = "images/strawberry.jpg"; // Change image back to strawberry.jpg
}

/* Looked up how to toggle between 2 images for the above 3 functions. Looked at the following:
https://stackoverflow.com/questions/52015073/how-to-toggle-between-two-images-with-a-button-using-javascript-code
https://users.aber.ac.uk/ruw/misc/swapimage.php
https://www.quora.com/What-is-the-javascript-code-to-change-between-2-images-on-a-page */

function createAlert() {
    alert("You clicked on the Olive oil image!");
    // Create alert box with message to user saying what image they clicked on when they "right click" on it
}
/* Looked up how to use right click to do something - found "oncontextmenu" - Used the following site:
https://stackoverflow.com/questions/2405771/is-right-click-a-javascript-event */


function formAlert() {
    let favFoodInput = document.getElementById("favFood").value; // Get input from user - what is favourite food
    alert(`Ohhh, so your favourite food is ${favFoodInput}!`); // Create alert to tell user what their fav food is
}

function highlightAll() {
    document.getElementById("para1").style.backgroundColor = "yellow"; // highlight both paragraphs on page
    document.getElementById("para2").style.backgroundColor = "yellow";
}

function unHighlightAll() {
    document.getElementById("para1").style.backgroundColor = "white"; // Remove highlighting from both paragraphs
    document.getElementById("para2").style.backgroundColor = "white";
}