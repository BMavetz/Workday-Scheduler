## Third-Party APIs: Work Day Scheduler

This project creates a workday planner, allowing for an individual to edit and save tasks in blocks designated by hour.  The planner only shows hours that are during business time (9am - 5pm), and only includes the schedule for the current day.  The top of the page displays the current date in Day, Month, dd format.  

The planner itself has save buttons, so task can be saved once entered in a time-block, and upon reloading the page the actions will once again appear.  Upon page refresh, the time blocks also color code to show past, current, and future time slots based on the current hour of the day.

## Page Criteria

The planner meets the following specifications:

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist


## Final Application

You can find the deployed workday scheduler [here](https://bmavetz.github.io/Workday-Scheduler/) 

An image of the deployed webpage, with the current hour of 10AM, is shown below:

![Image of workday scheduler webpage.](./Assets/Workday%20Scheduler%20finished%20page.JPG)


