//variables to be used in function
var score = 0;
var ball = "ball";
var ballTopRight = "ballTopRight";
var ballBottomRight = "ballBottomRight";
var ballBottomLeft = "ballBottomLeft";

document.getElementsByTagName("p")[2].innerHTML = "00s";

//the main function that controls the overall game(what happens when player CLICKS start/play)
function play () {
	document.getElementsByTagName("p")[0].innerHTML = "";
	document.getElementById("innerZone").style.backgroundColor = "#808080";
	document.getElementById("outerZone").style.backgroundColor = "#D3D3D3";
	
	/*when the player presses the arrows on the keyboard,
	  the id of the ball changes which changes the position of the ball (happens in CSS document),
	  additionally, the player's score increases by 1*/

	// keypress tutorial from: http://eloquentjavascript.net/14_event.html#c_eORczkJUsy
	function topRight(event) {
		if (event.keyCode == 39) { //right arrow
			document.getElementById(ball).setAttribute("id", ballTopRight);
			score++;
		} 
	}
	addEventListener("keydown", topRight, false); //calls functions when player presses right arrow



	function bottomRight(event) {
		if (event.keyCode == 40) { //bottom arrow
			document.getElementById(ballTopRight).setAttribute("id", ballBottomRight);
			score++;
		}
	}
	addEventListener("keydown", bottomRight, false); //calls functions when player presses bottom arrow



	function bottomLeft(event) { 
		if (event.keyCode == 37) { //left arrow
			document.getElementById(ballBottomRight).setAttribute("id", ballBottomLeft);
			score++;
		}
	}
	addEventListener("keydown", bottomLeft, false); //calls functions when player presses left arrow



	function topLeft(event) {
		if (event.keyCode == 38) { //top arrow
			document.getElementById(ballBottomLeft).setAttribute("id", ball);
			score++;
		}
	}
	addEventListener("keydown", topLeft, false); //calls functions when player presses top arrow

	//displays player's results
	function results () {
		if (score >= 60) {
			document.getElementsByTagName("p")[0].innerHTML = "Woohoo " + score + " Points " +  "DIAMOND" ;
			score = 0;
		} else if (score >= 45) {
			document.getElementsByTagName("p")[0].innerHTML = score + " Points " +  "GOLD" ;
			score = 0;
		} else if (score >= 30) {
			document.getElementsByTagName("p")[0].innerHTML = score + " Points " + "SILVER" ;
			score = 0;
		} else {
			document.getElementsByTagName("p")[0].innerHTML = score + " Points " + "BRONZE" ;
			score = 0;
		}
		
		document.getElementById("outerZone").style.backgroundColor = "#C484B8";
		var jackpotAud = new Audio();
		jackpotAud.src = "audio/ker-ching.wav";
		jackpotAud.play();
	}
	setTimeout(results, 10000); // calls the results functions after 10s which is when the game is done after the player presses the start button

	//timer for the player
	var counter = 10;
	function countdown () { 
		counter--;

		if (counter >= 0) {
			document.getElementsByTagName("p")[2].innerHTML = "0" + counter + "s";
		}
	}
	setInterval(countdown, 1000); //how often to display timer after player clicks start 
	
	
	//the new red background of timer to emphasise a warning sign to the user
	function warningColour() { 
		document.getElementById("innerZone").style.backgroundColor = "#990000"; //changes background colour
	}
	setTimeout(warningColour, 7000); //from which point of the timer to show the (3s befereo then) to show warning sign
		
}
//gets the start/play button and runs the function above when it is clicked
var playBtn = document.getElementById("play_btn"); 
playBtn.addEventListener('click', play, false);











