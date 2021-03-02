//display time live with constant update IRT
$("#currentDay").text(moment().format(" MMMM Do YYYY, h:mm:ss a"));

// this function displays the current date and time
setInterval(function () {
    $("#currentDay").text(moment().format(" MMMM Do YYYY, h:mm:ss a"));
}, 1000)

// variables being declared to create a container | select all of the buttons | Array time and numbers
const createContainer = $(".container");
const saveButton = document.querySelectorAll("button");
const timeList = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
const timeId = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

