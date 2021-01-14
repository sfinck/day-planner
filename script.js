window.localStorage
console.log(localStorage);

var moment = moment(); 
var timeDiv = $("<div>").att("class","time-block");
var pastTasks = $("<div>").att("class","past");
var presentTasks = $("<div>").att("class","present");
var futureTasks = $("<div>").att("class","future");
var saveButton = $("<div>").att("class", "saveBtn")
var userTimes = //create user times array 




//Create a form with 9:00 am - 5:00 pm blocks 
//According to time expiration my blocks need to change different colors: grey- expired, red- current, green-future
//When the file is open the current date is displayed
//When I scroll down I see blocks of times 
//When I click on a time block I can enter an event 
//When I save the event it is saved in local storage 
//When I refresh the page the saved event stays 