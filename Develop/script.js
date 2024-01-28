// TO DO
// 3. timeblocks for standard business hours of 9am - 5pm
// 4. each timeblock is color coded to indicate whether it is in the past, present, or future
// 5. WHEN I click into a timeblock THEN I can enter an event
// 6. WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage
// 7. WHEN I refresh the page THEN the saved events persist

// varries
var currentDay = dayjs().format('MMM D, YYYY'); // current time

// functs

// class changes for past/present/future formatting
function makePast() {
  $("#hour-9").addClass("past");
}

function makePresent() {
  $("h1").addClass("present");
}

function makeFuture() {
  $("h1").addClass("future");
}



// funct that runs the big code has to be in jquery so the page can't run it
// til it hits the jquery call at the bottom of the html
$(function () {

  makePast();
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?



  // if [timeblock time] = before this hour, style = class = row time-block past
  // if [timeblock time] = this hour, style = class = row time-block present
  // if [timeblock time] = after this hour, style = class = row time-block future

  // PAST CLASS CHANGE
  // if (timeblock time = hour before currentDay){
  //  makePast();
  //} else if (timeblock time = this hour){
  //   makePresent();
  //} else {
  //   makeFuture();
  //}



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // displays the current day at the top of the screen
  $('#currentDay').text(currentDay);
});