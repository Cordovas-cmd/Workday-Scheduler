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
    let createTime = $("<div class='hour col-1'>")

    // Creates the text area to hold content.
    let createTextarea = $("<textarea class='col-10'>");
    createTextarea.attr("id", timeList[i]); }