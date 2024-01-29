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

  // BUTTON ONCLICKS
  //$(".saveBtn").click(function () {
    // function runs on clicking the save button
  //  for (let i = 0; i < hourDivs.length; i++) {
      // for loop runs through each hour div

      // gets location relative to the saveBtn via "this".
      //$(this).parent(hourDivs[i]).hide();
  //  }
  //});


  $(".saveBtn").click(function () {
    // get the text
    var text = $(this).siblings("textarea").val();

    // sets the item in localStorage
    localStorage.setItem("test", text);

    // alert the value to check if we got it
    console.log(localStorage.getItem("test"));
  });


  //let userinit = ["initials:"];
  //let userscore = ["scores:"];
  //let hasScores = false;

  //function saveBtnFunct() {
  //  // grab initials
  //  let playerInitials = document.getElementById("initials")[0].value;
  //
  //  // adds initials and score to arrays
  //  userinit.push(playerInitials);
  //  userscore.push(finalScore);
  //
  //  // translate to string and add to local storage
  //  localStorage.setItem("userinit", JSON.stringify(userinit));
  //  localStorage.setItem("userscore", JSON.stringify(userscore));
  //
  //  // tell the prgrm we have data now
  //  hasScores = true;
  //
  //  // move to high score page
  //  pagehsSwitch();
  //}















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



  //let scoreSpan = document.getElementById("scorespan");
  //function displayScores() {
  //  // resetting scoreboard
  //  scoreSpan.innerText = "";
  //
  //  // pull data from local storage
  //  var grabinit = localStorage.getItem("userinit");
  //  var grabscore = localStorage.getItem("userscore");
  //
  //  // parse it back into an array from a string
  //  var parseinit = JSON.parse(grabinit);
  //  var parsescore = JSON.parse(grabscore);
  //
  //  // if we have no data, don't run this code
  //  if (hasScores === false) { } else {
  //    // for loop modified from stack overflow link in readme.
  //    for (let i = 1; i < parseinit.length; i++) {
  //      // starting at one; running as long as i < the number of values in the array; increasing by one each time the code is executed
  //      let storedScores = document.createElement("p"); // ss creates a paragraph element
  //      storedScores.innerText = ([i] + ". " + parseinit[i] + " - " + parsescore[i]);
  //      // text in the p element = "i. initials - score" for each iteration.
  //      scoreSpan.appendChild(storedScores); // attaches ss to the scorespan id in the html
  //    }
  //  }
  //
  //}





  // displays the current day at the top of the screen
  $('#currentDate').text(currentDate);
});