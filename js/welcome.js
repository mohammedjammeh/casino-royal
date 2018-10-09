/***************************
		WELCOME PAGE
***************************/

//saves 'stored second name' to be used on welcome page
var savedSecondName = localStorage.getItem("secondName"); 

//Time Variables
var today = new Date(); // gets current date
var hourNow = today.getHours(); //gets hour of the day
var greeting;

// Morning, Afternoon or Evening 
if (hourNow >= 18) {
	greeting = "evening";
} else if (hourNow >= 12) {
	greeting = "afternoon";
} else {
	greeting = "morning";
} 

//Day
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 
var dayOfTheWeek = days[today.getDay()];


document.getElementsByTagName("h2")[0].innerHTML = "Welcome to Casino Royale " + " Mr./Mrs. "  + savedSecondName + ", on this fine " + dayOfTheWeek + " " + greeting + ".";
document.getElementsByTagName("h2")[1].innerHTML = "I hope you enjoy your time, we wish you all the best!";