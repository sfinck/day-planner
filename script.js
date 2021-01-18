//Displays current date and time using moment.js file 
var timeTracker = setInterval(displayCount, 1000);
function displayCount() {
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentTime);
}

for (let x = 0; x <= localStorage.length; x++) {
    let key = localStorage.key(x);
    let text = localStorage.getItem(key);
    console.log(key)
    console.log(text)
    $("#task-" + key).val(text);
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

for (let i = 9; i <= 18; i++) {
    if (currentBlock < i) {
        $("#task-" + i).addClass("bg-success");
    }
    else if (currentBlock === i) {
        $("#task-" + i).addClass("bg-danger");
    }
    else {
        $("#task-" + i).addClass("bg-dark");
    }
}


