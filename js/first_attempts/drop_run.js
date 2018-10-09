//http://eloquentjavascript.net/14_event.html#c_eORczkJUsy

function topRight(event) {
	if (event.keyCode == 39) {
		document.getElementById("ball").setAttribute("id", "ballTopRight");
	} else if (event.keyCode == 40) {
		document.getElementById("ball").setAttribute("id", "ballBottomLeft");
	} else {
		return false;
	}
}
addEventListener("keydown", topRight, false);



function bottomRight(event) {
	if (event.keyCode == 40) {
		document.getElementById("ballTopRight").setAttribute("id", "ballBottomRight");
	} else if (event.keyCode == 37) {
		document.getElementById("ballTopRight").setAttribute("id", "ball");
	} else {
		return false;
	}
}
addEventListener("keydown", bottomRight, false);



function bottomLeft(event) {
	if (event.keyCode == 37) {
		document.getElementById("ballBottomRight").setAttribute("id", "ballBottomLeft");
	} else if (event.keyCode == 38) {
		document.getElementById("ballBottomRight").setAttribute("id", "ballTopRight");
	} else {
		return false;
	}
}
addEventListener("keydown", bottomLeft, false);



function topLeft(event) {
	if (event.keyCode == 38) {
		document.getElementById("ballBottomLeft").setAttribute("id", "ball");
	} else if (event.keyCode == 39) {
		document.getElementById("ballBottomLeft").setAttribute("id", "ballBottomRight");
	} else {
		return false;
	}
}
addEventListener("keydown", topLeft, false);


//DANGER
var danger = document.getElementById("danger");

function randomDanger() {
	var randomNumber = Math.floor(Math.random() * 4) + 1;

	if (randomNumber === 1) {
		danger.setAttribute("id", "dangerTopLeft");
		function returnDanger () {
			document.getElementById("dangerTopLeft").setAttribute("id", "danger");
		}
		setTimeout(returnDanger, 1500); 
	} else if (randomNumber === 2) {
		danger.setAttribute("id", "dangerTopRight");
		function returnDanger () {
			document.getElementById("dangerTopRight").setAttribute("id", "danger");
		}
		setTimeout(returnDanger, 1500);
	} else if (randomNumber === 3) {
		danger.setAttribute("id", "dangerBottomRight");
		function returnDanger () {
			document.getElementById("dangerBottomRight").setAttribute("id", "danger");
		}
		setTimeout(returnDanger, 1500);
	} else {
		danger("danger").setAttribute("id", "dangerBottomLeft");
		function returnDanger () {
			document.getElementById("dangerBottomLeft").setAttribute("id", "danger");
		}
		setTimeout(returnDanger, 1500);
	}
}

function dangerTiming () {
	setInterval(randomDanger, 2000);
}

setTimeout(dangerTiming, 5000);



