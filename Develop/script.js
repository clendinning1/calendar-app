// TO DO
// 6. WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage
// 7. WHEN I refresh the page THEN the saved events persist




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

  setText();

  // BUTTON ONCLICKS
  //$(".saveBtn").click(function () {
    // function runs on clicking the save button
  //  for (let i = 0; i < hourDivs.length; i++) {
      // for loop runs through each hour div

      // gets location relative to the saveBtn via "this".
      //$(this).parent(hourDivs[i]).hide();
  //  }
  //});

  $("#hour-9").children(".saveBtn").click(function () {
    // grab the text
    let eventText = $(this).siblings("textarea").val();

    // puts the item in localStorage
    localStorage.setItem("event9", eventText);

    // test
    console.log(localStorage.getItem("event9"));
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





  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // localStorage value sets text in box
  function setText () {
    $("#hour-9").children("textarea").val(localStorage.getItem("event9"));
  }


  // displays the current day at the top of the screen
  $('#currentDate').text(currentDate);
});