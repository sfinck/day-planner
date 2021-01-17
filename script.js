//Displays current date and time using moment.js file 
var timeTracker = setInterval(displayCount, 1000);
function displayCount() {
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentTime);
}

//Saves user task and the current time block
$(".saveBtn").click(function () {
    var currentID = $(this).attr("data-time");
    var userInput = $("#task-" + currentID).val();
    console.log(this)
    var timeBlock = $(this).attr("data-time");
    console.log(userInput);
    console.log(timeBlock);

    localStorage.setItem(timeBlock, userInput)
})

//insert for loop that changes color of time block according to past, present, future tasks
var currentBlock = moment().hour();
console.log(currentBlock);

localStorage.getItem(timeBlock[0]);
console.log(timeBlock[0]);

for (let i = 9; i <= 18; i++){
    if (currentBlock < i) {
        $(".userTask").addClass("bg-dark");
    }
    else if (currentBlock === i) {
        $(".userTask").addClass("bg-success");
    }
    else { 
        $(".userTask").addClass("bg-danger");

    }
}

