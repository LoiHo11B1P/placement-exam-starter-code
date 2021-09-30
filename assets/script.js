// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Vinh Pham" // HINT: Replace this with your own name!

// Get the Cookies Order from Local Storage
let serializedOder = JSON.parse(localStorage.getItem('orderInfo'));

console.log(serializedOder);

// We'll use these variables to track the counts of each cookie type
let gb = (serializedOder == null ? 0: serializedOder[0].gb)    // Ginger bread
let cc = (serializedOder == null ? 0: serializedOder[1].cc)      // Chocolate Chip
let sugar = (serializedOder == null ? 0: serializedOder[2].sugar)   // Sugar Sprinkle
let totalCookies = (serializedOder == null ? 0: serializedOder[3].totalCookies);


// Order Summary by ID
let gbQuantityDisplay = document.querySelector('#qty-gb');
gbQuantityDisplay.textContent = gb;

let ccQuantityDisplay = document.querySelector('#qty-cc');
ccQuantityDisplay.textContent = cc;

let sugarQuantityDisplay = document.querySelector('#qty-sugar');
sugarQuantityDisplay.textContent = sugar;

let totalDisplay =  document.querySelector('#qty-total')
totalDisplay.textContent = totalCookies;

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

    saveToLocalStore (); 
}

// Storing Cookie Order in the Local Storage

function saveToLocalStore () {
    // serialize 
    let orderInfo = [{ 'gb': gb}, {'cc': cc}, {'sugar': sugar}, {'totalCookies': totalCookies}];
    let serializedOrderInfo = JSON.stringify(orderInfo);

    // save 
    localStorage.setItem('orderInfo', serializedOrderInfo)
    
}