//Displays current date and time using moment.js file 
var timeTracker = setInterval(displayCount, 1000);
function displayCount() {
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentTime);
}

//create function that gen after user clicks save button 
//insert 'this' method in select time variable to create an ID 
//called split method to display response from user input when button is clicked 
//create var for time user selected + user input 
//store data in local storage 

// var button = document.getElementById ("saveBtn").addEventListener ("click", saveTask);

$("#saveBtn").click(function () {
    var userInput = $(".userTask").val();
    var timeBlock = $("#setTime").val();
    console.log(userInput);
    console.log(timeBlock);
    
    localStorage.setItem(userInput, timeBlock)
    // var timeBlock = $("#timeBlock").val();
    // console.log(timeBlock, userInput)
    // localStorage.setItem(timeBlock, userInput)
})

//-----------------------------------------------------------------------------------------
//     var selTime = $(this).attr("id").split("-")
//     console.log(this)



//     var enterTask = $(this).attr("id").split("-")[0];


//     var selTime = $(this).attr("id").split("-")[0];
//     var userInput = $(`#${selTime}-text`).val();

//     console.log(selTime, userInput);
//     (console.error);
//     localStorage.setItem(selTime, userInput); 
// }

// $("#saveBtn").click(function () {

//     var selTime = $(this).attr("id").split("-")[0];
//     var userInput = $(`#${selTime}-text`).val();

//     console.log(selTime, userInput);
//     (console.error);
//     localStorage.setItem(selTime, userInput);
// });
//-----------------------------------------------------------------------------------------
//insert condition that changes color of time block according to past, present, future tasks

// function blockColor() {
//     var relTask = moment().hour();
//     for (i = 9; i <= 18; i++) {
//     }
//     if (relTask === 1) {
//     }
// }
// ----------------------------------------------------------------------------------------
//commented code out to try with tutor later 
// window.localStorage
// console.log(localStorage);

// var timeDiv = $("<div>").att("class","time-block");
// var pastTasks = $("<div>").att("class","past");
// var presentTasks = $("<div>").att("class","present");
// var futureTasks = $("<div>").att("class","future");
// var saveButton = $("<div>").att("class", "saveBtn");
// var userTimes = ["9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"]; 

// Function to loop through times 
// function genTimes (); {
//     var userTimes;
//     for (i = 0; i < userTimes.length; i++) {
//       text += userTimes[i] + "<br>";
//     }
// }

// // Dynamically created table 
// var createRow = function (){
// var tRow = $("<tr>");
// var pastTd = $("<td>").append(presentTasks);
// var pastTd = $("<td>").append(futureTasks);
// var pastTd = $("<td>").append(saveButton);
