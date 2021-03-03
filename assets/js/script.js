//display time live with constant update IRT
$("#currentDay").text(moment().format(" MMMM Do YYYY, h:mm:ss a"));

// this function displays the current date and time
setInterval(function () {
    $("#currentDay").text(moment().format(" MMMM Do YYYY, h:mm:ss a"));
}, 1000)

// variables being declared to create a container , select all of the buttons , Array time and numbers. (used const because these values aren't going to be changed)
const createContainer = $(".container");
const saveButton = document.querySelectorAll("button");
const timeList = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]; //List of tiemblocks during regular business hours
const timeId = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]; //military time
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// a for loop to iterate through the timeList and timeId array and appends the data (cycles through and "pushes" appropriate content.)
// creates rows and a section for each time slot.
for (let i = 0; i < timeList.length; i++) {
    let createRow = $("<div class='row time-block'>").attr("id", timeId[i]);
    let createTime = $("<div class='hour col-1'>");

    // Creates the text area to hold content.
    let createTextarea = $("<textarea class='col-10'>");
    createTextarea.attr("id", timeList[i]);
    // Will create the button and save icon using "fa-save using a font awesome icon.
    let createButton = $("<button type='button' class='saveBtn col-1 far fa-save'>");

    // this appends the created row to the container
    createContainer.append(createRow);
    // this creates the timeList and appends  8 rows 9am-5pm (regular workday hours)
    createTime.text(timeList[i]);
    createRow.append(createTime); 
    
    // Appends the previously created "text area" so users can input content
    createRow.append(createTextarea); 

// creates buttons for each time slot (8 a.m- 5 p.m regular work hours)
createButton.text();
createRow.append(createButton);
}

 //calls the localStorage Function (will save all user input later in the JS)
 localStorageFunction();

 //function to store the data from the textarea into localStorage
function localStorageFunction() {

    for (let index = 0; index < numbers.length; index++) {
        $("textarea")[index].value = localStorage.getItem("textarea" + String(index + 1)); 
    }
}

// this to save the stored data that has been entered into the textarea (for instance if the page is refreshed)
$("button").on("click", function (event) { //Adds and even't listener for the "button"
    event.preventDefault();

    for (let index = 0; index < numbers.length; index++) {
        localStorage.setItem('textarea' + String(index + 1), $("textarea")[index].value) //Sets item to the value of the text area for the appropriate block in "time list"
    }
});

// Colors the appropriate row / timeblock based upon whether or not the current time of day is equal to less than or past the "timeblock" you're in
// GREY = Already past, RED = Current hour , GREEN = Coming up later in the day
function timeValid() {
    var currentHour = moment().hours(); //Check current timeblock user is in and determines whether it's PAST PRESENT OR FUTURE 
    $(".time-block").each(function () {
        var currentBlock = parseInt($(this).attr("id").split(" ")[0]);

        if (currentBlock < currentHour) {
            $(this).addClass("past");
        } else if (currentBlock === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

//Calls function to check whether time is still valid or not
timeValid()