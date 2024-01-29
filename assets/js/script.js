// varries :3
var currentDate = dayjs().format('MMM D, YYYY'); // current date; for displaying at the top of the page
var currentHour = dayjs().hour(); // current hour; for checking against the timeblocks for formatting purposes

const relevantHour = [
  // hour values for checking against the current time in the for loop
  hour9Val = 9,
  hour10Val = 10,
  hour11Val = 11,
  hour12Val = 12,
  hour1Val = 13,
  hour2Val = 14,
  hour3Val = 15,
  hour4Val = 16,
  hour5Val = 17
];

const hourDivs = [
  // hour div locations
  hour9Div = $("#hour-9"),
  hour10Div = $("#hour-10"),
  hour11Div = $("#hour-11"),
  hour12Div = $("#hour-12"),
  hour1Div = $("#hour-1"),
  hour2Div = $("#hour-2"),
  hour3Div = $("#hour-3"),
  hour4Div = $("#hour-4"),
  hour5Div = $("#hour-5")
];





// funct that runs the big code has to be in jquery so the page can't run it
// til it hits the jquery call at the bottom of the html
$(function () {

  setText(); // running the funct to fill the textarea with whatevers saved in the console

  // BUTTON ONCLICKS
  
  $("#hour-9").children(".saveBtn").click(function () {
    // grab the text
    let eventText = $(this).siblings("textarea").val();

    // puts the item in localStorage
    localStorage.setItem("event9", eventText);

    // test
    console.log(localStorage.getItem("event9"));
  });

  $("#hour-10").children(".saveBtn").click(function () {
    let eventText = $(this).siblings("textarea").val();
    localStorage.setItem("event10", eventText);
    console.log(localStorage.getItem("event10"));
  });

  $("#hour-11").children(".saveBtn").click(function () {
    let eventText = $(this).siblings("textarea").val();
    localStorage.setItem("event11", eventText);
    console.log(localStorage.getItem("event11"));
  });

  $("#hour-12").children(".saveBtn").click(function () {
    let eventText = $(this).siblings("textarea").val();
    localStorage.setItem("event12", eventText);
    console.log(localStorage.getItem("event12"));
  });

  $("#hour-1").children(".saveBtn").click(function () {
    let eventText = $(this).siblings("textarea").val();
    localStorage.setItem("event1", eventText);
    console.log(localStorage.getItem("event1"));
  });

  $("#hour-2").children(".saveBtn").click(function () {
    let eventText = $(this).siblings("textarea").val();
    localStorage.setItem("event2", eventText);
    console.log(localStorage.getItem("event2"));
  });

  $("#hour-3").children(".saveBtn").click(function () {
    let eventText = $(this).siblings("textarea").val();
    localStorage.setItem("event3", eventText);
    console.log(localStorage.getItem("event3"));
  });

  $("#hour-4").children(".saveBtn").click(function () {
    let eventText = $(this).siblings("textarea").val();
    localStorage.setItem("event4", eventText);
    console.log(localStorage.getItem("event4"));
  });

  $("#hour-5").children(".saveBtn").click(function () {
    let eventText = $(this).siblings("textarea").val();
    localStorage.setItem("event5", eventText);
    console.log(localStorage.getItem("event5"));
  });





  // TIMEBLOCK FORMATTING
  for (let i = 0; i < relevantHour.length; i++) {
    // i is the placement in the relevantHour array

    // functions for changing the class formatting of each timeblock
    // adds the correct class and removes the other two for resetting/changing purposes
    function makePast() {
      hourDivs[i].removeClass("present");
      hourDivs[i].removeClass("future");
      hourDivs[i].addClass("past");
    }

    function makePresent() {
      hourDivs[i].removeClass("past");
      hourDivs[i].removeClass("future");
      hourDivs[i].addClass("present");
    }

    function makeFuture() {
      hourDivs[i].removeClass("past");
      hourDivs[i].removeClass("present");
      hourDivs[i].addClass("future");
    }

    // if statement checks the value of the current hour against each div's hour value + changes the class accordingly
    if (relevantHour[i] < currentHour) {
      console.log("BEFORE");
      makePast();
    } else if (relevantHour[i] > currentHour) {
      console.log("AFTER");
      makePresent();
    } else if (relevantHour[i] = currentHour) {
      console.log("CURRENT");
      makeFuture();
    } else {
      console.log("NONE");
    }
  }





  // localStorage value of each textarea from last save sets text in box
  function setText () {
    $("#hour-9").children("textarea").val(localStorage.getItem("event9"));
    $("#hour-10").children("textarea").val(localStorage.getItem("event10"));
    $("#hour-11").children("textarea").val(localStorage.getItem("event11"));
    $("#hour-12").children("textarea").val(localStorage.getItem("event12"));
    $("#hour-1").children("textarea").val(localStorage.getItem("event1"));
    $("#hour-2").children("textarea").val(localStorage.getItem("event2"));
    $("#hour-3").children("textarea").val(localStorage.getItem("event3"));
    $("#hour-4").children("textarea").val(localStorage.getItem("event4"));
    $("#hour-5").children("textarea").val(localStorage.getItem("event5"));
  }





  // displays the current day at the top of the screen
  $('#currentDate').text(currentDate);
});