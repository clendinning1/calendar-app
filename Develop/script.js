// TO DO
// 4. each timeblock is color coded to indicate whether it is in the past, present, or future
// 5. WHEN I click into a timeblock THEN I can enter an event
// 6. WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage
// 7. WHEN I refresh the page THEN the saved events persist

// label this
var currentTime = dayjs().format('MMM D, YYYY'); // current time
var hour9 = $("#hour-9")
var hour10 = $("hour-10")
var hour11 = $("hour-11")
var hour12 = $("hour-12")
const relevantHour = [
  hour9 === true,
  hour10 === true,
  hour11 === true,
  hour12 === true
];



// funct that runs the big code has to be in jquery so the page can't run it
// til it hits the jquery call at the bottom of the html
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage




  for (let i = 0; i < relevantHour.length; i++) {
    // functions to set the class
    // adds correct class for formatting
    // rmvs other classes for resetting/updating when the time changes
    function makePast() {
      $(relevantHour[i]).removeClass("present");
      $(relevantHour[i]).removeClass("future");
      $(relevantHour[i]).addClass("past");
    }

    function makePresent() {
      $(relevantHour).removeClass("past");
      $(relevantHour).removeClass("future");
      $(relevantHour).addClass("present");
    }

    function makeFuture() {
      $(relevantHour).removeClass("past");
      $(relevantHour).removeClass("present");
      $(relevantHour).addClass("future");
    }

    // if statement that sets the class depending on the hour
    if (relevantHour[i] === true) {
      console.log("BEFORE (true)");
      //makePast();
    } else if (relevantHour[i] === false) {
      console.log("AFTER (false)");
      //makeFuture();
    } else {
      console.log("ERROR");
      //makePresent();
    }
  }



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  


  // if statement that sets the class depending on the hour
  //if (dayjs(relevantHour).isBefore(currentTime, 'hour')) {
  //  console.log("BEFORE");
  //  makePast();
  //} else if (dayjs(relevantHour).isSame(currentTime, 'hour')) {
  //  console.log("CURRENT");
  //  makePresent();
  //} else if (dayjs(relevantHour).isAfter(currentTime, 'hour')) {
  //  console.log("AFTER");
  //  makeFuture();
  //}









  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // displays the current day at the top of the screen
  $('#currentTime').text(currentTime);
});