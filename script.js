var timeTracker = setInterval(displayCount, 1000);
function displayCount() {
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentTime);
}


// window.localStorage
// console.log(localStorage);



// var timeDiv = $("<div>").att("class","time-block");
// var pastTasks = $("<div>").att("class","past");
// var presentTasks = $("<div>").att("class","present");
// var futureTasks = $("<div>").att("class","future");
// var saveButton = $("<div>").att("class", "saveBtn");
// var userTimes = ["9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"]; 

// // Function to loop through times 
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

// }




//Create a form with 9:00 am - 5:00 pm blocks 
//According to time expiration my blocks need to change different colors: grey- expired, red- current, green-future
//When the file is open the current date is displayed
//When I scroll down I see blocks of times 
//When I click on a time block I can enter an event 
//When I save the event it is saved in local storage 
//When I refresh the page the saved event stays 