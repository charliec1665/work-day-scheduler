var displayDateEl = document.querySelector("#currentDay");

// display current day at top of planner using moment.js
var displayCurrentDate = function() {
    // create variable to show live date using moment.js
    var date = moment().format("MMM Do YY");
    console.log(date);
    // assign text content to element
    var dateEl = displayDateEl.textContent(date);
    // append date to container
    displayDateEl.appendChild(dateEl);
}

// create time blocks 9-5 with save btn using bootstrap
    // color code time blocks with .past, .present, .future
    // time blocks using moment.js to sync with live time
// add click event listeners so that the user can enter tasks in time blocks
// add click event listener to save btn
    // save btn saves event in local storage
    // info persists when refreshing the page

displayCurrentDate();