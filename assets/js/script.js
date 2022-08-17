var displayDateEl = document.querySelector("#currentDay");
var timeBlocksEl = document.querySelector(".container");

// display current day at top of planner using moment.js
var displayCurrentDate = function() {
    // create variable to show live date using moment.js
    var dateEl = moment().format("MMM Do YY");
    // set date as containers text content
    displayDateEl.textContent = dateEl
}

// create time blocks 9-5 with save btn using bootstrap

    // color code time blocks with .past, .present, .future
    // time blocks using moment.js to sync with live time
// add click event listeners so that the user can enter tasks in time blocks
// add click event listener to save btn
    // save btn saves event in local storage
    // info persists when refreshing the page

displayCurrentDate();