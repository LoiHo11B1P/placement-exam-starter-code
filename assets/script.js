// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Vinh Pham" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let totalCookies = 0;
// Order Summary by ID
let gbQuantityDisplay = document.querySelector('#qty-gb');
let ccQuantityDisplay = document.querySelector('#qty-cc');
let sugarQuantityDisplay = document.querySelector('#qty-sugar');
let totalDisplay =  document.querySelector('#qty-total')

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    //console.log('Ginger bread + button was clicked!')
    // increase counter
    gb++;
    
    // update quatity display
    gbQuantityDisplay.textContent = gb;

    calculateTotal();
})

// TODO: Hook up event listeners for the rest of the buttons
document.getElementById('minus-gb').addEventListener('click', function () {

    if (gb-1 < 0) {
        gb = 0;
    } else {
        gb--;
    }

    gbQuantityDisplay.textContent = gb;

    calculateTotal();
})

// Chocolate Cookie Event Listener
document.getElementById('add-cc').addEventListener('click', function () {

    cc++;

    ccQuantityDisplay.textContent = cc;

    calculateTotal();
})

document.getElementById('minus-cc').addEventListener('click', function () {

    if (cc-1 < 0) {
        cc = 0;
    } else {
        cc--;
    }

    ccQuantityDisplay.textContent = cc;

    calculateTotal();
})

// Sugar Cookie Event Listener
document.getElementById('add-sugar').addEventListener('click', function () {

    sugar++;

    sugarQuantityDisplay.textContent = sugar;

    calculateTotal();
})

document.getElementById('minus-sugar').addEventListener('click', function () {

    if (sugar-1 < 0) {
        sugar = 0;
    } else {
        sugar--;
    }

    sugarQuantityDisplay.textContent = sugar;

    calculateTotal();
})

function calculateTotal () {
    totalCookies = gb+cc+sugar;
    totalDisplay.textContent = totalCookies;
}