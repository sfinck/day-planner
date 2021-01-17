# Day-Planner

## Table of Contents 
* [Description](#description)
* [User Story](#userstory)
* [Acceptance Criteria](#acceptancecriteria)
* [Usage](#usage)
* [Deployed Link](#deployed)
* [Installation](#installation)



## Description


My motivation for building this application was to give the user an easy way to log a to-do list that they can monitor throughout the work day. It solves the problem of writing the tasks down and losing the paper, trying to remember tasks off the top of your head and also color codes so the user is able to differntiate what is due and when. 

My biggest take-away from this project is jQuery is an extremely simplifeid way to code in javascript. It saves a lot of time and displays the code in a way that is easier to read for another developer, grader, etc. I also learned that using different javascript libraries is a quick way to use a reference for a variable. For example, if the coder would have to come up with the current time on their own, instead of using the reference it would take significatly longer.  


## User Story 

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Usage 
![day-planner-usage](https://user-images.githubusercontent.com/74476090/104828020-92d16800-582a-11eb-99b3-0ca9ca00a131.png)

## Deployed 

## Installation 
* Created index.html, style.css, script.js and assets folder (images)
* Linked bootstrap ref, moment.js, javascript and jQuery files to index.html
* Created time blocks using bootstrap in index.html
* In javascript file, pulled data from moment.js to display current date and time 
* In javascript file, created a #saveBtn function to store user input and current time selection into local storage 
* In javascript file, created a for loop to change the color of the input boxes to red, green or grey according to the current time 
* Added styling on index.html using assets folder and other basic CSS techniques 

